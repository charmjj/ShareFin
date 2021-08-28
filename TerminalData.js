// to instantiate SubscriptionPackage object
function SubscriptionPackage(level, hoursPerWeek, pricePerMonth) {
    this.level = level, // terminal ID
    this.hoursPerWeek = hoursPerWeek,
    this.pricePerMonth = pricePerMonth // in SGD
}

// to instantiate Terminal object -->   let newTerminal = new Terminal(...)
function Terminal(id, terminalName, imageURL, description, subscriptionPackages) {
    this.id = id, // string
    this.terminalName = terminalName; // string
    this.imageURL = imageURL; // string
    this.description = description; // string
    this.subscriptionPackages = subscriptionPackages; // array
}

let BTsubscriptionPackage1 = new SubscriptionPackage("Competent", 5, 60); // terminal, hoursPerWeek, pricePerMonth
let BTsubscriptionPackage2 = new SubscriptionPackage("Proficient", 10, 120);

let BloomBergTerminal = new Terminal(
    id = "BT",
    terminalName = "Bloomberg Terminal", 
    imageURL = "https://data.bloomberglp.com/company/sites/51/2019/08/og-image-generic-lp.png",
    description = "The world-renowned financial data tool",
    subscriptionPackages = [BTsubscriptionPackage1, BTsubscriptionPackage2]
);


let REsubscriptionPackage1 = new SubscriptionPackage("Competent", 6, 60);
let REsubscriptionPackage2 = new SubscriptionPackage("Proficient", 12, 110);
let REsubscriptionPackage3 = new SubscriptionPackage("Expert", 18, 150);

let RefinitiveEikon = new Terminal(
    id = "RE",
    terminalName = "Refinitive Eikon", 
    imageURL = "https://www.investopedia.com/thmb/BJjS2PPauZ6FLbZyopwKFQ1FlNI=/1576x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Refinitiv-5e7a5c90211647a68709db1bfdc3b3aa.jpg",
    description = "Best option for serious investors",
    subscriptionPackages = [REsubscriptionPackage1, REsubscriptionPackage2, REsubscriptionPackage3]
);

let FSsubscriptionPackage1 = new SubscriptionPackage("Competent", 5, 25);
let FSsubscriptionPackage2 = new SubscriptionPackage("Proficient", 10, 50);

let FactSet = new Terminal(
    id = "FS",
    terminalName = "FactSet", 
    imageURL = "https://www.investopedia.com/thmb/_WiTWC_9haktB-ztY_NJOWhyPsg=/2194x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Factset-0015542fba5b4289a532c97616ed2950.jpg",
    description = "Handy yet affordable",
    subscriptionPackages = [FSsubscriptionPackage1, FSsubscriptionPackage2]
);

// master terminal array
let terminalDataList = [BloomBergTerminal, RefinitiveEikon, FactSet];