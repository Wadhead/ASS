"use strict";


 const personalMovieDB = {
    count: 0,
    movies:{},
    actors: {},
    genres:[],
    privat: false,
    start: function() {
      personalMovieDB.count= +prompt ("Сколько фильмов вы уже посмотрели?",'');
   
      while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN (personalMovieDB.count)) {
         personalMovieDB.count= +prompt("Сколько фильмов вы уже посмотрели?", '');
      }
   },
   rememberMyFilms: function() {
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
   },
   detectPersonslLevel: function() {
      if (personalMovieDB.cont < 10){
       console.log('Просмотренно довольно мало фильмов');
      }else if (personalMovieDB.cont >= 10 && personalMovieDB.cont < 30) {
       console.log("Вы классический зритель");
      }else if (personalMovieDB.cont >=30){
       console.log("Вы киноман");
      }else{
       console.log("Произошла ошибка");
      }
   
   },
   showMyDB(hidden) {
      if (!hidden){
         console.log(personalMovieDB);
   
      }
   },
   toggleVisiblMyDB: function() {
      if (personalMovieDB.privat){
         personalMovieDB.privat = false;

      }else{
         personalMovieDB.privat = true;
      }

   },
   wreteYourGeneres: function() {
      for (let i = 1; i <= 2; i++){
      //    let gener = prompt(`Ваш лбвимый жанр пол номером ${i}`); 
      //    if (gener == ''|| gener == null) {
      //       console.log("Вы ввили некорректные данные или не ввели их вовсе");
      //       i--;
      //    }else{
      //       personalMovieDB.genres[i - 1] = gener;
      //    }
      let geners = prompt(`Ввидите ваши лббимые жанры через запятую`).toLocaleLowerCase(); 
   
         if (geners == ''|| geners == null) {
            console.log("Вы ввили некорректные данные или не ввели их вовсе");
            i--;
         }else{
            personalMovieDB.genres = geners.split(', ');
            personalMovieDB.genres.sort();
         }






      }
      personalMovieDB.genres.forEach((item, i) => {
         console.log(`Любимый жанр ${i + 1} - это ${item}`);

      });
   }
 };


