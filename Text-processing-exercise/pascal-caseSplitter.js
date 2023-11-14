function pascalSplitter(str) {

    console.log(str.split(/(?=[A-Z])/).join(", "))
}

pascalSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')