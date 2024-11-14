// lab.js - Conditionals
// Author: Shea Line <sline@ucsc.edu>
// Date: 11/14/2024

// Array objects with each house and their corresponding description
housesArray = [
  {
    title: "Gryffindor",
    text: "A Gryffindor values 'bravery, daring, nerve, and chivalry.' Those sorted in this house are not always what you may think of as 'brave' (they can be afraid), but they almost always will choose to do the right thing, despite consequences. They are the popular house and all the Potterheads want to be Gryffindor, even if they don't necessarily belong.",
  },
  {
    title: "Hufflepuff",
    text: "A Hufflepuff values 'hard work, dedication, patience, loyalty, and fair play.' They are generally kind-hearted, diligent, and reliable. But they are also the unpopular house and many Potterheads treat being sorted into Hufflepuff like being worse than getting kissed by a dementor.",
  },
  {
    title: "Ravenclaw",
    text: "A Ravenclaw values 'intelligence, knowledge, and wit.' The nerds of Hogwarts, but in the best way. They don't need a wand to disarm you. Their words will cut you to the bone. They are highly intelligent, resourceful, creative, and clever. They're pretty cool and most Potterheads don't mind being sorted into Ravenclaw",
  },
  {
    title: "Slytherin",
    text: "A Slytherin values 'ambition, cunning, and resourcefulness.' They are sly and clever in every way. They don't need to be brash to get what they want. They are considered the bullies of Hogwarts and the general all around evil-doers. But there are tons of great Slytherin alumni. We just hear a whole lot about the bad ones",
  },
  {
    title: "Grufflepuff (Gryffindor + Hufflepuff)",
    text: "Grufflepuffs are brave and courageous, and they use those traits to do good for others. They work hard, and are not afraid to speak their minds. They value honesty, goodness, kindness, and most of all, love. A Grufflepuff is the kind of person you want to be. They hold themselves to high standards and are just genuinely all around awesome people",
  },
  {
    title: "Ravendor (Ravenclaw + Gryffindor)",
    text: "A Ravendor boldly goes where no one else goes intellectually. They are not afraid to debate philosophy and controversial matters, and as firm and confident as they are in themselves, they are also open minded and willing to learn. They are smart, but not intellectual snobs (though if they aren't careful they may come off that way). They'll help you with your homework, even if they have piles of their own. They are the most adept public speakers of the lot",
  },
  {
    title: "Slyffindor (Slytherin + Gryffindor)",
    text: "You'd think that Slyffindors are a constant battle for good and evil, but that is not always the case. They are ambitious, and not afraid to do what they have to do to get where they want to be. They are extraodinary business men and women, and are highly successful. Slyffindors are the definition of ambiverts. They have the charm and charisma that helps them get whatever they want, but they know just when and how to be quiet. And they like those moments of quiet. Sure, some Slyffindors are extremely torn between the darkness and the light, and they often have a very strong devil/angel on the shoulder thing going on in their heads, but a lot of them are really awesome.",
  },
  {
    title: "Ravenpuff (Ravenclaw + Hufflepuff)",
    text: "These are the people that you see in the library studying at all hours of the day. They are determined to be the very best they can be at everything, whether it be art, music, school or sports. They are always pushing themselves, not to be better than anyone else, but to personally better themselves. Sometimes, they can go a little overboard in their pursuit for greatness, and they can get upset when things don't go their way, but they are extraordinarily reliable and good at basically everything, so they are an excellent resource to keep around.",
  },
  {
    title: "Raverin (Ravenclaw + Slytherin)",
    text: "Don't mess with a Raverin. Seriously. Don't. They are not only intelligent, witty, and creative, but they are sly, ambitious, and can be very cutthroat. They know just how to kill you in the worst way possible and make it look like an accident. But they aren't all bad. Sherlock Holmes would definitely be a Raverin, and he uses his sly intelligence to do good. Sure he may rub people the wrong way at times, but he genuinely is an awesome guy. But Moriarty would also be a Raverin. Let's just say it is up to each Raverin to choose his or her path, and it is up to you to decide if your beef with a Raverin is really worth what they'll give back to you if you decide to mess with them.",
  },
  {
    title: "Slytherpuff (Hufflepuff + Slytherin)",
    text: "Slytherpuffs are the 'good Slytherins,' if you will. They are ambitious and they have deeply rooted morals that keep them grounded. They use that resourcefulness and ambition to help others, do good things, and spread kindness. They would be the kind of people that start non-profits (if wizards have non-profits, that is). They are some of the best kind of people. We could definitely see them palling around with Grufflepuffs.",
  },
];

/**
 * Returns a hash code from a string used to get a random number based on the hex value of the string.
 * @param  {String} str The string to hash.
 * @return {Number}    A 32bit integer
 * @see http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
 * @see https://stackoverflow.com/questions/6122571/simple-non-secure-hash-function-for-javascript/8831937#8831937
 */
function hashCode(str) {
  let hash = 0;
  for (let i = 0, len = str.length; i < len; i++) {
    let chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

//function to get the house
function getHouse(str) {
  let hash = hashCode(str);
  return housesArray[hash % housesArray.length].title;
}

//function to get the house description
function getDescription(str) {
  let hash = hashCode(str);
  return housesArray[hash % housesArray.length].text;
}

$("#input-box").click(function () {
  $("#output,#tail-box").hide();
}); //hide output when input box is clicked (to reset)

$("#submit").click(function () {
  let name = $("#input-box").val();
  let house = getHouse(name);
  let description = getDescription(name);
  $("#output #house").html(house + "!");
  $("#output #description").html(description);
  $("#output,#tail-box").show(); //show output on website
});
