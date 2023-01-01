"use strict";

let numberOFfilms;

function start() {
   numberOFfilms= +prompt ("Сколько фильмов вы уже посмотрели?",'');

   while (numberOFfilms == '' || numberOFfilms == null || isNaN(numberOFfilms)) {
      numberOFfilms= +prompt("Сколько фильмов вы уже посмотрели?", '');
   }
}
start();



 const personalMovieDB = {
    cont: numberOFfilms,
    movies:{},
    actors: {},
    genres:[],
    privat: false

 };



function rememberMyFilms() {
   for (let i = 0; i < 2; i++){
      const a = prompt ('Один из последних просмотренных фильмов', ''),
            b = prompt ('На сколько оценете его?', '');
   
      if (a !=null && b !== null && a != '' && a.length <50) {
         personalMovieDB.movies[a] = b;
         console.log('don');

      }else {
         console.log('Error');
         i--;
      }      
   }
}

rememberMyFilms();


function detectPersonslLevel() {
   if (personalMovieDB.cont < 10){
    console.log('Просмотренно довольно мало фильмов');
   }else if (personalMovieDB.cont >= 10 && personalMovieDB.cont < 30) {
    console.log("Вы классический зритель");
   }else if (personalMovieDB.cont >=30){
    console.log("Вы киноман");
   }else{
    console.log("Произошла ошибка");
   }

}
detectPersonslLevel();

function showMyDB(hidden) {
   if (!hidden){
      console.log(personalMovieDB);

   }
}
showMyDB(personalMovieDB.privat);


function wreteYourGeneres() {
   for (let i = 1; i <= 3; i++){
      personalMovieDB.genres[i - 1] = prompt(`Ваш лбвимый жанр пол номером ${i}`); 
   }
}
wreteYourGeneres();