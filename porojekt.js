"use strict";
const numberOFfilms= +prompt ("Сколько фильмов вы уже посмотрели",'' );

 const personalMovieDB = {
    cont: numberOFfilms,
    movies:{},
    actors: {},
    genres:[],
    privat: false

 };

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


if (personalMovieDB.cont < 10){
   console.log('Просмотренно довольно мало фильмов');
}else if (personalMovieDB.cont >= 10 && personalMovieDB.cont < 30) {
   console.log("Вы классический зритель");
}else if (personalMovieDB.cont >=30){
   console.log("Вы киноман");
}else{
   console.log("Произошла ошибка");
}



console.log(personalMovieDB);