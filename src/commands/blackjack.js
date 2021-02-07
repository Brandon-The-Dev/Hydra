const { MessageEmbed } = require('discord.js');
const itemss = require('../utils/items');
const i = '<:infomation:779736273639440394>'
const x = '<:bigx:779736072367505449>'
const tick = '<:bigtick:779736050892931082>'

module.exports.run = async (bot, message, args, ) => {
        const userData = await bot.fetchUser(message.author.id);
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        let betAmount = 0;
        let a = message.guild.member(message.author).displayName;
  
        if (args[0] === 'all' || args[0] === 'max') {
            betAmount = userData.coinsInWallet;
        } else {
            betAmount = parseInt(args[0]);
        }

        if (!betAmount || betAmount < 1 || betAmount > userData) {
          let numbererrorembed = new MessageEmbed()
            .setColor("RED")
            .setDescription(`${x} **${member.user.username}** : That's not a number.`);

            return message.channel.send(numbererrorembed).catch();
            //return message.channel.send('That\'s not a number.');
          return
        }

        if (!userData) {
          let moneyerrorembed = new MessageEmbed()
            .setColor("RED")
            .setDescription(`${x} **${member.user.username}** : You don't have that many coins.`);
            //return message.channel.send("You don't have that much money.");
          return message.channel.send(moneyerrorembed).catch();
        }
      if (betAmount > userData.coinsInWallet) {
      let moneywarn = new MessageEmbed()
    .setColor("RED")
    .setDescription(`${x} **${member.user.username}** : You dont have that many coins.`);

           return message.channel.send(moneywarn);
           }
  if (betAmount < 200) {
  let coinmin = new MessageEmbed()
    .setColor("RED")
    .setDescription(`${x} **${member.user.username}** : The minimum you can gamble is \`200\` coins.`);

  return message.channel.send(coinmin);
  }

        // ** BEGIN Javascript blackjack game from echohatch1. Modified for Grape.

        var numCardsPulled = 0;
        var gameOver = false;

        var player = {
            cards: [],
            score: 0
        };
        var dealer = {
            cards: [],
            score: 0
        };

        function getCardsValue(a) {
            var cardArray = [],
                sum = 0,
                i = 0,
                dk = 10.5,
                doubleking = "QQ",
                aceCount = 0;
            cardArray = a;
            for (i; i < cardArray.length; i += 1) {
                if (cardArray[i].rank === "J" || cardArray[i].rank === "Q" || cardArray[i].rank === "K") {
                    sum += 10;
                } else if (cardArray[i].rank === "A") {
                    sum += 11;
                    aceCount += 1;
                } else if (cardArray[i].rank === doubleking) {
                    sum += dk
                } else {
                    sum += cardArray[i].rank;
                }
            }
            while (aceCount > 0 && sum > 21) {
                sum -= 10;
                aceCount -= 1;
            }
            return sum;
        }

        var deck = {
            deckArray: [],
            initialize: function() {
                var suitArray, rankArray, s, r, n;
                suitArray = ["clubs", "diamonds", "hearts", "spades"];
                rankArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
                n = 13;
                for (s = 0; s < suitArray.length; s += 1) {
                    for (r = 0; r < rankArray.length; r += 1) {
                        this.deckArray[s * n + r] = {
                            rank: rankArray[r],
                            suit: suitArray[s]
                        };
                    }
                }
            },
            shuffle: function() {
                var temp, i, rnd;
                for (i = 0; i < this.deckArray.length; i += 1) {
                    rnd = Math.floor(Math.random() * this.deckArray.length);
                    temp = this.deckArray[i];
                    this.deckArray[i] = this.deckArray[rnd];
                    this.deckArray[rnd] = temp;
                }
            }
        };

        deck.initialize();
        deck.shuffle();

        async function bet(outcome) {
            if (outcome === "win") {
               const wonCoins = parseInt(betAmount + (betAmount * 0.15));
               userData.coinsInWallet += parseInt(wonCoins);
               await userData.save();
            }
            if (outcome === "lose") {
            const lostCoins = (betAmount);
            userData.coinsInWallet -= parseInt(betAmount);
            await userData.save();
            }
        }

        function resetGame() {
            numCardsPulled = 0;
            player.cards = [];
            dealer.cards = [];
            player.score = 0;
            dealer.score = 0;
            deck.initialize();
        }

        function endMsg(title, msg, dealerC) {
            let cardsMsg = "";
            player.cards.forEach(function(card) {
                cardsMsg += "[`" + card.rank.toString();
                if (card.suit == "hearts") cardsMsg += "♥"
                if (card.suit == "diamonds") cardsMsg += "♦"
                if (card.suit == "spades") cardsMsg += "♠"
                if (card.suit == "clubs") cardsMsg += "♣"
                cardsMsg += "`](https://docs.brandondev.xyz/) "
            });
            cardsMsg += " --> " + player.score.toString()

            let dealerMsg = "";
            if (!dealerC) {
                dealerMsg = "[`" + dealer.cards[0].rank.toString();
                if (dealer.cards[0].suit == "hearts") dealerMsg += "♥"
                if (dealer.cards[0].suit == "diamonds") dealerMsg += "♦"
                if (dealer.cards[0].suit == "spades") dealerMsg += "♠"
                if (dealer.cards[0].suit == "clubs") dealerMsg += "♣"
                dealerMsg += " ? ?`](https://docs.brandondev.xyz/)"
            } else {
                dealerMsg = "";
                dealer.cards.forEach(function(card) {
                    dealerMsg += "[`" + card.rank.toString();
                    if (card.suit == "hearts") dealerMsg += "♥"
                    if (card.suit == "diamonds") dealerMsg += "♦"
                    if (card.suit == "spades") dealerMsg += "♠"
                    if (card.suit == "clubs") dealerMsg += "♣"
                    dealerMsg += "`](https://docs.brandondev.xyz/) "
                });
                dealerMsg += " --> " + dealer.score.toString()
            }

            const gambleEmbed = new MessageEmbed()
                .setColor('#dd2de0')
                .setTitle(message.author.username + `'s Blackjack Game` )
                .addField('Your Cards', cardsMsg)
                .addField('Dealer\'s Cards', dealerMsg)
                .addField(title, msg)
                .setThumbnail(member.user.displayAvatarURL({ format: 'png', size: 256, dynamic: true }))
                .setFooter('Hydra+ .');

            message.channel.send(gambleEmbed);
        }

        async function endGame() {
            if (player.score === 21) {
                bet('win');
                gameOver = true;
                await endMsg("You win", "You got 21! You win!", true)
            }
            if (player.score > 21) {
                bet('lose');
                gameOver = true;
                await endMsg("You have lost", `You got over 21 \`bust\` `, true)
            }
            if (dealer.score === 21) {
                bet('lose');
                gameOver = true;
                await endMsg("You lost", "dealer got 21 ", true)
            }
            if (dealer.score > 21) {
                bet('win');
                gameOver = true;
                await endMsg("You won !", "Dealer busted. You win", true)
            }
            if (dealer.score >= 17 && player.score > dealer.score && player.score < 21) {
                bet('win');
                gameOver = true;
                await endMsg("You won !", "Dealer stoped on 17 or above and still didnt get a higer total than you. You win", true)
            }
            if (dealer.score >= 17 && player.score < dealer.score && dealer.score < 21) {
                bet('lose');
                gameOver = true;
                await endMsg("You lost", "Dealer has won.", true)
            }
            if (dealer.score >= 17 && player.score === dealer.score && dealer.score < 21) {
                gameOver = true;
                await endMsg("Dealer and Player cards total the same", "draw ", true)
            }
        }

        function dealerDraw() {

            dealer.cards.push(deck.deckArray[numCardsPulled]);
            dealer.score = getCardsValue(dealer.cards);
            numCardsPulled += 1;
        }

        function newGame() {
            hit();
            hit();
            dealerDraw();
            endGame();
        }

        function hit() {
            player.cards.push(deck.deckArray[numCardsPulled]);  // END Javascript blackjack game from echohatch1. Modified by Brandon-The-Dev for Hydra+
            player.score = getCardsValue(player.cards);

            numCardsPulled += 1;
            if (numCardsPulled > 2) {
                endGame();
            }
        }

        function stand() {
            while (dealer.score < 17) {
                dealerDraw();
            }
            endGame();
        }
        

        newGame();
        async function loop() {
            if (gameOver) return;

            endMsg("Info", "Hit = [\`h\`](https://docs.brandondev.xyz/)  |  Stand = [\`s\`](https://docs.brandondev.xyz/)  | [\`cancel\`](https://docs.brandondev.xyz/) but you will lose your bet ? ", false)

            let filter = m => m.author.id === message.author.id;
            message.channel.awaitMessages(filter, {
                max: 1,
                time: 25000,
                errors: ['time']
            }).then(message => {
                message = message.first()
                if (message.content === "h" || message.content.includes("Hit") || message.content.includes("hit")) { // if (colour == "b" || colour.includes("black")) colour = 0;
                    hit();
                    loop();
                    return
                } else if (message.content === "s"  || message.content.includes("Stand") || message.content.includes("stand")) {
                    stand();
                    loop();
                    return
                } else {
                    //message.channel.send("you bafoon. I am taking all of your money");
                           let cancel = new MessageEmbed()
                          .setColor("RED")
                          .setDescription(`${x} **${member.user.username}** : You canceled the game, now you have lost your bet of **${betAmount.toLocaleString()}** coins`);
                          return message.channel.send(cancel).catch();
                    bet("lose");
                    return
                }
            }).catch(_ => {
                //message.channel.send("you bafoon. I took all your money when you went to the bathroom.");
                          let timeout = new MessageEmbed()
                          .setColor("RED")
                          .setDescription(`${x} **${member.user.username}** : You toke to long to pick, now you have lost your bet of **${betAmount.toLocaleString()}** coins`);
                          return message.channel.send(timeout).catch();
                bet("lose");
                return
            })
        }

        await loop()
    };
module.exports.config = {
    name: 'blackjack', // Command Name
    description: 'allows you to beg people for coins.', // Description
    usage: 'h bj', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: ['bj', 'blackjack'], // Aliases 
    bankSpace: 15, // Amount of bank space to give when command is used.
    cooldown: 1 // Command Cooldown
}
