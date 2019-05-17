


    document.write("lets Talk about Test")
    
          console.log("####### Frist Question #########");
    
          //1: Write a function which count the number of occurrence of a word
          //in a paragraph or a sentence.The function countWords takes a paragraph and word as parameters.
    
          const paragraph =
            "I love teaching.If you do not love teaching what else can you love.I love JavaScript if you do not love something which can give life to your application what else can you love.";
    
      const countWords1 = (para, wrd) => {
        const pattern = new RegExp(wrd, "gi");
    const matches = para.match(pattern) || [];
    return matches.length;
  };
  console.log(countWords1(paragraph, "love"));

  console.log("¤¤¤¤¤¤ Second Question ¤¤¤¤¤");

  //2: Write a function which takes an array as a parameter and returns an array of the data types of each item:

      const arr = ['Asabeneh', 100, true, null, undefined, {job: 'teaching' }];
        const checkDataTypes = arr => {
            const dataTypes = []; // creating an empty array
    let type; // will be used in the loop to store the data type of each element in the array
            for (const element of arr) {
        type = typeof element; // type checking of each elements
    dataTypes.push(type);
}
return dataTypes; // returning the above array which contains all the datatypes of the elements
};
console.log(checkDataTypes(arr));
console.log("¤¤¤¤¤¤ Thrid Question ¤¤¤¤¤¤");

/* 3: create a function which filter ages greater than 18 from ages array.
const ages=[35,30,17,18,15,22,16,20];
console.log(agesGreaterEighteen(ages));
[35,30,22,20]; */

const ages = [35, 30, 17, 18, 15, 22, 16, 22];
      const agesGreaterEighteen = (ages) => {
        const agesGreater18 = [];
        for (const age of ages) {
          if (age > 18) {
        agesGreater18.push(age);
    }
  }
  return agesGreater18;
};
console.log(agesGreaterEighteen(ages));

console.log("¤¤¤¤¤¤ Question 4 ¤¤¤¤¤¤¤");

//4:Write a function which calculate the average age of the group

      const averageAge = (ages) => {
        let sum = 0;
        for (const age of ages) {
        sum += age;
    }
    return Math.round(sum / ages.length);
  };

  console.log(averageAge(ages));

  console.log("¤¤¤¤¤¤ Question 5 ¤¤¤¤¤¤¤¤");

  //5:Write a function which remove an item or items from the middle of the array and replace with two items

  const products = ["milk", "Coffee", "Tea", "Honey", "Meat", "Cabage"];
      const removeMiddleItem = (arr, ...items) => {
        let middleIndex;
        if (arr.length % 2 === 0) {
        middleIndex = arr.length / 2 - 1;
    arr.splice(middleIndex, 2, ...items);
        } else {
        middleIndex = Math.floor(arr.length / 2);
    console.log(middleIndex);
    arr.splice(middleIndex, 1, ...items);
  }
  return arr;
};
console.log(removeMiddleItem(products, "potato", "banana"));

console.log("¤¤¤¤¤¤ Question 6 ¤¤¤¤¤¤¤");

