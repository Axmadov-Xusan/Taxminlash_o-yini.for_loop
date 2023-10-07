//  8. Taxminlash o'yini simulyatsiya qiladigan dastur yaratish, foydalanuvchi
//  tasodifiy generatsiya qilingan sonni topish uchun while siklidan foydalanish.

exit: while (true) {
  let key = +prompt("1. Boshlash \n2.Chiqish");
  switch (key) {
    case 1:
      Taxmin_Oyin();
      break;
    case 2:
      break exit;
  }
}

function Taxmin_Oyin() {
  alert("Siz o`ylagan sonni kompyuter topadi ");
  let min = +prompt("min: ");
  let max = +prompt("max: ");

  let count = 0;
  while (true) {
    count++;
    let randomSon = Math.round(Math.random() * (max - min) + min);

    let TanlanganSon = +prompt(
      `${randomSon} sonini oyladingizmi?  \n 0. Ha \n 1. Men o'ylagan son ${randomSon} dan katta \n 2.Men Men o'ylagan son ${randomSon} dan kichik`
    );
    if (TanlanganSon == 0) {
      alert(`Kompyuter sonni ${count} urinishda topdi`);
      break;
    }
    if (TanlanganSon == 1) {
      min = randomSon + 1;
    } else if (TanlanganSon == 2) {
      max = randomSon - 1;
    }
  }

  alert("Endi kompyuter o`ylagan sonni toping");

  let randomSon = Math.round(Math.random() * (max - min) + min);

  let userCount = 0;
  while (true) {
    let userAnswer = +prompt(
      "Taxmininggiz: "
    );
    userCount++;
    if (userAnswer === randomSon) break;
    if (userAnswer > randomSon) {
      alert("Topa olmadingiz \n kompyter o`ylagan son kichik");
    } else if (userAnswer < randomSon) {
      alert("Topa olmadingiz \n kompyter o`ylagan son katta");
    }
  }
  alert("Siz " + userCount + "ta urinishda topdingiz");

  if (userCount < count) {
    alert("Tabriklaymiz siz kompyuterni yutdingiz");
  } else if (userCount > count) {
    alert("Afsuski siz yutqazdingiz");
  } else alert("Natija durrang");
}
