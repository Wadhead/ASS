"use strict";
const numberOFfilms= +prompt ("Сколько фильмов вы уже посмотрели",'' );

 const personalMovieDB = {
    cont: numberOFfilms,
    movies:{},
    actors: {},
    genres:[],
    privat: false

 };
const 
    a = prompt ('Один из последних просмотренных фильмов', ''),
    b = prompt ('На сколько оценете его?', ''),
    c = prompt ('Один из последних просмотренных фильмов', ''),
    d = prompt ('На сколько оценете его?', '');

 personalMovieDB.movies[a] = b;
 personalMovieDB.movies[c] = d;

 console.log(personalMovieDB);