/* 6:Write a function which can generate a random Finnish car code(Car plate number).
console.log(genCarPlateNum())
AFG - 205
console.log(genCarPlateNum())
JCB - 586
*/

      const genCarPlateNum = () => {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    let lettersPart = "";
    let numbersPart = "";
    let indexOne;
    let indexTwo;

        for (let i = 0; i < 3; i++) {
        indexOne = Math.floor(Math.random() * letters.length);
    indexTwo = Math.floor(Math.random() * numbers.length);
    lettersPart += letters[indexOne];
    numbersPart += numbers[indexTwo];
  }
        return `${lettersPart}-${numbersPart}`;
  };
  console.log(genCarPlateNum());

  console.log("¤¤¤¤¤ Question 7 ¤¤¤¤¤¤");

  /*==================== 7: The following shopping cart has four products.
Create an addProduct, removeProduct, editProduct, removeAll functions to modify the shopping cart.
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
addProduct("Meat");
["Milk", "Coffee", "Tea", "Honey", "Meat"]
editProduct(3, "Sugar");
["Milk", "Coffee", "Tea", "Sugar", "Meat"]
removeProduct(0);
["Coffee", "Tea", "Sugar", "Meat"]
removeProduct(3);
["Coffee", "Tea", "Sugar"] ==================*/

  const shoppingCart = ["Milk", "Coffe", "Tea", "Honey"];
      const addProduct = (products, product) => {
        return products;
  };
  addProduct(shoppingCart, "Meat");
  console.log(shoppingCart);
      const editProduct = (products, index, product) => {
        products[index] = product;
    return products;
  };

  editProduct(shoppingCart, 3, "Redbull");
  console.log(shoppingCart);
      const removeProduct = (index) => {
        shoppingCart.splice(index, 1);
    return shoppingCart;
  };
  removeProduct(0);
  console.log(shoppingCart);
  removeProduct(2);
  console.log(shoppingCart);

  console.log("¤¤¤¤¤¤ Question 8 ¤¤¤¤¤¤");

  /* ======================== QUESTION 8 ========================================
    Write a function which can generate a random Finnish social security number.
      console.log(genSocialSecurityNum())
    220590 - 255H
    console.log(genSocialSecurityNum())
    190395 - 225J
  ============================================================================= */
      const genSocialSecurityNum = () => {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    let index = Math.floor(Math.random() * letters.length);
    const letter = letters[index]; // getting a letter from the letters array
    let date = Math.floor(Math.random() * 31) + 1; // date from 1 to 31
    let month = Math.floor(Math.random() * 12) + 1; // month from 1 to 12

    //if the date or month is less than 10
        if (date < 10) date = "0" + date;
        if (month < 10) month = "0" + month;

    let year = Math.floor(Math.random() * 2019);
        if (year > 100) {
        year = year.toString().substr(-2);
    } else if (year < 10) {
        year = "0" + year;
    }

    let suffix = "";
        for (let i = 0; i < 3; i++) {
        let randomIndex = Math.floor(Math.random() * numbers.length);
    suffix += numbers[randomIndex];
  }

        return `${date}${month}${year}-${suffix}${letter}`;
  };
  console.log(genSocialSecurityNum());

  console.log("¤¤¤¤¤¤ Question 9 ¤¤¤¤¤¤");

  /* ========================================= QUESTION 9 ==================
The following todoList has three tasks.
Create an addTask, removeTask, editTask, toggleTask, toggleAll,
removeAll functions to modify the todoList.
const todoList = [
  {
        task: 'Prepare JS Test',
    time:'4/3/2019 8:30',
    completed:true

  },
  {
        task: 'Give JS Test',
    time:'4/3/2019 10:00',
    completed:false

  },
  {
        task: 'Assess Test Result',
    time:'4/3/2019 1:00',
    completed:false

  }]
=========================================== */

      const todoList = [
        {
        task: "Prepare Js Test",
    time: "4/3/2019 8:30",
    completed: true
  },

        {
        task: "Give Js Test",
    time: "4/3/2019 10:00",
    completed: true
  },

        {
        task: "Assess Test Result",
    time: "4/3/2019 1:00",
    completed: false
  }
];

      const diplayDateTime = () => {
        const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();
    const hours = now.getHours();

    let minutes = now.getMinutes();

        if (minutes < 10) {
        minutes = "0" + minutes;
    }
        return `${date}/${month}${year}${hours}${minutes}`;
  };

      const addTask = (task) => {
        const time = diplayDateTime();
    const completed = false;
        const newTask = {task, time, completed };
    todoList.push(newTask);
  };

      const editTask = (index, task) => {
        todoList[index].task = task;
    };

      const removeTask = (index) => {
        todoList.splice(index, 1);
    };

      const toggleTask = (index, task) => {
        todoList[index].completed = !todoList[index].completed;
    };

      const toggleAll = (arr) => {
        let completedTodos = 0;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].completed) {
        completedTodos++;
    }
          if (completedTodos === arr.length) {
            for (let i = 0; i < arr.length; i++) {
        arr[i].completed = !arr[i].completed;
    }
          } else {
            for (let i = 0; i < arr.length; i++) {
        arr[i].completed = true;
    }
  }
}
return arr;
};
console.log(toggleAll(todoList));
      const removeAll = () => {
        todoList = [];
    return todoList;
  };
  console.log(todoList);

  console.log("¤¤¤¤¤¤ Question 10 ¤¤¤¤¤¤");

  /* ========================= QUESTION 10 =========================
  Write a function which check if items of an array are unique?
  const arrOne = [1, 4, 6, 2, 1];
  console.log(checkUniqueness(arrOne));
  false
  const arrTwo = [1, 4, 6, 2, 3]
  console.log(checkUniqueness(arrTwo));
  true
================================================================== */

      const checkUniqueness = (arr) => {
        let uniquenesFlag = true;
        for (const element of arr) {
          if (arr.indexOf(element) !== arr.lastIndexOf(element)) {
        uniquenesFlag = false;
    break;
  }
}
return uniquenesFlag;
};

