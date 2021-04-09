bitcoinScarceDis= '<p>Bitcoin is scarce. Only 21 million bitcoin will ever be created. Ever.</p> <p>You can not say how many dollars will be printed, gold mined, or shitcoins created.</p>'
goldScarceDis="Gold is naturally scarce. It takes work to mine more of it and can not be printed out of thin air like US dollars. Unlike Bitcoin, it is not definitely known how much gold exists, there are tons of gold in space that Elon Musk will mine in the future."
fiatScarceDis="Fiat is not scarce. No one knows how many dollars are in circulation. No one knows how many dollars will be printed tomorrow, in the next year, the next 10 years"
cryptoScarceDis="Cryptocurrencies are not scarce. Over 8000 different cryptos have been created at the time of this writing"

bitcoinVerifiableDis= "Bitcoin is the most verifiable money on the planet. You can run the bitcoin software yourself, verify the amount of bitcoin in your wallet, and verify the current supply. The software is simple to download and the size of the blockchain (record of bitcoin transation history) is small enough to keep on a 1TB hard drive"
goldVerifiableDis="Gold can be verified by professional jewelers. Testing for legitimacy of gold is not as simple as running a piece of software."
fiatVerifiableDis="fv"
cryptoVerifiableDis="cv"

bitcoinFungibleDis= "bf"
goldFungibleDis="gf"
fiatFungibleDis="ff"
cryptoFungibleDis="cf"

bitcoinPortableDis= "bp"
goldPortableDis="gp"
fiatPortableDis="fp"
cryptoPortableDis="cp"

bitcoinDurableDis= "bdu"
goldDurableDis="gdu"
fiatDurableDis="fdu"
cryptoDurableDis="cdu"

bitcoinDivisibleDis= "bd2"
goldDivisibleDis="gd2"
fiatDivisibleDis="fd2"
cryptoDivisibleDis="cd2"

bitcoinEstablishedHistoryDis= "beh"
goldEstablishedHistoryDis="geh"
fiatEstablishedHistoryDis="feh"
cryptoEstablishedHistoryDis="ceh"



document.getElementById("bitcoin-scarce").addEventListener("click", function(){modifyText(bitcoinScarceDis)});
document.getElementById("gold-scarce").addEventListener("click", function(){modifyText(goldScarceDis)});
document.getElementById("fiat-scarce").addEventListener("click", function(){modifyText(fiatScarceDis)});
document.getElementById("crypto-scarce").addEventListener("click", function(){modifyText(cryptoScarceDis)});

document.getElementById("bitcoin-verifiable").addEventListener("click", function(){modifyText(bitcoinVerifiableDis)});
document.getElementById("gold-verifiable").addEventListener("click", function(){modifyText(goldVerifiableDis)});
document.getElementById("fiat-verifiable").addEventListener("click", function(){modifyText(fiatVerifiableDis)});
document.getElementById("crypto-verifiable").addEventListener("click", function(){modifyText(cryptoVerifiableDis)});

document.getElementById("bitcoin-fungible").addEventListener("click", function(){modifyText(bitcoinFungibleDis)});
document.getElementById("gold-fungible").addEventListener("click", function(){modifyText(goldFungibleDis)});
document.getElementById("fiat-fungible").addEventListener("click", function(){modifyText(fiatFungibleDis)});
document.getElementById("crypto-fungible").addEventListener("click", function(){modifyText(cryptoFungibleDis)});

document.getElementById("bitcoin-portable").addEventListener("click", function(){modifyText(bitcoinPortableDis)});
document.getElementById("gold-portable").addEventListener("click", function(){modifyText(goldPortableDis)});
document.getElementById("fiat-portable").addEventListener("click", function(){modifyText(fiatPortableDis)});
document.getElementById("crypto-portable").addEventListener("click", function(){modifyText(cryptoPortableDis)});

document.getElementById("bitcoin-durable").addEventListener("click", function(){modifyText(bitcoinDurableDis)});
document.getElementById("gold-durable").addEventListener("click", function(){modifyText(goldDurableDis)});
document.getElementById("fiat-durable").addEventListener("click", function(){modifyText(fiatDurableDis)});
document.getElementById("crypto-durable").addEventListener("click", function(){modifyText(cryptoDurableDis)});

document.getElementById("bitcoin-divisible").addEventListener("click", function(){modifyText(bitcoinDivisibleDis)});
document.getElementById("gold-divisible").addEventListener("click", function(){modifyText(goldDivisibleDis)});
document.getElementById("fiat-divisible").addEventListener("click", function(){modifyText(fiatDivisibleDis)});
document.getElementById("crypto-divisible").addEventListener("click", function(){modifyText(cryptoDivisibleDis)});

document.getElementById("bitcoin-established-history").addEventListener("click", function(){modifyText(bitcoinEstablishedHistoryDis)});
document.getElementById("gold-established-history").addEventListener("click", function(){modifyText(goldEstablishedHistoryDis)});
document.getElementById("fiat-established-history").addEventListener("click", function(){modifyText(fiatEstablishedHistoryDis)});
document.getElementById("crypto-established-history").addEventListener("click", function(){modifyText(cryptoEstablishedHistoryDis)});

function modifyText(new_text) {
    document.getElementById("description").innerHTML = new_text;
  }