const arrOne = [1, 4, 6, 2, 1];
console.log(checkUniqueness(arrOne));

const arrTwo = [1, 4, 6, 2, 1];
console.log(checkUniqueness(arrTwo));

console.log("¤¤¤¤¤¤ Question 11 ¤¤¤¤¤¤¤");

/* ====================== QUESTION 11 ==========================================================
Write a function named shuffle, it takes an array parameter and it returns a shuffled array.
============================================================================================= */

      const shuffle = (arr) => {
        const shuffledArray = []; // empty array to store shaffled array
    let index; // random index which we use to take element from the original array
    let element; // the item we get using the random index will be stored in element
        while (shuffledArray.length !== arr.length) {
        index = Math.floor(Math.random() * arr.length);
    element = arr[index];
          if (shuffledArray.indexOf(element) === -1) {
        shuffledArray.push(element);
    }
  }
  return shuffledArray;
};
console.log(shuffle([1, 2, 3, 4, 5]));

console.log("¤¤¤¤¤¤¤¤ Question Bonus ¤¤¤¤¤¤¤");

/* =============================== Bonus =============================================
  Write a function which filter users who has scoresGreaterThan85.
  Write a function which addUser to the user array only if the user does not exist.
  Write a function which addUserSkill which can add skill to a user only if the user exist.
  Write a function which editUser if the user exist in the users array.
 ========================================================================================== */

const users = [
        {
        name: "masood",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16
  },
        {
        name: "mustafa",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18
  },
        {
        name: "Husham",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22
  },
        {
        name: "Andre",
    scores: 85,
    skills: ["HTM"],
    age: 25
  },
        {
        name: "Sarakhan",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26
  },
        {
        name: "Koray",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18
  },
        {
        name: "Harri",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20
  }
];

      const scoresGreaterThan85 = (arr) => {
        const scores = [];
        for (const element of arr) {
          if (element.scores > 85) {
        scores.push(element.scores);
    }
  }
  return scores;
};

console.log(scoresGreaterThan85(users));
      const newUser = {
        name: "Musavy",
    scores: 800,
    skills: ["HTML", "CSS", "JS"],
    age: 250
  };
      const addUser = (arr, newUser) => {
        for (const user of arr) {
          if (user["name"] === newUser.name) {
            return " A user does exist";
  }
}
arr.push(newUser);
return arr;
};
console.log(addUser(users, newUser));

      const addUserSkill = (arr, name, skill) => {
        let found = false;
        for (const user of arr) {
          if (user["name"] === name) {
        user.skills.push(skill);
    found = true;
    break;
  }
}
        if (!found) {
          return "A user does not exist";
  }

  return arr;
};
console.log(addUserSkill(users, "Brook", "Node"));

      const editUser = (arr, name, newUser) => {
        let found = false;
        for (const user of arr) {
          if (user["name"] === name) {
        user.name = newUser.name;
    user.scores = newUser.scores;
    user.skills = newUser.skills;
    user.age = newUser.age;
    found = true;
    break;
  }
}
        if (!found) {
          return "A user does not exist";
  }

  return arr;
};
console.log(editUser(users, "Brook", newUser));
      console.log(users);