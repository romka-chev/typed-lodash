/// <reference path='lodash-2.4.1.d.ts' />

//region Variables
interface Entity extends NamedEntity, BlockedEntity, AgedEntity, Greeter{
    name        :string;
    blocked     :boolean;
    age         :number;
    greet      ?:{():void};
    [key:string]:any;
}
interface NamedEntity {
    name        :string;
    [key:string]:string;
}
interface BlockedEntity {
    blocked     :boolean;
    [key:string]:boolean;
}
interface AgedEntity {
    age         :number;
    [key:string]:number;
}
interface Greeter{
    greet      ?:{():void};
}

var entities:Array<Entity> = [
    {name:"Barney", age:36, blocked:true,  greet:function(){console.log("Hi, my name is %s", this.name)}},
    {name:"Fred",   age:40, blocked:true,  greet:function(){console.log("Hi, my name is %s", this.name)}},
    {name:"Cage",   age:22, blocked:false, greet:function(){console.log("Hi, my name is %s", this.name)}},
    {name:"Rita",   age:19, blocked:false, greet:function(){console.log("Hi, my name is %s", this.name)}}
];
var entity:Entity = {
    name   :"Rita",
    age    :19,
    blocked:false,
    greet  :function(greet?:string){
        console.log("%s, my name is %s", (greet || "Hi"), this.name)
    }
};
var templateOptions = {
    escape     :/regexp/,
    evaluate   :/regexp/,
    imports    :{},
    interpolate:/regexp/,
    sourceURL  :"https://www.google.com",
    variable   :"variable"
};
//endregion

//region Dynamic

//region NativeArrays

//region concat
<any   []>_<number>( [1, 2] ).concat<number[]>( [3], [4] ).value();
<number[]>_<number>( [1, 2] ).concat          (  3,   4  ).value();
//endregion

//region join
<string>_<number>( [1, 2] ).join(     );
<string>_<number>( [1, 2] ).join( "," );
//endregion

//region pop
<number>_<number>( [1, 2] ).pop();
<number>_<number>( [1, 2] ).pop();
//endregion

//region push
<any>_<number>( [1, 2] ).push        (      ).value();
<any>_<number>( [1, 2] ).push<number>( 3, 4 ).value();
//endregion

//region reverse
<number[]>_<number>( [1, 2] ).reverse().value();
//endregion

//region shift
<number>_<number>( [1, 2] ).shift();
//endregion

//region slice
<number[]>_<number>( [1, 2] ).slice( 0    ).value();
<number[]>_<number>( [1, 2] ).slice( 0, 1 ).value();
//endregion

//region sort
<number[]>_<number>( [1, 2] ).sort(                                                     ).value();
<number[]>_<number>( [1, 2] ).sort( ( a:number, b:number ) => {return (a > b) ? a : b;} ).value();
//endregion

//region splice
<number[]>_<number>( [1, 2] ).splice( 1 ).value();
//endregion

//region sort
<number[]>_<number>( [2, 1] ).unshift<number>( 4, 3 ).value();
//endregion

//endregion

//region Arrays

//region compact
<string[]>_        ( "Rita"    ).compact().value();

<any   []>_        ( [0, 1, 0] ).compact().value();
<number[]>_<number>( [1, 2, 0] ).compact().value();
//endregion

//region difference
<string[]>_        ( "qweRita" ).difference( ["q", "w", "e"] ).value();

<any   []>_        ( [1, 2, 3] ).difference( [1]             ).value();
<number[]>_<number>( [1, 2, 3] ).difference( [1]             ).value();
//endregion

//region findIndex
<number>_        ( "Rita"   ).findIndex(                                                                                     );
<number>_        ( "Rita"   ).findIndex( ( char:string,   index:number, vector:string     ) => char == "R"                   );
<number>_        ( "Rita"   ).findIndex( ( char:string,   index:number, vector:string     ) => char == "R",           window );
<number>_        ( "Rita"   ).findIndex( "length"                                                                            );
<number>_        ( "Rita"   ).findIndex( {length:1}                                                                          );

<number>_<Entity>( entities ).findIndex(                                                                                     );
<number>_<Entity>( entities ).findIndex( ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita"         );
<number>_<Entity>( entities ).findIndex( ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita", window );
<number>_<Entity>( entities ).findIndex( "name"                                                                              );
<number>_<Entity>( entities ).findIndex( {name:"Rita"}                                                                       );
//endregion

//region findLastIndex
<number>_        ( "Rita"   ).findLastIndex(                                                                                       );
<number>_        ( "Rita"   ).findLastIndex( ( char:string,    index:number, vector:string      ) => char == "R"                   );
<number>_        ( "Rita"   ).findLastIndex( ( char:string,    index:number, vector:string      ) => char == "R",           window );
<number>_        ( "Rita"   ).findLastIndex( "length"                                                                              );
<number>_        ( "Rita"   ).findLastIndex( {length:1}                                                                            );

<number>_<Entity>( entities ).findLastIndex(                                                                                       );
<number>_<Entity>( entities ).findLastIndex( ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita"           );
<number>_<Entity>( entities ).findLastIndex( ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita", window   );
<number>_<Entity>( entities ).findLastIndex( "name"                                                                                );
<number>_<Entity>( entities ).findLastIndex( {name:"Rita"}                                                                         );
//endregion

//region first
<string  >_        ( "Rita"   ).first(                                                                                            );
<string[]>_        ( "Rita"   ).first( (char:string,     index:number, vector:string      ) => char.toUpperCase() == char         ).value();
<string[]>_        ( "Rita"   ).first( (char:string,     index:number, vector:string      ) => char.toUpperCase() == char, window ).value();
<string[]>_        ( "Rita"   ).first( 2                                                                                          ).value();
<string[]>_        ( "Rita"   ).first( "length"                                                                                   ).value();
<string[]>_        ( "Rita"   ).first( {length:1}                                                                                 ).value();

<Entity  >_<Entity>( entities ).first(                                                                                            );
<Entity[]>_<Entity>( entities ).first( ( entity:Entity, index:number, entities:Entity[] ) => entity.age > 20                      ).value();
<Entity[]>_<Entity>( entities ).first( ( entity:Entity, index:number, entities:Entity[] ) => entity.age > 20,              window ).value();
<Entity[]>_<Entity>( entities ).first( 2                                                                                          ).value();
<Entity[]>_<Entity>( entities ).first( "blocked"                                                                                  ).value();
<Entity[]>_<Entity>( entities ).first( {blocked:true}                                                                             ).value();
//endregion

//region flatten
<string []>_        ( "Rita"   ).flatten        (                                                                                          ).value();

<string []>_        ( "Rita"   ).flatten        ( true                                                                                     ).value();
<any    []>_        ( "Rita"   ).flatten        ( true, ( char:string,    index:number, vector:string      ) => char.charCodeAt(0)         ).value();
<any    []>_        ( "Rita"   ).flatten        ( true, ( char:string,    index:number, vector:string      ) => char.charCodeAt(0), window ).value();
<number []>_        ( "Rita"   ).flatten<number>( true, ( char:string,    index:number, vector:string      ) => char.charCodeAt(0)         ).value();
<number []>_        ( "Rita"   ).flatten<number>( true, ( char:string,    index:number, vector:string      ) => char.charCodeAt(0), window ).value();
<any    []>_        ( "Rita"   ).flatten        ( true, "length"                                                                           ).value();
<boolean[]>_        ( "Rita"   ).flatten        ( true, {length:"1"}                                                                       ).value();

<any    []>_        ( "Rita"   ).flatten        (       ( char:string,    index:number, vector:string      ) => char.charCodeAt(0)         ).value();
<any    []>_        ( "Rita"   ).flatten        (       ( char:string,    index:number, vector:string      ) => char.charCodeAt(0), window ).value();
<number []>_        ( "Rita"   ).flatten<number>(       ( char:string,    index:number, vector:string      ) => char.charCodeAt(0)         ).value();
<number []>_        ( "Rita"   ).flatten<number>(       ( char:string,    index:number, vector:string      ) => char.charCodeAt(0), window ).value();
<string []>_        ( "Rita"   ).flatten        (       "length"                                                                           ).value();
<boolean[]>_        ( "Rita"   ).flatten        (       {length:"1"}                                                                       ).value();


<any    []>_<Entity>( entities ).flatten        (                                                                                          ).value();

<any    []>_<Entity>( entities ).flatten        ( true                                                                                     ).value();
<any    []>_<Entity>( entities ).flatten        ( true, ( entity:Entity, index:number, entities:Entity[] ) => entity.age                   ).value();
<any    []>_<Entity>( entities ).flatten        ( true, ( entity:Entity, index:number, entities:Entity[] ) => entity.age,           window ).value();
<number []>_<Entity>( entities ).flatten<number>( true, ( entity:Entity, index:number, entities:Entity[] ) => entity.age                   ).value();
<number []>_<Entity>( entities ).flatten<number>( true, ( entity:Entity, index:number, entities:Entity[] ) => entity.age,           window ).value();
<any    []>_<Entity>( entities ).flatten        ( true, "name"                                                                             ).value();
<boolean[]>_<Entity>( entities ).flatten        ( true, {name:"Rita"}                                                                      ).value();

<any    []>_<Entity>( entities ).flatten        (       ( entity:Entity, index:number, entities:Entity[] ) => entity.age                   ).value();
<any    []>_<Entity>( entities ).flatten        (       ( entity:Entity, index:number, entities:Entity[] ) => entity.age,           window ).value();
<number []>_<Entity>( entities ).flatten<number>(       ( entity:Entity, index:number, entities:Entity[] ) => entity.age                   ).value();
<number []>_<Entity>( entities ).flatten<number>(       ( entity:Entity, index:number, entities:Entity[] ) => entity.age,           window ).value();
<any    []>_<Entity>( entities ).flatten        (       "name"                                                                             ).value();
<boolean[]>_<Entity>( entities ).flatten        (       {name:"Rita"}                                                                      ).value();
//endregion

//region indexOf
<number>_        ( "RitaRita"   ).indexOf( "R"       );
<number>_        ( "RitaRita"   ).indexOf( "R", 2    );
<number>_        ( "RitaRita"   ).indexOf( "R", true );

<number>_<number>( [1, 2, 1, 2] ).indexOf( 2         );
<number>_<number>( [1, 2, 1, 2] ).indexOf( 2,   3    );
<number>_<number>( [1, 2, 1, 2] ).indexOf( 2,   true );
//endregion

//region initial
<string []>_       ( "Rita"   ).initial(                                                                                     ).value();
<string []>_       ( "Rita"   ).initial( ( char:string,    index:number, vector:string      ) => char == "R"                 ).value();
<string []>_       ( "Rita"   ).initial( ( char:string,    index:number, vector:string      ) => char == "R",         window ).value();
<string []>_       ( "Rita"   ).initial( 2                                                                                   ).value();
<string []>_       ( "Rita"   ).initial( "length"                                                                            ).value();
<string []>_       ( "Rita"   ).initial( {length:1}                                                                          ).value();

<Entity[]>_<Entity>( entities ).initial(                                                                                     ).value();
<Entity[]>_<Entity>( entities ).initial( ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita"         ).value();
<Entity[]>_<Entity>( entities ).initial( ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita", window ).value();
<Entity[]>_<Entity>( entities ).initial( 2                                                                                   ).value();
<Entity[]>_<Entity>( entities ).initial( "blocked"                                                                           ).value();
<Entity[]>_<Entity>( entities ).initial( {blocked:false}                                                                     ).value();
//endregion

//region intersection
<number[]>_<number>( [1, 2, 3] ).intersection(        ).value();
<number[]>_<number>( [1, 2, 3] ).intersection( [1, 2] ).value();
//endregion

//region last
<string   >_       ( "Rita"   ).last(                                                                                     );
<string []>_       ( "Rita"   ).last( ( char:string,    index:number, vector:string      ) => char == "R"                 ).value();
<string []>_       ( "Rita"   ).last( ( char:string,    index:number, vector:string      ) => char == "R",         window ).value();
<string []>_       ( "Rita"   ).last( 2                                                                                   ).value();
<string []>_       ( "Rita"   ).last( "length"                                                                            ).value();
<string []>_       ( "Rita"   ).last( {length:1}                                                                          ).value();

<Entity  >_<Entity>( entities ).last(                                                                                     );
<Entity[]>_<Entity>( entities ).last( ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita"         ).value();
<Entity[]>_<Entity>( entities ).last( ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita", window ).value();
<Entity[]>_<Entity>( entities ).last( 2                                                                                   ).value();
<Entity[]>_<Entity>( entities ).last( "blocked"                                                                           ).value();
<Entity[]>_<Entity>( entities ).last( {blocked:false}                                                                     ).value();
//endregion

//region lastIndexOf
<number>_        ( "RitaRita"   ).lastIndexOf( "R"    );
<number>_        ( "RitaRita"   ).lastIndexOf( "R", 2 );

<number>_<number>( [1, 2, 1, 2] ).lastIndexOf( 2      );
<number>_<number>( [1, 2, 1, 2] ).lastIndexOf( 2,   3 );
//endregion

//region pull
<number[]>_<number>( [1, 2, 3] ).pull(                ).value();
<number[]>_<number>( [1, 2, 3] ).pull( [4, 5]         ).value();
<number[]>_<number>( [1, 2, 3] ).pull( entity, "Rita" ).value();
//endregion

//region range
<number[]>_( 5 ).range(      ).value();
<number[]>_( 1 ).range( 5    ).value();
<number[]>_( 1 ).range( 5, 2 ).value();
//endregion

//region remove
<Entity[]>_<Entity>( entities ).remove(                                                                                        ).value();
<Entity[]>_<Entity>( entities ).remove( ( entity:Entity, index:number, entities:Entity[] ) => entity.blocked == true         ).value();
<Entity[]>_<Entity>( entities ).remove( ( entity:Entity, index:number, entities:Entity[] ) => entity.blocked == true, window ).value();
<Entity[]>_<Entity>( entities ).remove( "blocked"                                                                              ).value();
<Entity[]>_<Entity>( entities ).remove( {blocked:true}                                                                         ).value();
//endregion

//region rest
<string []>_       ( "Rita"   ).rest(                                                                                       ).value();
<string []>_       ( "Rita"   ).rest( ( char:string,    index:number, vector:string      ) => char == "R"                   ).value();
<string []>_       ( "Rita"   ).rest( ( char:string,    index:number, vector:string      ) => char == "R",           window ).value();
<string []>_       ( "Rita"   ).rest( 2                                                                                     ).value();
<string []>_       ( "Rita"   ).rest( "length"                                                                              ).value();
<string []>_       ( "Rita"   ).rest( {length:1}                                                                            ).value();

<Entity[]>_<Entity>( entities ).rest(                                                                                       ).value();
<Entity[]>_<Entity>( entities ).rest( ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita"           ).value();
<Entity[]>_<Entity>( entities ).rest( ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita",   window ).value();
<Entity[]>_<Entity>( entities ).rest( 2                                                                                     ).value();
<Entity[]>_<Entity>( entities ).rest( "blocked"                                                                             ).value();
<Entity[]>_<Entity>( entities ).rest( {blocked:false}                                                                       ).value();
//endregion

//region sortedIndex
<number>_             ( "Rita"   ).sortedIndex( "R"                                                                                    );
<number>_             ( "Rita"   ).sortedIndex( "R",           ( value:string       ):number => value.charCodeAt(0)                    );
<number>_             ( "Rita"   ).sortedIndex( "R",           ( value:string       ):number => value.charCodeAt(0),            window );
<number>_             ( "Rita"   ).sortedIndex( 211,           ( value:any          ):number => value.toString().charCodeAt(0)         );
<number>_             ( "Rita"   ).sortedIndex( 211,           ( value:any          ):number => value.toString().charCodeAt(0), window );
<number>_             ( "Rita"   ).sortedIndex( "R",           "length"                                                                );
<number>_             ( "Rita"   ).sortedIndex( "R",           {length:1}                                                              );

<number>_<number     >( [20, 30] ).sortedIndex( 40                                                                                     );
<number>_<Entity     >( entities ).sortedIndex( entity,        ( value:Entity      ):number => value.name.indexOf("Rita")              );
<number>_<Entity     >( entities ).sortedIndex( entity,        ( value:Entity      ):number => value.name.indexOf("Rita"),      window );
<number>_<NamedEntity>( entities ).sortedIndex( {name:'Rita'}, ( value:NamedEntity ):number => value.name.indexOf("Rita")              );
<number>_<NamedEntity>( entities ).sortedIndex( {name:'Rita'}, ( value:NamedEntity ):number => value.name.indexOf("Rita"),      window );
<number>_<Entity     >( entities ).sortedIndex( entity,        "age"                                                                   );
<number>_<Entity     >( entities ).sortedIndex( entity,        {age:19}                                                                );
//endregion

//region union
<any   []>_        (           ).union        (                      ).value();
<number[]>_<number>( [1, 2, 3] ).union        (                      ).value();
<number[]>_<number>( [1, 2, 3] ).union<number>( [5, 2, 1, 4]         ).value();
<number[]>_<number>( [1, 2, 3] ).union<number>( [5, 2, 1, 4], [2, 1] ).value();
//endregion

//region uniq
<string []>_       ( "Rita"   ).uniq(                                                                                       ).value();
<string []>_       ( "Rita"   ).uniq( ( char:string,    index:number, vector:string      ) => char == "R"                   ).value();
<string []>_       ( "Rita"   ).uniq( ( char:string,    index:number, vector:string      ) => char == "R",           window ).value();
<string []>_       ( "Rita"   ).uniq( true                                                                                  ).value();
<string []>_       ( "Rita"   ).uniq( "length"                                                                              ).value();
<string []>_       ( "Rita"   ).uniq( {length:1}                                                                            ).value();

<Entity[]>_<Entity>( entities ).uniq(                                                                                       ).value();
<Entity[]>_<Entity>( entities ).uniq( ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita"           ).value();
<Entity[]>_<Entity>( entities ).uniq( ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita",   window ).value();
<Entity[]>_<Entity>( entities ).uniq( true                                                                                  ).value();
<Entity[]>_<Entity>( entities ).uniq( "blocked"                                                                             ).value();
<Entity[]>_<Entity>( entities ).uniq( {blocked:false}                                                                       ).value();
//endregion

//region without
<string[]>_        ( "qweRita"    ).without(                    ).value();
<string[]>_        ( "qweRita"    ).without( "q", "w", "e", 211 ).value();

<number[]>_<number>( [1, 2, 1, 0] ).without(                    ).value();
<number[]>_<number>( [1, 2, 1, 0] ).without( 0,   1             ).value();
//endregion

//region xor
<any[]>_        (           ).xor(                    ).value();
<any[]>_<number>( [1, 2, 3] ).xor( [5, 2]             ).value();
<any[]>_<number>( [1, 2, 3] ).xor( [5, 2], ["q", "w"] ).value();
//endregion

//region zip
<any[][]>_        (            ).zip(                 ).value();
<any[][]>_        ( ""         ).zip(                 ).value();
<any[][]>_        ( "RC"       ).zip( [1, 2]          ).value();
<any[][]>_        ( "R"        ).zip( "i",   "t", "a" ).value();

<any[][]>_        ( []         ).zip(                 ).value();
<any[][]>_<number>( [1, 2]     ).zip( [1, 2]          ).value();
<any[][]>_<string>( ["f", "b"] ).zip( [1, 2]          ).value();
//endregion

//region zipObject
<_.Dictionary<any   >>_        (  "name"                    ).zipObject        (                      ).value();
<_.Dictionary<string>>_        (  "name"                    ).zipObject        (  "Rita"              ).value();
<_.Dictionary<string>>_        (  "name"                    ).zipObject<string>( ["Rita", "19"]       ).value();

<_.Dictionary<any   >>_<string>( ["name", "age", "blocked"] ).zipObject        (                      ).value();
<_.Dictionary<string>>_<string>( ["name", "age", "blocked"] ).zipObject        (  "Rita"              ).value();
<_.Dictionary<number>>_<string>( ["name", "age", "blocked"] ).zipObject<number>( [111,    222, 333]   ).value();
<_.Dictionary<any   >>_<string>( ["name", "age", "blocked"] ).zipObject<any   >( ["Rita", 19,  false] ).value();
//endregion

//endregion

//region Chaining

//region chain              --checked-not --adequate-not
<any                       >_                            (                          ).chain().value();
<number                    >_                            ( 19                       ).chain().value();
<string                    >_                            ( "Rita"                   ).chain().value();
<Entity[]                  >_<Entity                    >( entities                 ).chain().value();
<Entity                    >_<Entity                    >( entity                   ).chain().value();
<_.IdentityFunction<Entity>>_<_.IdentityFunction<Entity>>( (value:Entity) => value  ).chain().value();
<any                       >_                            ( window                   ).chain().value();
//endregion

//region tap
<Entity>_<Entity>( entity ).tap( ( value:Entity ) => console.log(value.name) ).value();
//endregion

//endregion

//region Collections

//region at
<string[]>_        ( "Rita"        ).at(  0, 1,     2, 3   ).value();
<string[]>_        ( "Rita"        ).at( [0, 1],   [2, 3]  ).value();

<number[]>_<number>( [9, 8, 7, 6]  ).at(  0, 1,     2, 3   ).value();
<number[]>_<number>( [9, 8, 7, 6]  ).at( [0, 1],   [2, 3]  ).value();

<any   []>_<any   >( entity        ).at(  "name",   "age"  ).value();
<any   []>_<any   >( entity        ).at( ["name"], ["age"] ).value();
<string[]>_<string>( {name:"Rita"} ).at(  "name"           ).value();
<string[]>_<string>( {name:"Rita"} ).at( ["name"]          ).value();
//endregion

//region contains
<boolean>_        ( "Rita"       ).contains( "R"       );
<boolean>_        ( "Rita"       ).contains( "R"    ,2 );

<boolean>_<number>( [1, 2, 3, 4] ).contains( 3         );
<boolean>_<number>( [1, 2, 3, 4] ).contains( 3      ,3 );

<boolean>_<any   >( entity       ).contains( "Rita"    );
<boolean>_<any   >( entity       ).contains( "Rita" ,5 );
//endregion

//region countBy
<_.Dictionary<number>>_        ( "Rita"   ).countBy(                                                                                             ).value();
<_.Dictionary<number>>_        ( "Rita"   ).countBy( ( char:string,   index:number, vector:string     ) => char == "R"                           ).value();
<_.Dictionary<number>>_        ( "Rita"   ).countBy( ( char:string,   index:number, vector:string     ) => char == "R",                   window ).value();
<_.Dictionary<number>>_        ( "Rita"   ).countBy( "length"                                                                                    ).value();
<_.Dictionary<number>>_        ( "Rita"   ).countBy( {length:1}                                                                                  ).value();

<_.Dictionary<number>>_<Entity>( entities ).countBy(                                                                                             ).value();
<_.Dictionary<number>>_<Entity>( entities ).countBy( ( entity:Entity, index:number, entities:Entity[] ) => entity.age > 18                       ).value();
<_.Dictionary<number>>_<Entity>( entities ).countBy( ( entity:Entity, index:number, entities:Entity[] ) => entity.age > 18,               window ).value();
<_.Dictionary<number>>_<Entity>( entities ).countBy( "age"                                                                                       ).value();
<_.Dictionary<number>>_<Entity>( entities ).countBy( {age   :19}                                                                                 ).value();

<_.Dictionary<number>>_<any   >( entity   ).countBy(                                                                                             ).value();
<_.Dictionary<number>>_<any   >( entity   ).countBy( ( property:any,  key:string,   entity:Entity     ) => typeof property == "string"           ).value();
<_.Dictionary<number>>_<any   >( entity   ).countBy( ( property:any,  key:string,   entity:Entity     ) => typeof property == "string",   window ).value();
<_.Dictionary<number>>_<any   >( entity   ).countBy( "length"                                                                                    ).value();
<_.Dictionary<number>>_<any   >( entity   ).countBy( {length:4}                                                                                  ).value();
//endregion

//region every
<boolean>_        ( "Rita"   ).every(                                                                                             );
<boolean>_        ( "Rita"   ).every( ( char:string,    index:number, vector:string     ) => char == "R"                          );
<boolean>_        ( "Rita"   ).every( ( char:string,    index:number, vector:string     ) => char == "R",                  window );
<boolean>_        ( "Rita"   ).every( "length"                                                                                    );
<boolean>_        ( "Rita"   ).every( {length:1}                                                                                  );

<boolean>_<Entity>( entities ).every(                                                                                             );
<boolean>_<Entity>( entities ).every( ( entity:Entity,  index:number, entities:Entity[] ) => entity.age > 18                      );
<boolean>_<Entity>( entities ).every( ( entity:Entity,  index:number, entities:Entity[] ) => entity.age > 18,              window );
<boolean>_<Entity>( entities ).every( "age"                                                                                       );
<boolean>_<Entity>( entities ).every( {age   :19}                                                                                 );

<boolean>_<any   >( entity   ).every(                                                                                             );
<boolean>_<any   >( entity   ).every( ( property:any,   key:string,   entity:Entity     ) => typeof property == "string"          );
<boolean>_<any   >( entity   ).every( ( property:any,   key:string,   entity:Entity     ) => typeof property == "string",  window );
<boolean>_<any   >( entity   ).every( "length"                                                                                    );
<boolean>_<any   >( entity   ).every( {length:4}                                                                                  );
//endregion

//region filter
<string []>_       ( "Rita"   ).filter(                                                                                 ).value();
<string []>_       ( "Rita"   ).filter( ( char:string,    index:number, vector:string     ) => char == "R"              ).value();
<string []>_       ( "Rita"   ).filter( ( char:string,    index:number, vector:string     ) => char == "R",      window ).value();
<string []>_       ( "Rita"   ).filter( "length"                                                                        ).value();
<string []>_       ( "Rita"   ).filter( {length:1}                                                                      ).value();

<Entity[]>_<Entity>( entities ).filter(                                                                                 ).value();
<Entity[]>_<Entity>( entities ).filter( ( entity:Entity,  index:number, entities:Entity[] ) => entity.age > 18          ).value();
<Entity[]>_<Entity>( entities ).filter( ( entity:Entity,  index:number, entities:Entity[] ) => entity.age > 18,  window ).value();
<Entity[]>_<Entity>( entities ).filter( "age"                                                                           ).value();
<Entity[]>_<Entity>( entities ).filter( {age   :19}                                                                     ).value();

<any    []>_<any  >( entity   ).filter(                                                                                 ).value();
<any    []>_<any  >( entity   ).filter( ( property:any,   key:string,   entity:Entity     ) => key == "name"            ).value();
<any    []>_<any  >( entity   ).filter( ( property:any,   key:string,   entity:Entity     ) => key == "name",    window ).value();
<any    []>_<any  >( entity   ).filter( "length"                                                                        ).value();
<any    []>_<any  >( entity   ).filter( {length:4}                                                                      ).value();
//endregion

//region find
<string >_       ( "Rita"   ).find(                                                                                 );
<string >_       ( "Rita"   ).find( ( char:string,    index:number, vector:string     ) => char == "R"              );
<string >_       ( "Rita"   ).find( ( char:string,    index:number, vector:string     ) => char == "R",      window );
<string >_       ( "Rita"   ).find( "length"                                                                        );
<string >_       ( "Rita"   ).find( {length:1}                                                                      );

<Entity>_<Entity>( entities ).find(                                                                                 );
<Entity>_<Entity>( entities ).find( ( entity:Entity,  index:number, entities:Entity[] ) => entity.age > 18          );
<Entity>_<Entity>( entities ).find( ( entity:Entity,  index:number, entities:Entity[] ) => entity.age > 18,  window );
<Entity>_<Entity>( entities ).find( "age"                                                                           );
<Entity>_<Entity>( entities ).find( {age   :19}                                                                     );

<any    >_<any  >( entity   ).find(                                                                                 );
<any    >_<any  >( entity   ).find( ( property:any,   key:string,   entity:Entity     ) => key == "name"            );
<any    >_<any  >( entity   ).find( ( property:any,   key:string,   entity:Entity     ) => key == "name",    window );
<any    >_<any  >( entity   ).find( "length"                                                                        );
<any    >_<any  >( entity   ).find( {length:4}                                                                      );
//endregion

//region findLast
<string >_         ( "Rita"   ).findLast(                                                                                 );
<string >_         ( "Rita"   ).findLast( ( char:string,    index:number, vector:string      ) => char == "R"             );
<string >_         ( "Rita"   ).findLast( ( char:string,    index:number, vector:string      ) => char == "R",     window );
<string >_         ( "Rita"   ).findLast( "length"                                                                        );
<string >_         ( "Rita"   ).findLast( {length:1}                                                                      );

<Entity>_<Entity>( entities ).findLast(                                                                                 );
<Entity>_<Entity>( entities ).findLast( ( entity:Entity, index:number, entities:Entity[] ) => entity.age > 18         );
<Entity>_<Entity>( entities ).findLast( ( entity:Entity, index:number, entities:Entity[] ) => entity.age > 18, window );
<Entity>_<Entity>( entities ).findLast( "age"                                                                           );
<Entity>_<Entity>( entities ).findLast( {age   :19}                                                                     );

<any    >_<any    >( entity   ).findLast(                                                                                 );
<any    >_<any    >( entity   ).findLast( ( property:any,   key:string,   entity:Entity     ) => key == "name"           );
<any    >_<any    >( entity   ).findLast( ( property:any,   key:string,   entity:Entity     ) => key == "name",   window );
<any    >_<any    >( entity   ).findLast( "length"                                                                        );
<any    >_<any    >( entity   ).findLast( {length:4}                                                                      );
//endregion

//region forEach
<string   >_         ( "Rita"   ).forEach(                                                                                            ).value();
<string   >_         ( "Rita"   ).forEach( ( char:string,    index:number, vector:string      ) => console.log(char)                  ).value();
<string   >_         ( "Rita"   ).forEach( ( char:string,    index:number, vector:string      ) => console.log(char),          window ).value();

<Entity[]>_<Entity>( entities ).forEach(                                                                                            ).value();
<Entity[]>_<Entity>( entities ).forEach( ( entity:Entity, index:number, entities:Entity[] ) => console.log(entity.name)           ).value();
<Entity[]>_<Entity>( entities ).forEach( ( entity:Entity, index:number, entities:Entity[] ) => console.log(entity.name),   window ).value();

<Entity  >_<any    >( entity   ).forEach(                                                                                            ).value();
<Entity  >_<any    >( entity   ).forEach( ( property:any,   key:string,   entity:Entity     ) => console.log(key, property)         ).value();
<Entity  >_<any    >( entity   ).forEach( ( property:any,   key:string,   entity:Entity     ) => console.log(key, property), window ).value();
//endregion

//region forEachRight
<string   >_         ( "Rita"   ).forEachRight(                                                                                            ).value();
<string   >_         ( "Rita"   ).forEachRight( ( char:string,    index:number, vector:string      ) => console.log(char)                  ).value();
<string   >_         ( "Rita"   ).forEachRight( ( char:string,    index:number, vector:string      ) => console.log(char),          window ).value();

<Entity[]>_<Entity>( entities ).forEachRight(                                                                                            ).value();
<Entity[]>_<Entity>( entities ).forEachRight( ( entity:Entity, index:number, entities:Entity[] ) => console.log(entity.name)           ).value();
<Entity[]>_<Entity>( entities ).forEachRight( ( entity:Entity, index:number, entities:Entity[] ) => console.log(entity.name),   window ).value();

<Entity  >_<any    >( entity   ).forEachRight(                                                                                            ).value();
<Entity  >_<any    >( entity   ).forEachRight( ( property:any,   key:string,   entity:Entity     ) => console.log(key, property)         ).value();
<Entity  >_<any    >( entity   ).forEachRight( ( property:any,   key:string,   entity:Entity     ) => console.log(key, property), window ).value();
//endregion

//region groupBy
<_.Dictionary<string []>>_         ( "Rita"   ).groupBy(                                                                                 ).value();
<_.Dictionary<string []>>_         ( "Rita"   ).groupBy( ( char:string,    index:number, vector:string      ) => char == "R"             ).value();
<_.Dictionary<string []>>_         ( "Rita"   ).groupBy( ( char:string,    index:number, vector:string      ) => char == "R",     window ).value();
<_.Dictionary<string []>>_         ( "Rita"   ).groupBy( "length"                                                                        ).value();
<_.Dictionary<string []>>_         ( "Rita"   ).groupBy( {length:1}                                                                      ).value();

<_.Dictionary<Entity[]>>_<Entity>( entities ).groupBy(                                                                                 ).value();
<_.Dictionary<Entity[]>>_<Entity>( entities ).groupBy( ( entity:Entity, index:number, entities:Entity[] ) => entity.age > 18         ).value();
<_.Dictionary<Entity[]>>_<Entity>( entities ).groupBy( ( entity:Entity, index:number, entities:Entity[] ) => entity.age > 18, window ).value();
<_.Dictionary<Entity[]>>_<Entity>( entities ).groupBy( "age"                                                                           ).value();
<_.Dictionary<Entity[]>>_<Entity>( entities ).groupBy( {age   :19}                                                                     ).value();

<_.Dictionary<any    []>>_<any    >( entity   ).groupBy(                                                                                 ).value();
<_.Dictionary<any    []>>_<any    >( entity   ).groupBy( ( property:any,   key:string,   entity:Entity     ) => key == "name"           ).value();
<_.Dictionary<any    []>>_<any    >( entity   ).groupBy( ( property:any,   key:string,   entity:Entity     ) => key == "name",   window ).value();
<_.Dictionary<any    []>>_<any    >( entity   ).groupBy( "length"                                                                        ).value();
<_.Dictionary<any    []>>_<any    >( entity   ).groupBy( {length:4}                                                                      ).value();
//endregion

//region indexBy
<_.Dictionary<string >>_         ( "Rita"    ).indexBy(                                                                                 ).value();
<_.Dictionary<string >>_         ( "Rita"    ).indexBy( ( char:string,    index:number, vector:string      ) => char == "R"             ).value();
<_.Dictionary<string >>_         ( "Rita"    ).indexBy( ( char:string,    index:number, vector:string      ) => char == "R",     window ).value();
<_.Dictionary<string >>_         ( "Rita"    ).indexBy( "length"                                                                        ).value();
<_.Dictionary<string >>_         ( "Rita"    ).indexBy( {length:1}                                                                      ).value();

<_.Dictionary<Entity>>_<Entity>( entities  ).indexBy(                                                                                 ).value();
<_.Dictionary<Entity>>_<Entity>( entities  ).indexBy( ( entity:Entity, index:number, entities:Entity[] ) => entity.age > 18         ).value();
<_.Dictionary<Entity>>_<Entity>( entities  ).indexBy( ( entity:Entity, index:number, entities:Entity[] ) => entity.age > 18, window ).value();
<_.Dictionary<Entity>>_<Entity>( entities  ).indexBy( "age"                                                                           ).value();
<_.Dictionary<Entity>>_<Entity>( entities  ).indexBy( {age   :19}                                                                     ).value();

<_.Dictionary<any    >>_<any    >( entity    ).indexBy(                                                                                 ).value();
<_.Dictionary<any    >>_<any    >( entity    ).indexBy( ( property:any,   key:string,   entity:Entity     ) => key == "name"           ).value();
<_.Dictionary<any    >>_<any    >( entity    ).indexBy( ( property:any,   key:string,   entity:Entity     ) => key == "name",   window ).value();
<_.Dictionary<any    >>_<any    >( entity    ).indexBy( "length"                                                                        ).value();
<_.Dictionary<any    >>_<any    >( entity    ).indexBy( {length:4}                                                                      ).value();
//endregion

//region invoke
<any   []>_        ( "Rita"   ).invoke        ( "charAt"                                                                               ).value();
<any   []>_        ( "Rita"   ).invoke        ( "charAt",                                                                            0 ).value();
<any   []>_        ( "Rita"   ).invoke        ( function(                  ){ var c:string = this; return c.charAt(   0         ) }    ).value();
<any   []>_        ( "Rita"   ).invoke        ( function( position:number  ){ var c:string = this; return c.charAt(   position  ) }, 0 ).value();
<string[]>_        ( "Rita"   ).invoke<string>( function(                  ){ var c:string = this; return c.charAt(   0         ) }    ).value();
<string[]>_        ( "Rita"   ).invoke<string>( function( position:number  ){ var c:string = this; return c.charAt(   position  ) }, 0 ).value();

<any   []>_<number>( [1, 2]   ).invoke        ( "toFixed"                                                                              ).value();
<any   []>_<number>( [1, 2]   ).invoke        ( "toFixed",                                                                           4 ).value();
<any   []>_<number>( [1, 2]   ).invoke        ( function(                  ){ var n:number = this; return n.toFixed(  4         ) }    ).value();
<any   []>_<number>( [1, 2]   ).invoke        ( function( precision:number ){ var n:number = this; return n.toFixed(  precision ) }, 4 ).value();
<string[]>_<number>( [1, 2]   ).invoke<string>( function(                  ){ var n:number = this; return n.toFixed(  4         ) }    ).value();
<string[]>_<number>( [1, 2]   ).invoke<string>( function( precision:number ){ var n:number = this; return n.toFixed(  precision ) }, 4 ).value();

<any   []>_<number>( {age:19} ).invoke        ( "toString"                                                                             ).value();
<any   []>_<number>( {age:19} ).invoke        ( "toString",                                                                          2 ).value();
<any   []>_<number>( {age:19} ).invoke        ( function(                  ){ var p:number = this; return p.toString( 2         ) }    ).value();
<any   []>_<number>( {age:19} ).invoke        ( function( radix:number     ){ var p:number = this; return p.toString( radix     ) }, 2 ).value();
<string[]>_<number>( {age:19} ).invoke<string>( function(                  ){ var p:number = this; return p.toString( 2         ) }    ).value();
<string[]>_<number>( {age:19} ).invoke<string>( function( radix:number     ){ var p:number = this; return p.toString( radix     ) }, 2 ).value();
//endregion

//region map
<string []>_         ( "Rita"   ).map         (                                                                                       ).value();
<any    []>_         ( "Rita"   ).map         ( ( char:string,    index:number, vector:string      ) => char == "R"                   ).value();
<any    []>_         ( "Rita"   ).map         ( ( char:string,    index:number, vector:string      ) => char == "R",           window ).value();
<boolean[]>_         ( "Rita"   ).map<boolean>( ( char:string,    index:number, vector:string      ) => char == "R"                   ).value();
<boolean[]>_         ( "Rita"   ).map<boolean>( ( char:string,    index:number, vector:string      ) => char == "R",           window ).value();
<any    []>_         ( "Rita"   ).map         ( "length"                                                                              ).value();
<boolean[]>_         ( "Rita"   ).map         ( {length:1}                                                                            ).value();

<Entity[]>_<Entity>( entities ).map         (                                                                                       ).value();
<any    []>_<Entity>( entities ).map         ( ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita"         ).value();
<any    []>_<Entity>( entities ).map         ( ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita", window ).value();
<boolean[]>_<Entity>( entities ).map<boolean>( ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita"         ).value();
<boolean[]>_<Entity>( entities ).map<boolean>( ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita", window ).value();
<any    []>_<Entity>( entities ).map         ( "name"                                                                                ).value();
<boolean[]>_<Entity>( entities ).map         ( {name  :"Rita"}                                                                       ).value();

<any    []>_<any    >( entity   ).map         (                                                                                       ).value();
<any    []>_<any    >( entity   ).map         ( ( property:any,   key:string,   entity:Entity     ) => key == "name"                 ).value();
<any    []>_<any    >( entity   ).map         ( ( property:any,   key:string,   entity:Entity     ) => key == "name",         window ).value();
<boolean[]>_<any    >( entity   ).map<boolean>( ( property:any,   key:string,   entity:Entity     ) => key == "name"                 ).value();
<boolean[]>_<any    >( entity   ).map<boolean>( ( property:any,   key:string,   entity:Entity     ) => key == "name",         window ).value();
<any    []>_<any    >( entity   ).map         ( "length"                                                                              ).value();
<boolean[]>_<any    >( entity   ).map         ( {length:4}                                                                            ).value();
//endregion

//region max
<string>_         ( "Rita"   ).max(                                                                                       ).value();
<string>_         ( "Rita"   ).max( ( char:string,    index:number, vector:string      ) => char == "R"                   ).value();
<string>_         ( "Rita"   ).max( ( char:string,    index:number, vector:string      ) => char == "R",           window ).value();
<string>_         ( "Rita"   ).max( "length"                                                                              ).value();
<string>_         ( "Rita"   ).max( {length:1}                                                                            ).value();

<any   >_<Entity>( entities ).max(                                                                                       ).value();
<any   >_<Entity>( entities ).max( ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita"         ).value();
<any   >_<Entity>( entities ).max( ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita", window ).value();
<any   >_<Entity>( entities ).max( "length"                                                                              ).value();
<any   >_<Entity>( entities ).max( {length:1}                                                                            ).value();

<any   >_<any    >( entity   ).max(                                                                                       ).value();
<any   >_<any    >( entity   ).max( ( property:any,   key:string,   entity:Entity     ) => key == "name"                 ).value();
<any   >_<any    >( entity   ).max( ( property:any,   key:string,   entity:Entity     ) => key == "name",         window ).value();
<any   >_<any    >( entity   ).max( "length"                                                                              ).value();
<any   >_<any    >( entity   ).max( {length:4}                                                                            ).value();
//endregion

//region min
<string>_         ( "Rita"   ).min(                                                                                       ).value();
<string>_         ( "Rita"   ).min( ( char:string,    index:number, vector:string      ) => char == "R"                   ).value();
<string>_         ( "Rita"   ).min( ( char:string,    index:number, vector:string      ) => char == "R",           window ).value();
<string>_         ( "Rita"   ).min( "length"                                                                              ).value();
<string>_         ( "Rita"   ).min( {length:1}                                                                            ).value();

<any   >_<Entity>( entities ).min(                                                                                       ).value();
<any   >_<Entity>( entities ).min( ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita"         ).value();
<any   >_<Entity>( entities ).min( ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita", window ).value();
<any   >_<Entity>( entities ).min( "length"                                                                              ).value();
<any   >_<Entity>( entities ).min( {length:1}                                                                            ).value();

<any   >_<any    >( entity   ).min(                                                                                       ).value();
<any   >_<any    >( entity   ).min( ( property:any,   key:string,   entity:Entity     ) => key == "name"                 ).value();
<any   >_<any    >( entity   ).min( ( property:any,   key:string,   entity:Entity     ) => key == "name",         window ).value();
<any   >_<any    >( entity   ).min( "length"                                                                              ).value();
<any   >_<any    >( entity   ).min( {length:4}                                                                            ).value();
//endregion

//region pluck
<any[]>_( "Rita"   ).pluck( "length" ).value();
<any[]>_( entities ).pluck( "name"   ).value();
<any[]>_( entity   ).pluck( "name"   ).value();
//endregion

//region reduce
<string>_         ( "Rita" ).reduce        (                                                                                                                         );
<any   >_         ( "Rita" ).reduce        ( ( accumulator:any,    value:string, index:number, vector:string ) => value + accumulator                                );
<string>_         ( "Rita" ).reduce<string>( ( accumulator:string, value:string, index:number, vector:string ) => value + accumulator                                );
<any   >_         ( "Rita" ).reduce        ( ( accumulator:any,    value:string, index:number, vector:string ) => value + accumulator,                    ""         );
<any   >_         ( "Rita" ).reduce        ( ( accumulator:any,    value:string, index:number, vector:string ) => value + accumulator,                    "", window );
<string>_         ( "Rita" ).reduce<string>( ( accumulator:string, value:string, index:number, vector:string ) => value + accumulator,                    ""         );
<string>_         ( "Rita" ).reduce<string>( ( accumulator:string, value:string, index:number, vector:string ) => value + accumulator,                    "", window );

<any   >_<number >( [1, 2] ).reduce        (                                                                                                                         );
<any   >_<number >( [1, 2] ).reduce        ( ( accumulator:any,    value:number, index:number, array:number[] ) => value * accumulator                               );
<number>_<number >( [1, 2] ).reduce<number>( ( accumulator:number, value:number, index:number, array:number[] ) => value * accumulator                               );
<any   >_<number >( [1, 2] ).reduce        ( ( accumulator:any,    value:number, index:number, array:number[] ) => value * accumulator,                   0          );
<any   >_<number >( [1, 2] ).reduce        ( ( accumulator:any,    value:number, index:number, array:number[] ) => value * accumulator,                   0,  window );
<number>_<number >( [1, 2] ).reduce<number>( ( accumulator:number, value:number, index:number, array:number[] ) => value * accumulator,                   0          );
<number>_<number >( [1, 2] ).reduce<number>( ( accumulator:number, value:number, index:number, array:number[] ) => value * accumulator,                   0,  window );

<any   >_<Entity>( entity ).reduce        (                                                                                                                         );
<any   >_<Entity>( entity ).reduce        ( ( accumulator:any,    value:any,    key:string,   entity:Entity ) => accumulator + ", " + value.toString()             );
<string>_<Entity>( entity ).reduce<string>( ( accumulator:string, value:any,    key:string,   entity:Entity ) => accumulator + ", " + value.toString()             );
<any   >_<Entity>( entity ).reduce        ( ( accumulator:any,    value:any,    key:string,   entity:Entity ) => accumulator + ", " + value.toString(), ""         );
<any   >_<Entity>( entity ).reduce        ( ( accumulator:any,    value:any,    key:string,   entity:Entity ) => accumulator + ", " + value.toString(), "", window );
<string>_<Entity>( entity ).reduce<string>( ( accumulator:string, value:any,    key:string,   entity:Entity ) => accumulator + ", " + value.toString(), ""         );
<string>_<Entity>( entity ).reduce<string>( ( accumulator:string, value:any,    key:string,   entity:Entity ) => accumulator + ", " + value.toString(), "", window );
//endregion

//region reduceRight
<string>_         ( "Rita" ).reduceRight        (                                                                                                                         );
<any   >_         ( "Rita" ).reduceRight        ( ( accumulator:any,    value:string, index:number, vector:string ) => value + accumulator                                );
<string>_         ( "Rita" ).reduceRight<string>( ( accumulator:string, value:string, index:number, vector:string ) => value + accumulator                                );
<any   >_         ( "Rita" ).reduceRight        ( ( accumulator:any,    value:string, index:number, vector:string ) => value + accumulator,                    ""         );
<any   >_         ( "Rita" ).reduceRight        ( ( accumulator:any,    value:string, index:number, vector:string ) => value + accumulator,                    "", window );
<string>_         ( "Rita" ).reduceRight<string>( ( accumulator:string, value:string, index:number, vector:string ) => value + accumulator,                    ""         );
<string>_         ( "Rita" ).reduceRight<string>( ( accumulator:string, value:string, index:number, vector:string ) => value + accumulator,                    "", window );

<any   >_<number >( [1, 2] ).reduceRight        (                                                                                                                         );
<any   >_<number >( [1, 2] ).reduceRight        ( ( accumulator:any,    value:number, index:number, array:number[] ) => value * accumulator                               );
<number>_<number >( [1, 2] ).reduceRight<number>( ( accumulator:number, value:number, index:number, array:number[] ) => value * accumulator                               );
<any   >_<number >( [1, 2] ).reduceRight        ( ( accumulator:any,    value:number, index:number, array:number[] ) => value * accumulator,                   0          );
<any   >_<number >( [1, 2] ).reduceRight        ( ( accumulator:any,    value:number, index:number, array:number[] ) => value * accumulator,                   0,  window );
<number>_<number >( [1, 2] ).reduceRight<number>( ( accumulator:number, value:number, index:number, array:number[] ) => value * accumulator,                   0          );
<number>_<number >( [1, 2] ).reduceRight<number>( ( accumulator:number, value:number, index:number, array:number[] ) => value * accumulator,                   0,  window );

<any   >_<Entity>( entity ).reduceRight        (                                                                                                                         );
<any   >_<Entity>( entity ).reduceRight        ( ( accumulator:any,    value:any,    key:string,   entity:Entity ) => accumulator + ", " + value.toString()             );
<string>_<Entity>( entity ).reduceRight<string>( ( accumulator:string, value:any,    key:string,   entity:Entity ) => accumulator + ", " + value.toString()             );
<any   >_<Entity>( entity ).reduceRight        ( ( accumulator:any,    value:any,    key:string,   entity:Entity ) => accumulator + ", " + value.toString(), ""         );
<any   >_<Entity>( entity ).reduceRight        ( ( accumulator:any,    value:any,    key:string,   entity:Entity ) => accumulator + ", " + value.toString(), "", window );
<string>_<Entity>( entity ).reduceRight<string>( ( accumulator:string, value:any,    key:string,   entity:Entity ) => accumulator + ", " + value.toString(), ""         );
<string>_<Entity>( entity ).reduceRight<string>( ( accumulator:string, value:any,    key:string,   entity:Entity ) => accumulator + ", " + value.toString(), "", window );
//endregion

//region reject
<string []>_         ( "Rita"   ).reject(                                                                                       ).value();
<string []>_         ( "Rita"   ).reject( ( char:string,    index:number, vector:string      ) => char == "R"                   ).value();
<string []>_         ( "Rita"   ).reject( ( char:string,    index:number, vector:string      ) => char == "R",           window ).value();
<string []>_         ( "Rita"   ).reject( "length"                                                                              ).value();
<string []>_         ( "Rita"   ).reject( {length :1}                                                                           ).value();

<Entity[]>_<Entity>( entities ).reject(                                                                                       ).value();
<Entity[]>_<Entity>( entities ).reject( ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita"         ).value();
<Entity[]>_<Entity>( entities ).reject( ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita", window ).value();
<Entity[]>_<Entity>( entities ).reject( "blocked"                                                                             ).value();
<Entity[]>_<Entity>( entities ).reject( {blocked:true}                                                                        ).value();

<any    []>_<any    >( entity   ).reject(                                                                                       ).value();
<any    []>_<any    >( entity   ).reject( ( property:any,   key:string,   entity:Entity     ) => key == "name"                 ).value();
<any    []>_<any    >( entity   ).reject( ( property:any,   key:string,   entity:Entity     ) => key == "name",         window ).value();
<any    []>_<any    >( entity   ).reject( "length"                                                                              ).value();
<any    []>_<any    >( entity   ).reject( {length :4}                                                                           ).value();
//endregion

//region sample
<string   >_         ( "Rita"   ).sample(   );
<string []>_         ( "Rita"   ).sample( 2 ).value();

<Entity  >_<Entity>( entities ).sample(   );
<Entity[]>_<Entity>( entities ).sample( 2 ).value();

<any      >_<any    >( entity   ).sample(   );
<any    []>_<any    >( entity   ).sample( 2 ).value();
//endregion

//region shuffle
<string []>_         ( "Rita"   ).shuffle().value();

<Entity[]>_<Entity>( entities ).shuffle().value();

<any    []>_<any    >( entity   ).shuffle().value();
//endregion

//region size
<number>_         ( "Rita"   ).size();

<number>_<Entity>( entities ).size();

<number>_<any    >( entity   ).size();
//endregion

//region some
<boolean>_         ( "Rita"   ).some(                                                                                       );
<boolean>_         ( "Rita"   ).some( ( char:string,    index:number, vector:string      ) => char == "R"                   );
<boolean>_         ( "Rita"   ).some( ( char:string,    index:number, vector:string      ) => char == "R",           window );
<boolean>_         ( "Rita"   ).some( "length"                                                                              );
<boolean>_         ( "Rita"   ).some( {length :1}                                                                           );

<boolean>_<Entity>( entities ).some(                                                                                       );
<boolean>_<Entity>( entities ).some( ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita"         );
<boolean>_<Entity>( entities ).some( ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita", window );
<boolean>_<Entity>( entities ).some( "blocked"                                                                             );
<boolean>_<Entity>( entities ).some( {blocked:true}                                                                        );

<boolean>_<any    >( entity   ).some(                                                                                       );
<boolean>_<any    >( entity   ).some( ( property:any,   key:string,   entity:Entity     ) => key == "name"                 );
<boolean>_<any    >( entity   ).some( ( property:any,   key:string,   entity:Entity     ) => key == "name",         window );
<boolean>_<any    >( entity   ).some( "length"                                                                              );
<boolean>_<any    >( entity   ).some( {length :4}                                                                           );
//endregion

//region sortBy
<string []>_         ( "Rita"   ).sortBy(                                                                                           ).value();
<string []>_         ( "Rita"   ).sortBy( ( char:string,    index:number, vector:string      ) => char.charCodeAt(0)                ).value();
<string []>_         ( "Rita"   ).sortBy( ( char:string,    index:number, vector:string      ) => char.charCodeAt(0),        window ).value();
<string []>_         ( "Rita"   ).sortBy( "length"                                                                                  ).value();
<string []>_         ( "Rita"   ).sortBy( {length :1}                                                                               ).value();

<Entity[]>_<Entity>( entities ).sortBy(                                                                                           ).value();
<Entity[]>_<Entity>( entities ).sortBy( ( entity:Entity, index:number, entities:Entity[] ) => entity.name.charCodeAt(0)         ).value();
<Entity[]>_<Entity>( entities ).sortBy( ( entity:Entity, index:number, entities:Entity[] ) => entity.name.charCodeAt(0), window ).value();
<Entity[]>_<Entity>( entities ).sortBy( "blocked"                                                                                 ).value();
<Entity[]>_<Entity>( entities ).sortBy( {blocked:true}                                                                            ).value();

<any    []>_<any    >( entity   ).sortBy(                                                                                           ).value();
<any    []>_<any    >( entity   ).sortBy( ( property:any,   key:string,   entity:Entity     ) => key.charCodeAt(0)                 ).value();
<any    []>_<any    >( entity   ).sortBy( ( property:any,   key:string,   entity:Entity     ) => key.charCodeAt(0),         window ).value();
<any    []>_<any    >( entity   ).sortBy( "length"                                                                                  ).value();
<any    []>_<any    >( entity   ).sortBy( {length :4}                                                                               ).value();
//endregion

//region toArray
<string []>_         ( "Rita"   ).toArray().value();

<Entity[]>_<Entity>( entities ).toArray().value();

<any    []>_<any    >( entity   ).toArray().value();
//endregion

//region where
<string []>_         ( "Rita"  ).where( {length:1}      ).value();

<Entity[]>_<Entity>( entities).where( {name  :"Rita"} ).value();

<any    []>_<any    >( entity  ).where( {length:4}      ).value();
//endregion

//endregion

//region Functions

//region after
<_.GenericFunction<any>>_( 3 ).after( () => {console.log("after function")}).value();
//endregion

//region bind
<_.GenericFunction<any>>_<_.GenericFunction<any>>( function( greeting:string ) { return greeting + " " + (this.name || " Anonymous"); } ).bind(                  ).value();
<_.GenericFunction<any>>_<_.GenericFunction<any>>( function( greeting:string ) { return greeting + " " + (this.name || " Anonymous"); } ).bind( entity           ).value();
<_.GenericFunction<any>>_<_.GenericFunction<any>>( function( greeting:string ) { return greeting + " " + (this.name || " Anonymous"); } ).bind( entity, "Hello," ).value();
//endregion

//region bindAll
<_.Dictionary<any>>_<any>( entity ).bindAll(         ).value();
<_.Dictionary<any>>_<any>( entity ).bindAll( "greet" ).value();
//endregion

//region bindKey
<_.GenericFunction<any>>_<any>( entity ).bindKey( "greet"          ).value();
<_.GenericFunction<any>>_<any>( entity ).bindKey( "greet", "Hello" ).value();
//endregion

//region compose
<_.GenericFunction<any>>_<_.GenericFunction<any>>( ( n:number ) => n^2 ).compose(                   ).value();
<_.GenericFunction<any>>_<_.GenericFunction<any>>( ( n:number ) => n^2 ).compose( (n:number) => n*2 ).value();
//endregion

//region curry
<_.GenericFunction<any>>_<_.GenericFunction<any>>( ( a:any, b:any, c:any ) => {console.log(a, b, c)} ).curry(   ).value();
<_.GenericFunction<any>>_<_.GenericFunction<any>>( ( a:any, b:any, c:any ) => {console.log(a, b, c)} ).curry( 2 ).value();
//endregion

//region debounce
<_.GenericFunction<any>>_<_.GenericFunction<any>>( () => {console.log("debounce function")} ).debounce( 200                                              ).value();
<_.GenericFunction<any>>_<_.GenericFunction<any>>( () => {console.log("debounce function")} ).debounce( 200, {leading:true, maxWait:300, trailing:false} ).value();
//endregion

//region defer
<number>_<_.GenericFunction<any>>( ( name?:string ) => {console.log(name || " Anonymous")} ).defer(        ).value();
<number>_<_.GenericFunction<any>>( ( name?:string ) => {console.log(name || " Anonymous")} ).defer( "Rita" ).value();
//endregion

//region delay
<number>_<_.GenericFunction<any>>( ( name?:string ) => {console.log(name || " Anonymous")} ).delay( 200         ).value();
<number>_<_.GenericFunction<any>>( ( name?:string ) => {console.log(name || " Anonymous")} ).delay( 200, "Rita" ).value();
//endregion

//region memoize
<_.GenericFunction<any>>_<_.GenericFunction<any>>( ( n:number ) => Math.acos(n) ).memoize(                      ).value();
<_.GenericFunction<any>>_<_.GenericFunction<any>>( ( n:number ) => Math.acos(n) ).memoize( (value:any) => value ).value();
//endregion

//region after
<_.GenericFunction<any>>_<_.GenericFunction<any>>( () => {console.log("Once")} ).once( ).value();
//endregion

//region partial
<_.GenericFunction<any>>_<_.GenericFunction<any>>( ( a:any, b:any, c:any ) => console.log(a, b, c) ).partial(               ).value();
<_.GenericFunction<any>>_<_.GenericFunction<any>>( ( a:any, b:any, c:any ) => console.log(a, b, c) ).partial( "a"           ).value();
<_.GenericFunction<any>>_<_.GenericFunction<any>>( ( a:any, b:any, c:any ) => console.log(a, b, c) ).partial( "a", "b"      ).value();
<_.GenericFunction<any>>_<_.GenericFunction<any>>( ( a:any, b:any, c:any ) => console.log(a, b, c) ).partial( "a", "b", "c" ).value();
//endregion

//region partialRight
<_.GenericFunction<any>>_<_.GenericFunction<any>>( ( a:any, b:any, c:any ) => console.log(a, b, c) ).partialRight(               ).value();
<_.GenericFunction<any>>_<_.GenericFunction<any>>( ( a:any, b:any, c:any ) => console.log(a, b, c) ).partialRight( "c"           ).value();
<_.GenericFunction<any>>_<_.GenericFunction<any>>( ( a:any, b:any, c:any ) => console.log(a, b, c) ).partialRight( "c", "b"      ).value();
<_.GenericFunction<any>>_<_.GenericFunction<any>>( ( a:any, b:any, c:any ) => console.log(a, b, c) ).partialRight( "c", "b", "a" ).value();
//endregion

//region throttle
<_.GenericFunction<any>>_<_.GenericFunction<any>>( () => {console.log("throttle function")} ).throttle( 200                                 ).value();
<_.GenericFunction<any>>_<_.GenericFunction<any>>( () => {console.log("throttle function")} ).throttle( 200, {leading:true, trailing:false} ).value();
//endregion

//region wrap
<_.GenericFunction<any>>_<_.GenericFunction<any>>( ( value:any ) => value ).wrap( ( wrapped:{( value:any ):any}, value:any ) => wrapped(value.toString())).value();
//endregion

//endregion

//region Objects

//region assign
<_.Dictionary<any>>_<any>( {name:"Rita"} ).assign(                                                                                                     ).value();
<_.Dictionary<any>>_<any>( {name:"Rita"} ).assign( {age:19}                                                                                            ).value();
<_.Dictionary<any>>_<any>( {name:"Rita"} ).assign( {age:19}, {blocked:false}                                                                           ).value();
<_.Dictionary<any>>_<any>( {name:"Rita"} ).assign(                            (objectValue:any, sourceValue:any) => objectValue || sourceValue         ).value();
<_.Dictionary<any>>_<any>( {name:"Rita"} ).assign( {age:19},                  (objectValue:any, sourceValue:any) => objectValue || sourceValue         ).value();
<_.Dictionary<any>>_<any>( {name:"Rita"} ).assign( {age:19}, {blocked:false}, (objectValue:any, sourceValue:any) => objectValue || sourceValue         ).value();
<_.Dictionary<any>>_<any>( {name:"Rita"} ).assign(                            (objectValue:any, sourceValue:any) => objectValue || sourceValue, window ).value();
<_.Dictionary<any>>_<any>( {name:"Rita"} ).assign( {age:19},                  (objectValue:any, sourceValue:any) => objectValue || sourceValue, window ).value();
<_.Dictionary<any>>_<any>( {name:"Rita"} ).assign( {age:19}, {blocked:false}, (objectValue:any, sourceValue:any) => objectValue || sourceValue, window ).value();
//endregion

//region clone
<Entity>_<Entity>( entity ).clone         (                                        );
<Entity>_<Entity>( entity ).clone         ( true                                   );
<any    >_<Entity>( entity ).clone         ( true, (value:Entity) => value         );
<any    >_<Entity>( entity ).clone         ( true, (value:Entity) => value, window );
<Entity>_<Entity>( entity ).clone<Entity>( true, (value:Entity) => value         );
<Entity>_<Entity>( entity ).clone<Entity>( true, (value:Entity) => value, window );
<any    >_<Entity>( entity ).clone         (       (value:Entity) => value         );
<any    >_<Entity>( entity ).clone         (       (value:Entity) => value, window );
<Entity>_<Entity>( entity ).clone<Entity>(       (value:Entity) => value         );
<Entity>_<Entity>( entity ).clone<Entity>(       (value:Entity) => value, window );
//endregion

//region cloneDeep
<Entity>_<Entity>( entity ).cloneDeep         (                                  );
<any    >_<Entity>( entity ).cloneDeep         ( (value:Entity) => value         );
<any    >_<Entity>( entity ).cloneDeep         ( (value:Entity) => value, window );
<Entity>_<Entity>( entity ).cloneDeep<Entity>( (value:Entity) => value         );
<Entity>_<Entity>( entity ).cloneDeep<Entity>( (value:Entity) => value, window );
//endregion

//region create
<_.Dictionary<any>>_<any>( entity ).create(                    ).value();
<_.Dictionary<any>>_<any>( entity ).create( {hairColor:"foxy"} ).value();
//endregion

//region defaults
<_.Dictionary<any>>_( entity ).defaults(                         ).value();
<_.Dictionary<any>>_( entity ).defaults( {name:"Cage"}           ).value();
<_.Dictionary<any>>_( entity ).defaults( {name:"Cage"}, {age:22} ).value();
//endregion

//region findKey
<string>_<any>( entity ).findKey(                                                                               );
<string>_<any>( entity ).findKey( ( value:any, key:string, entity:Entity ) => typeof value == "string"         );
<string>_<any>( entity ).findKey( ( value:any, key:string, entity:Entity ) => typeof value == "string", window );
<string>_<any>( entity ).findKey( "length"                                                                      );
<string>_<any>( entity ).findKey( {length:4}                                                                    );
//endregion

//region findLastKey
<string>_<any>( entity ).findLastKey(                                                                               );
<string>_<any>( entity ).findLastKey( ( value:any, key:string, entity:Entity ) => typeof value == "string"         );
<string>_<any>( entity ).findLastKey( ( value:any, key:string, entity:Entity ) => typeof value == "string", window );
<string>_<any>( entity ).findLastKey( "length"                                                                      );
<string>_<any>( entity ).findLastKey( {length:4}                                                                    );
//endregion

//region forIn
<_.Dictionary<any>>_<any>( entity ).forIn(                                                                         ).value();
<_.Dictionary<any>>_<any>( entity ).forIn( ( value:any, key:string, entity:Entity ) => console.log(value)         ).value();
<_.Dictionary<any>>_<any>( entity ).forIn( ( value:any, key:string, entity:Entity ) => console.log(value), window ).value();
//endregion

//region forInRight
<_.Dictionary<any>>_<any>( entity ).forInRight(                                                                         ).value();
<_.Dictionary<any>>_<any>( entity ).forInRight( ( value:any, key:string, entity:Entity ) => console.log(value)         ).value();
<_.Dictionary<any>>_<any>( entity ).forInRight( ( value:any, key:string, entity:Entity ) => console.log(value), window ).value();
//endregion

//region forOwn
<_.Dictionary<any>>_<any>( entity ).forOwn(                                                                         ).value();
<_.Dictionary<any>>_<any>( entity ).forOwn( ( value:any, key:string, entity:Entity ) => console.log(value)         ).value();
<_.Dictionary<any>>_<any>( entity ).forOwn( ( value:any, key:string, entity:Entity ) => console.log(value), window ).value();
//endregion

//region forOwnRight
<_.Dictionary<any>>_<any>( entity ).forOwnRight(                                                                         ).value();
<_.Dictionary<any>>_<any>( entity ).forOwnRight( ( value:any, key:string, entity:Entity ) => console.log(value)         ).value();
<_.Dictionary<any>>_<any>( entity ).forOwnRight( ( value:any, key:string, entity:Entity ) => console.log(value), window ).value();
//endregion

//region functions
<string[]>_<any>( entity ).functions().value();
//endregion

//region has
<boolean>_<any>( entity ).has( "name");
//endregion

//region invert
<_.Dictionary<string>>_<any>( entity ).invert().value();
//endregion

//region isArguments
<boolean>_<any>( entity ).isArguments();
//endregion

//region isArray
<boolean>_<Entity>( entities ).isArray();
//endregion

//region isDate
<boolean>_<Date>( new Date() ).isDate();
//endregion

//region isElement
<boolean>_<HTMLElement>( document.body ).isElement();
//endregion

//region isEmpty
<boolean>_( "" ).isEmpty();
//endregion

//region isEqual
<boolean>_<Entity>( entity ).isEqual         ( entity, ( a:Entity, b:any     ) => a.name == b              );
<boolean>_<Entity>( entity ).isEqual         ( entity, ( a:Entity, b:any     ) => a.name == b,      window );
<boolean>_<Entity>( entity ).isEqual<Entity>( entity, ( a:Entity, b:Entity ) => a.name == b.name         );
<boolean>_<Entity>( entity ).isEqual<Entity>( entity, ( a:Entity, b:Entity ) => a.name == b.name, window );
//endregion

//region isFinite
<boolean>_( Infinity ).isFinite();
//endregion

//region isFunction
<boolean>_( function(){} ).isFunction();
//endregion

//region isNaN
<boolean>_( NaN ).isNaN();
//endregion

//region isNull
<boolean>_( null ).isNull();
//endregion

//region isNumber
<boolean>_( 200 ).isNumber();
//endregion

//region isObject
<boolean>_<any>( entity ).isObject();
//endregion

//region isPlainObject
<boolean>_<string>( {name:"Rita"} ).isPlainObject();
//endregion

//region isRegExp
<boolean>_( /regexp/i ).isRegExp();
//endregion

//region isString
<boolean>_( "Rita" ).isString();
//endregion

//region isUndefined
<boolean>_( undefined ).isUndefined();
//endregion

//region keys
<string[]>_<any>( entity ).keys().value();
//endregion

//region mapValues
<_.Dictionary<any    >>_<any>( entity ).mapValues        (                                                                   ).value();
<_.Dictionary<any    >>_<any>( entity ).mapValues        ( ( value:any, key:string, dictionary:Entity ) => ~~value          ).value();
<_.Dictionary<any    >>_<any>( entity ).mapValues        ( ( value:any, key:string, dictionary:Entity ) => ~~value,  window ).value();
<_.Dictionary<number >>_<any>( entity ).mapValues<number>( ( value:any, key:string, dictionary:Entity ) => ~~value          ).value();
<_.Dictionary<number >>_<any>( entity ).mapValues<number>( ( value:any, key:string, dictionary:Entity ) => ~~value,  window ).value();
<_.Dictionary<any    >>_<any>( entity ).mapValues        ( "length"                                                          ).value();
<_.Dictionary<boolean>>_<any>( entity ).mapValues        ( {length:4}                                                        ).value();
//endregion

//region merge
<_.Dictionary<any>>_<any>( entity ).merge(                                        ).value();
<_.Dictionary<any>>_<any>( entity ).merge( {hairColor:"foxy"}                     ).value();
<_.Dictionary<any>>_<any>( entity ).merge( {hairColor:"foxy"}, {eyesColor:"blue"} ).value();
//endregion

//region omit
<_.Dictionary<any>>_<any>( entity ).omit(                                                                                   ).value();
<_.Dictionary<any>>_<any>( entity ).omit( ( value:any, key:string, dictionary:Entity ) => typeof value != "string"         ).value();
<_.Dictionary<any>>_<any>( entity ).omit( ( value:any, key:string, dictionary:Entity ) => typeof value != "string", window ).value();
<_.Dictionary<any>>_<any>( entity ).omit(  "age"                                                                            ).value();
<_.Dictionary<any>>_<any>( entity ).omit(  "age",  "blocked"                                                                ).value();
<_.Dictionary<any>>_<any>( entity ).omit( ["age"], "blocked"                                                                ).value();
<_.Dictionary<any>>_<any>( entity ).omit( ["age",  "blocked"]                                                               ).value();
//endregion

//region pairs
<any[][]>_<any>( entity ).pairs().value();
//endregion

//region pick
<_.Dictionary<any>>_<any>( entity ).pick(                                                                                   ).value();
<_.Dictionary<any>>_<any>( entity ).pick( ( value:any, key:string, dictionary:Entity ) => typeof value != "string"         ).value();
<_.Dictionary<any>>_<any>( entity ).pick( ( value:any, key:string, dictionary:Entity ) => typeof value != "string", window ).value();
<_.Dictionary<any>>_<any>( entity ).pick(  "name"                                                                           ).value();
<_.Dictionary<any>>_<any>( entity ).pick(  "name",  "age"                                                                   ).value();
<_.Dictionary<any>>_<any>( entity ).pick( ["name"], "age"                                                                   ).value();
<_.Dictionary<any>>_<any>( entity ).pick( ["name",  "age"]                                                                  ).value();
//endregion

//region transform
<Entity[]           >_<Entity>( entities ).transform                      (                                                                                                                                            ).value();
<any    []           >_<Entity>( entities ).transform                      ( ( accumulator:any,                  value:Entity, index:number, array:Entity[]              ) => accumulator.push(value.age)             ).value();
<number []           >_<Entity>( entities ).transform<number              >( ( accumulator:number[],             value:Entity, index:number, array:Entity[]              ) => accumulator.push(value.age)             ).value();
<any    []           >_<Entity>( entities ).transform                      ( ( accumulator:any,                  value:Entity, index:number, array:Entity[]              ) => accumulator.push(value.age), []         ).value();
<any    []           >_<Entity>( entities ).transform                      ( ( accumulator:any,                  value:Entity, index:number, array:Entity[]              ) => accumulator.push(value.age), [], window ).value();
<number []           >_<Entity>( entities ).transform<number[]            >( ( accumulator:number[],             value:Entity, index:number, array:Entity[]              ) => accumulator.push(value.age), []         ).value();
<number []           >_<Entity>( entities ).transform<number[]            >( ( accumulator:number[],             value:Entity, index:number, array:Entity[]              ) => accumulator.push(value.age), [], window ).value();

<_.Dictionary<any   >>_<any    >( entity   ).transform                      (                                                                                                                                            ).value();
<_.Dictionary<any   >>_<any    >( entity   ).transform                      ( ( accumulator:_.Dictionary<any   >, value:any,     key:string,   dictionary:_.Dictionary<any> ) => accumulator[key] = ~~value              ).value();
<_.Dictionary<number>>_<any    >( entity   ).transform<number              >( ( accumulator:_.Dictionary<number>, value:any,     key:string,   dictionary:_.Dictionary<any> ) => accumulator[key] = ~~value              ).value();
<_.Dictionary<any   >>_<any    >( entity   ).transform                      ( ( accumulator:_.Dictionary<any   >, value:any,     key:string,   dictionary:_.Dictionary<any> ) => accumulator[key] = ~~value,  {}         ).value();
<_.Dictionary<any   >>_<any    >( entity   ).transform                      ( ( accumulator:_.Dictionary<any   >, value:any,     key:string,   dictionary:_.Dictionary<any> ) => accumulator[key] = ~~value,  {}, window ).value();
<_.Dictionary<number>>_<any    >( entity   ).transform<_.Dictionary<number>>( ( accumulator:_.Dictionary<number>, value:any,     key:string,   dictionary:_.Dictionary<any> ) => accumulator[key] = ~~value,  {}         ).value();
<_.Dictionary<number>>_<any    >( entity   ).transform<_.Dictionary<number>>( ( accumulator:_.Dictionary<number>, value:any,     key:string,   dictionary:_.Dictionary<any> ) => accumulator[key] = ~~value,  {}, window ).value();
//endregion

//region values
<any[]>_<any>( entity ).values().value();
//endregion

//endregion

//region Utilities

//region now
<number>_().now();
//endregion

//region constant
<_.ConstantFunction<Entity>>_<Entity>( entity ).constant().value();
//endregion

//region createCallback
<_.IdentityFunction<any>>_                        (               ).createCallback(           ).value();
<_.GenericFunction< any>>_<_.GenericFunction<any>>( function(){}  ).createCallback(           ).value();
<_.GenericFunction< any>>_<_.GenericFunction<any>>( function(){}  ).createCallback( window    ).value();
<_.GenericFunction< any>>_<_.GenericFunction<any>>( function(){}  ).createCallback( window, 1 ).value();
<_.GenericFunction< any>>_<_.GenericFunction<any>>( function(){}  ).createCallback( window, 2 ).value();
<_.GenericFunction< any>>_<_.GenericFunction<any>>( function(){}  ).createCallback( window, 3 ).value();
<_.GenericFunction< any>>_<_.GenericFunction<any>>( function(){}  ).createCallback( window, 4 ).value();
<_.PropertyFunction<any>>_                        ( "name"        ).createCallback(           ).value();
<_.WhereFunction<   any>>_<any                   >( {name:"Rita"} ).createCallback(           ).value();
//endregion

//region escape
<string>_( "Rita's home" ).escape();
//endregion

//region identity
<Entity>_<Entity>( entity ).identity();
//endregion

//region mixin
<void>_( function(){}                                    ).mixin( {toLower:( name:string ) => name.toLowerCase()}                );
<void>_( function(){}                                    ).mixin( {toLower:( name:string ) => name.toLowerCase()}, false         );
<void>_( function(){}                                    ).mixin( {toLower:( name:string ) => name.toLowerCase()}, {chain:false} );

<void>_( {toLower:( name:string ) => name.toLowerCase()} ).mixin(                                                                );
<void>_( {toLower:( name:string ) => name.toLowerCase()} ).mixin(                                                  false         );
<void>_( {toLower:( name:string ) => name.toLowerCase()} ).mixin(                                                  {chain:false} );

<void>_( entity                                          ).mixin( {toLower:( name:string ) => name.toLowerCase()}                );
<void>_( entity                                          ).mixin( {toLower:( name:string ) => name.toLowerCase()}, false         );
<void>_( entity                                          ).mixin( {toLower:( name:string ) => name.toLowerCase()}, {chain:false} );
//endregion

//region noConflict
<_.Ctor>_().noConflict();
//endregion

//region noop
<void>_().noop();
//endregion

//region parseInt
<number>_( "200" ).parseInt(   );
<number>_( "200" ).parseInt( 3 );
//endregion

//region property
<_.PropertyFunction<string>>_( "name" ).property<string>().value();
//endregion

//region random
<number>_( 10 ).random(          );
<number>_( 5  ).random( 10       );
<number>_( 5  ).random( 10, true );
//endregion

//region result
<string>_<string>( {name:"Rita"} ).result( "name" );
//endregion

//region runInContext
<_.Ctor>_(        ).runInContext();
<_.Ctor>_( window ).runInContext();
//endregion

//region template
<_.PartialTemplateFunction<any>>_( "hello <%= name %>" ).template<any>(                         );
<string                        >_( "hello <%= name %>" ).template     ( entity                  );
<string                        >_( "hello <%= name %>" ).template     ( entity, templateOptions );
//endregion

//region times
<Entity[]>_( 3 ).times<Entity>( () => entity         ).value();
<Entity[]>_( 3 ).times<Entity>( () => entity, window ).value();
//endregion

//region unescape
<string>_( "Rita&#39;s home" ).unescape();
//endregion

//region uniqueId
<string>_(           ).uniqueId();
<string>_( "prefix_" ).uniqueId();
//endregion

//endregion

//endregion

//region Static

//region Arrays

//region compact
<string[]>_.compact        ( "Rita"     );

<any   []>_.compact        ( [0, 1, 0 ] );
<number[]>_.compact<number>( [1, 2, 0 ] );
//endregion

//region difference
<string []>_.difference        ( "qweRita",  ["q", "w", "e"] );

<any    []>_.difference        ( [1, 2, 3],  [1]             );
<number []>_.difference<number>( [1, 2, 3],  [1]             );
//endregion

//region findIndex
<number>_.findIndex         ( "Rita"                                                                                          );
<number>_.findIndex         ( "Rita",   ( char:string,    index:number, vector:string      ) => char == "R"                   );
<number>_.findIndex         ( "Rita",   ( char:string,    index:number, vector:string      ) => char == "R",           window );
<number>_.findIndex         ( "Rita",   "length"                                                                              );
<number>_.findIndex         ( "Rita",   {length:1}                                                                            );

<number>_.findIndex<Entity>( entities                                                                                        );
<number>_.findIndex<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita"         );
<number>_.findIndex<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita", window );
<number>_.findIndex<Entity>( entities, "name"                                                                                );
<number>_.findIndex<Entity>( entities, {name:"Rita"}                                                                         );
//endregion

//region findLastIndex
<number>_.findLastIndex         ( "Rita"                                                                                          );
<number>_.findLastIndex         ( "Rita",   ( char:string,    index:number, vector:string      ) => char == "R"                   );
<number>_.findLastIndex         ( "Rita",   ( char:string,    index:number, vector:string      ) => char == "R",           window );
<number>_.findLastIndex         ( "Rita",   "length"                                                                              );
<number>_.findLastIndex         ( "Rita",   {length:1}                                                                            );

<number>_.findLastIndex<Entity>( entities                                                                                        );
<number>_.findLastIndex<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita"         );
<number>_.findLastIndex<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita", window );
<number>_.findLastIndex<Entity>( entities, "name"                                                                                );
<number>_.findLastIndex<Entity>( entities, {name:"Rita"}                                                                         );
//endregion

//region first
<string   >_.first         ( "Rita"                                                                                               );
<string []>_.first         ( "Rita",   (char:string,     index:number, vector:string      ) => char.toUpperCase() == char         );
<string []>_.first         ( "Rita",   (char:string,     index:number, vector:string      ) => char.toUpperCase() == char, window );
<string []>_.first         ( "Rita",   2                                                                                          );
<string []>_.first         ( "Rita",   "length"                                                                                   );
<string []>_.first         ( "Rita",   {length:1}                                                                                 );

<Entity  >_.first<Entity>( entities                                                                                             );
<Entity[]>_.first<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.age > 20                    );
<Entity[]>_.first<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.age > 20,            window );
<Entity[]>_.first<Entity>( entities, 2                                                                                          );
<Entity[]>_.first<Entity>( entities, "blocked"                                                                                  );
<Entity[]>_.first<Entity>( entities, {blocked:true}                                                                             );
//endregion

//region flatten
<string []>_.flatten                 ( "Rita"                                                                                             );

<string []>_.flatten                 ( "Rita",   true                                                                                     );
<any    []>_.flatten                 ( "Rita",   true, ( char:string,    index:number, vector:string      ) => char.charCodeAt(0)         );
<any    []>_.flatten                 ( "Rita",   true, ( char:string,    index:number, vector:string      ) => char.charCodeAt(0), window );
<number []>_.flatten<         number>( "Rita",   true, ( char:string,    index:number, vector:string      ) => char.charCodeAt(0)         );
<number []>_.flatten<         number>( "Rita",   true, ( char:string,    index:number, vector:string      ) => char.charCodeAt(0), window );
<any    []>_.flatten                 ( "Rita",   true, "length"                                                                           );
<boolean[]>_.flatten                 ( "Rita",   true, {length:"1"}                                                                       );

<any    []>_.flatten                 ( "Rita",         ( char:string,    index:number, vector:string      ) => char.charCodeAt(0)         );
<any    []>_.flatten                 ( "Rita",         ( char:string,    index:number, vector:string      ) => char.charCodeAt(0), window );
<number []>_.flatten<         number>( "Rita",         ( char:string,    index:number, vector:string      ) => char.charCodeAt(0)         );
<number []>_.flatten<         number>( "Rita",         ( char:string,    index:number, vector:string      ) => char.charCodeAt(0), window );
<string []>_.flatten                 ( "Rita",         "length"                                                                           );
<boolean[]>_.flatten                 ( "Rita",         {length:"1"}                                                                       );


<any    []>_.flatten<Entity        >( entities                                                                                           );

<any    []>_.flatten<Entity        >( entities, true                                                                                     );
<any    []>_.flatten<Entity        >( entities, true, ( entity:Entity, index:number, entities:Entity[] ) => entity.age                 );
<any    []>_.flatten<Entity        >( entities, true, ( entity:Entity, index:number, entities:Entity[] ) => entity.age,         window );
<number []>_.flatten<Entity, number>( entities, true, ( entity:Entity, index:number, entities:Entity[] ) => entity.age                 );
<number []>_.flatten<Entity, number>( entities, true, ( entity:Entity, index:number, entities:Entity[] ) => entity.age,         window );
<any    []>_.flatten<Entity        >( entities, true, "name"                                                                             );
<boolean[]>_.flatten<Entity        >( entities, true, {name:"Rita"}                                                                      );

<any    []>_.flatten<Entity        >( entities,       ( entity:Entity, index:number, entities:Entity[] ) => entity.age                 );
<any    []>_.flatten<Entity        >( entities,       ( entity:Entity, index:number, entities:Entity[] ) => entity.age,         window );
<number []>_.flatten<Entity, number>( entities,       ( entity:Entity, index:number, entities:Entity[] ) => entity.age                 );
<number []>_.flatten<Entity, number>( entities,       ( entity:Entity, index:number, entities:Entity[] ) => entity.age,         window );
<any    []>_.flatten<Entity        >( entities,       "name"                                                                             );
<boolean[]>_.flatten<Entity        >( entities,       {name:"Rita"}                                                                      );
//endregion

//region indexOf
<number>_.indexOf        ( "RitaRita",   "R"       );
<number>_.indexOf        ( "RitaRita",   "R", 2    );
<number>_.indexOf        ( "RitaRita",   "R", true );

<number>_.indexOf<number>( [1, 2, 1, 2], 2         );
<number>_.indexOf<number>( [1, 2, 1, 2], 2,   3    );
<number>_.indexOf<number>( [1, 2, 1, 2], 2,   true );
//endregion

//region initial
<string []>_.initial         ( "Rita"                                                                                          );
<string []>_.initial         ( "Rita",   ( char:string,    index:number, vector:string      ) => char == "R"                   );
<string []>_.initial         ( "Rita",   ( char:string,    index:number, vector:string      ) => char == "R",           window );
<string []>_.initial         ( "Rita",   2                                                                                     );
<string []>_.initial         ( "Rita",   "length"                                                                              );
<string []>_.initial         ( "Rita",   {length:1}                                                                            );

<Entity[]>_.initial<Entity>( entities                                                                                        );
<Entity[]>_.initial<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita"         );
<Entity[]>_.initial<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita", window );
<Entity[]>_.initial<Entity>( entities, 2                                                                                     );
<Entity[]>_.initial<Entity>( entities, "blocked"                                                                             );
<Entity[]>_.initial<Entity>( entities, {blocked:false}                                                                       );
//endregion

//region intersection
<number[]>_.intersection<number>( [1, 2, 3]         );
<number[]>_.intersection<number>( [1, 2, 3], [1, 2] );
//endregion

//region last
<string   >_.last         ( "Rita"                                                                                          );
<string []>_.last         ( "Rita",   ( char:string,    index:number, vector:string      ) => char == "R"                   );
<string []>_.last         ( "Rita",   ( char:string,    index:number, vector:string      ) => char == "R",           window );
<string []>_.last         ( "Rita",   2                                                                                     );
<string []>_.last         ( "Rita",   "length"                                                                              );
<string []>_.last         ( "Rita",   {length:1}                                                                            );

<Entity  >_.last<Entity>( entities                                                                                        );
<Entity[]>_.last<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita"         );
<Entity[]>_.last<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita", window );
<Entity[]>_.last<Entity>( entities, 2                                                                                     );
<Entity[]>_.last<Entity>( entities, "blocked"                                                                             );
<Entity[]>_.last<Entity>( entities, {blocked:false}                                                                       );
//endregion

//region lastIndexOf
<number>_.lastIndexOf        ( "RitaRita",   "R"    );
<number>_.lastIndexOf        ( "RitaRita",   "R", 2 );

<number>_.lastIndexOf<number>( [1, 2, 1, 2], 2      );
<number>_.lastIndexOf<number>( [1, 2, 1, 2], 2,   3 );
//endregion

//region pull
<number[]>_.pull<number>( [1, 2, 3]                 );
<number[]>_.pull<number>( [1, 2, 3], [4, 5]         );
<number[]>_.pull<number>( [1, 2, 3], entity, "Rita" );
//endregion

//region range
<number[]>_.range(    5    );
<number[]>_.range( 1, 5    );
<number[]>_.range( 1, 5, 2 );
//endregion

//region remove
<Entity[]>_.remove<Entity>( entities                                                                                         );
<Entity[]>_.remove<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.blocked == true         );
<Entity[]>_.remove<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.blocked == true, window );
<Entity[]>_.remove<Entity>( entities, "blocked"                                                                              );
<Entity[]>_.remove<Entity>( entities, {blocked:true}                                                                         );
//endregion

//region rest
<string []>_.rest         ( "Rita"                                                                                          );
<string []>_.rest         ( "Rita",   ( char:string,    index:number, vector:string      ) => char == "R"                   );
<string []>_.rest         ( "Rita",   ( char:string,    index:number, vector:string      ) => char == "R",           window );
<string []>_.rest         ( "Rita",   2                                                                                     );
<string []>_.rest         ( "Rita",   "length"                                                                              );
<string []>_.rest         ( "Rita",   {length:1}                                                                            );

<Entity[]>_.rest<Entity>( entities                                                                                        );
<Entity[]>_.rest<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita"         );
<Entity[]>_.rest<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita", window );
<Entity[]>_.rest<Entity>( entities, 2                                                                                     );
<Entity[]>_.rest<Entity>( entities, "blocked"                                                                             );
<Entity[]>_.rest<Entity>( entities, {blocked:false}                                                                       );
//endregion

//region sortedIndex
<number>_.sortedIndex              ( "Rita",   "R"                                                                                    );
<number>_.sortedIndex              ( "Rita",   "R",           ( value:string       ):number => value.charCodeAt(0)                    );
<number>_.sortedIndex              ( "Rita",   "R",           ( value:string       ):number => value.charCodeAt(0),            window );
<number>_.sortedIndex              ( "Rita",   211,           ( value:any          ):number => value.toString().charCodeAt(0)         );
<number>_.sortedIndex              ( "Rita",   211,           ( value:any          ):number => value.toString().charCodeAt(0), window );
<number>_.sortedIndex              ( "Rita",   "R",           "length"                                                                );
<number>_.sortedIndex              ( "Rita",   "R",           {length:1}                                                              );

<number>_.sortedIndex<number      >( [20, 30], 40                                                                                     );
<number>_.sortedIndex<Entity     >( entities, entity,        ( value:Entity      ):number => value.name.indexOf("Rita")             );
<number>_.sortedIndex<Entity     >( entities, entity,        ( value:Entity      ):number => value.name.indexOf("Rita"),     window );
<number>_.sortedIndex<NamedEntity>( entities, {name:'Rita'}, ( value:NamedEntity ):number => value.name.indexOf("Rita")             );
<number>_.sortedIndex<NamedEntity>( entities, {name:'Rita'}, ( value:NamedEntity ):number => value.name.indexOf("Rita"),     window );
<number>_.sortedIndex<Entity     >( entities, entity,        "age"                                                                   );
<number>_.sortedIndex<Entity     >( entities, entity,        {age:19}                                                                );
//endregion

//region union
<any   []>_.union        (                                 );
<number[]>_.union<number>( [1, 2, 3]                       );
<number[]>_.union<number>( [1, 2, 3], [5, 2, 1, 4]         );
<number[]>_.union<number>( [1, 2, 3], [5, 2, 1, 4], [2, 1] );
//endregion

//region uniq
<string []>_.uniq         ( "Rita"                                                                                          );
<string []>_.uniq         ( "Rita",   ( char:string,    index:number, vector:string      ) => char == "R"                   );
<string []>_.uniq         ( "Rita",   ( char:string,    index:number, vector:string      ) => char == "R",           window );
<string []>_.uniq         ( "Rita",   true                                                                                  );
<string []>_.uniq         ( "Rita",   "length"                                                                              );
<string []>_.uniq         ( "Rita",   {length:1}                                                                            );

<Entity[]>_.uniq<Entity>( entities                                                                                        );
<Entity[]>_.uniq<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita"         );
<Entity[]>_.uniq<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita", window );
<Entity[]>_.uniq<Entity>( entities, true                                                                                  );
<Entity[]>_.uniq<Entity>( entities, "blocked"                                                                             );
<Entity[]>_.uniq<Entity>( entities, {blocked:false}                                                                       );
//endregion

//region without
<string[]>_.without        ( "qweRita"                        );
<string[]>_.without        ( "qweRita",    "q", "w", "e", 211 );

<number[]>_.without<number>( [1, 2, 1, 0]                     );
<number[]>_.without<number>( [1, 2, 1, 0], 0,   1             );
//endregion

//region xor
<any   []>_.xor        (                               );
<number[]>_.xor<number>( [1, 2, 3], [5, 2]             );
<any   []>_.xor<any   >( [1, 2, 3], [5, 2], ["q", "w"] );
//endregion

//region zip
<string[][]>_.zip        (                             );
<string[][]>_.zip        ( ""                          );
<any   [][]>_.zip        ( "RC",       [1, 2]          );
<string[][]>_.zip        ( "R",        "i",   "t", "a" );

<any   [][]>_.zip        ( []                          );
<number[][]>_.zip<number>( [1, 2],     [1, 2]          );
<any   [][]>_.zip        ( ["f", "b"], [1, 2]          );
//endregion

//region zipObject
<_.Dictionary<any   >>_.zipObject        (  "name"                                          );
<_.Dictionary<string>>_.zipObject        (  "name",                     "Rita"              );
<_.Dictionary<string>>_.zipObject        (  "name",                    ["Rita", "19"]       );

<_.Dictionary<any   >>_.zipObject        ( ["name", "age", "blocked"]                       );
<_.Dictionary<string>>_.zipObject        ( ["name", "age", "blocked"],  "Rita"              );
<_.Dictionary<number>>_.zipObject<number>( ["name", "age", "blocked"], [111,    222, 333]   );
<_.Dictionary<any   >>_.zipObject        ( ["name", "age", "blocked"], ["Rita", 19,  false] );
//endregion

//endregion

//region Chaining

//region chain              --checked-not --adequate-not
<_._EmptyWrapper                                           >_.chain                             (                          );
<_._NumberWrapper                                          >_.chain                             ( 19                       );
<_._StringWrapper                                          >_.chain                             ( "Rita"                   );
<_._ArrayWrapper<                                  Entity>>_.chain<Entity                    >( entities                 );
<_._DictionaryWrapper<                             any    >>_.chain<Entity                    >( entity                   );
<_._FunctionWrapper<  _.IdentityFunction<Entity>         >>_.chain<_.IdentityFunction<Entity>>( (value:Entity) => value );
<_._Wrapper<          any,                         any    >>_.chain                             ( window                   );
//endregion

//region tap
<Entity>_.tap<Entity>( entity, ( value:Entity ) => console.log(value.name) );
//endregion

//endregion

//region Collections

//region at
<string[]>_.at        ( "Rita",         0, 1,     2, 3   );
<string[]>_.at        ( "Rita",        [0, 1],   [2, 3]  );

<number[]>_.at<number>( [9, 8, 7, 6],   0, 1,     2, 3   );
<number[]>_.at<number>( [9, 8, 7, 6],  [0, 1],   [2, 3]  );

<any   []>_.at<any   >( entity,         "name",   "age"  );
<any   []>_.at<any   >( entity,        ["name"], ["age"] );
<string[]>_.at<string>( {name:"Rita"},  "name"           );
<string[]>_.at<string>( {name:"Rita"}, ["name"]          );
//endregion

//region contains
<boolean>_.contains        ( "Rita",       "R"       );
<boolean>_.contains        ( "Rita",       "R"    ,2 );

<boolean>_.contains<number>( [1, 2, 3, 4], 3         );
<boolean>_.contains<number>( [1, 2, 3, 4], 3      ,3 );

<boolean>_.contains<any   >( entity,       "Rita"    );
<boolean>_.contains<any   >( entity,       "Rita" ,5 );
//endregion

//region countBy
<_.Dictionary<number>>_.countBy         ( "Rita"                                                                                                );
<_.Dictionary<number>>_.countBy         ( "Rita",   ( char:string,    index:number, vector:string      ) => char == "R"                         );
<_.Dictionary<number>>_.countBy         ( "Rita",   ( char:string,    index:number, vector:string      ) => char == "R",                 window );
<_.Dictionary<number>>_.countBy         ( "Rita",   "length"                                                                                    );
<_.Dictionary<number>>_.countBy         ( "Rita",   {length:1}                                                                                  );

<_.Dictionary<number>>_.countBy<Entity>( entities                                                                                              );
<_.Dictionary<number>>_.countBy<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.age > 18                     );
<_.Dictionary<number>>_.countBy<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.age > 18,             window );
<_.Dictionary<number>>_.countBy<Entity>( entities, "age"                                                                                       );
<_.Dictionary<number>>_.countBy<Entity>( entities, {age   :19}                                                                                 );

<_.Dictionary<number>>_.countBy<any    >( entity                                                                                                );
<_.Dictionary<number>>_.countBy<any    >( entity,   ( property:any,   key:string,   entity:Entity     ) => typeof property == "string"         );
<_.Dictionary<number>>_.countBy<any    >( entity,   ( property:any,   key:string,   entity:Entity     ) => typeof property == "string", window );
<_.Dictionary<number>>_.countBy<any    >( entity,   "length"                                                                                    );
<_.Dictionary<number>>_.countBy<any    >( entity,   {length:4}                                                                                  );
//endregion

//region every
<boolean>_.every         ( "Rita"                                                                                                );
<boolean>_.every         ( "Rita",   ( char:string,    index:number, vector:string      ) => char == "R"                         );
<boolean>_.every         ( "Rita",   ( char:string,    index:number, vector:string      ) => char == "R",                 window );
<boolean>_.every         ( "Rita",   "length"                                                                                    );
<boolean>_.every         ( "Rita",   {length:1}                                                                                  );

<boolean>_.every<Entity>( entities                                                                                              );
<boolean>_.every<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.age > 18                     );
<boolean>_.every<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.age > 18,             window );
<boolean>_.every<Entity>( entities, "age"                                                                                       );
<boolean>_.every<Entity>( entities, {age   :19}                                                                                 );

<boolean>_.every<any    >( entity                                                                                                );
<boolean>_.every<any    >( entity,   ( property:any,   key:string,   entity:Entity     ) => typeof property == "string"         );
<boolean>_.every<any    >( entity,   ( property:any,   key:string,   entity:Entity     ) => typeof property == "string", window );
<boolean>_.every<any    >( entity,   "length"                                                                                    );
<boolean>_.every<any    >( entity,   {length:4}                                                                                  );
//endregion

//region filter
<string []>_.filter         ( "Rita"                                                                                    );
<string []>_.filter         ( "Rita",   ( char:string,    index:number, vector:string      ) => char == "R"             );
<string []>_.filter         ( "Rita",   ( char:string,    index:number, vector:string      ) => char == "R",     window );
<string []>_.filter         ( "Rita",   "length"                                                                        );
<string []>_.filter         ( "Rita",   {length:1}                                                                      );

<Entity[]>_.filter<Entity>( entities                                                                                  );
<Entity[]>_.filter<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.age > 18         );
<Entity[]>_.filter<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.age > 18, window );
<Entity[]>_.filter<Entity>( entities, "age"                                                                           );
<Entity[]>_.filter<Entity>( entities, {age   :19}                                                                     );

<any    []>_.filter<any    >( entity                                                                                    );
<any    []>_.filter<any    >( entity,   ( property:any,   key:string,   entity:Entity     ) => key == "name"           );
<any    []>_.filter<any    >( entity,   ( property:any,   key:string,   entity:Entity     ) => key == "name",   window );
<any    []>_.filter<any    >( entity,   "length"                                                                        );
<any    []>_.filter<any    >( entity,   {length:4}                                                                      );
//endregion

//region find
<string >_.find         ( "Rita"                                                                                    );
<string >_.find         ( "Rita",   ( char:string,    index:number, vector:string      ) => char == "R"             );
<string >_.find         ( "Rita",   ( char:string,    index:number, vector:string      ) => char == "R",     window );
<string >_.find         ( "Rita",   "length"                                                                        );
<string >_.find         ( "Rita",   {length:1}                                                                      );

<Entity>_.find<Entity>( entities                                                                                  );
<Entity>_.find<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.age > 18         );
<Entity>_.find<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.age > 18, window );
<Entity>_.find<Entity>( entities, "age"                                                                           );
<Entity>_.find<Entity>( entities, {age   :19}                                                                     );

<any    >_.find<any    >( entity                                                                                    );
<any    >_.find<any    >( entity,   ( property:any,   key:string,   entity:Entity     ) => key == "name"           );
<any    >_.find<any    >( entity,   ( property:any,   key:string,   entity:Entity     ) => key == "name",   window );
<any    >_.find<any    >( entity,   "length"                                                                        );
<any    >_.find<any    >( entity,   {length:4}                                                                      );
//endregion

//region findLast
<string >_.findLast         ( "Rita"                                                                                    );
<string >_.findLast         ( "Rita",   ( char:string,    index:number, vector:string      ) => char == "R"             );
<string >_.findLast         ( "Rita",   ( char:string,    index:number, vector:string      ) => char == "R",     window );
<string >_.findLast         ( "Rita",   "length"                                                                        );
<string >_.findLast         ( "Rita",   {length:1}                                                                      );

<Entity>_.findLast<Entity>( entities                                                                                  );
<Entity>_.findLast<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.age > 18         );
<Entity>_.findLast<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.age > 18, window );
<Entity>_.findLast<Entity>( entities, "age"                                                                           );
<Entity>_.findLast<Entity>( entities, {age   :19}                                                                     );

<any    >_.findLast<any    >( entity                                                                                    );
<any    >_.findLast<any    >( entity,   ( property:any,   key:string,   entity:Entity     ) => key == "name"           );
<any    >_.findLast<any    >( entity,   ( property:any,   key:string,   entity:Entity     ) => key == "name",   window );
<any    >_.findLast<any    >( entity,   "length"                                                                        );
<any    >_.findLast<any    >( entity,   {length:4}                                                                      );
//endregion

//region forEach
<string   >_.forEach         ( "Rita"                                                                                               );
<string   >_.forEach         ( "Rita",   ( char:string,    index:number, vector:string      ) => console.log(char)                  );
<string   >_.forEach         ( "Rita",   ( char:string,    index:number, vector:string      ) => console.log(char),          window );

<Entity[]>_.forEach<Entity>( entities                                                                                             );
<Entity[]>_.forEach<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => console.log(entity.name)           );
<Entity[]>_.forEach<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => console.log(entity.name),   window );

<Entity  >_.forEach<any    >( entity                                                                                               );
<Entity  >_.forEach<any    >( entity,   ( property:any,   key:string,   entity:Entity     ) => console.log(key, property)         );
<Entity  >_.forEach<any    >( entity,   ( property:any,   key:string,   entity:Entity     ) => console.log(key, property), window );
//endregion

//region forEachRight
<string   >_.forEachRight         ( "Rita"                                                                                               );
<string   >_.forEachRight         ( "Rita",   ( char:string,    index:number, vector:string      ) => console.log(char)                  );
<string   >_.forEachRight         ( "Rita",   ( char:string,    index:number, vector:string      ) => console.log(char),          window );

<Entity[]>_.forEachRight<Entity>( entities                                                                                             );
<Entity[]>_.forEachRight<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => console.log(entity.name)           );
<Entity[]>_.forEachRight<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => console.log(entity.name),   window );

<Entity  >_.forEachRight<any    >( entity                                                                                               );
<Entity  >_.forEachRight<any    >( entity,   ( property:any,   key:string,   entity:Entity     ) => console.log(key, property)         );
<Entity  >_.forEachRight<any    >( entity,   ( property:any,   key:string,   entity:Entity     ) => console.log(key, property), window );
//endregion

//region groupBy
<_.Dictionary<string []>>_.groupBy         ( "Rita"                                                                                    );
<_.Dictionary<string []>>_.groupBy         ( "Rita",   ( char:string,    index:number, vector:string      ) => char == "R"             );
<_.Dictionary<string []>>_.groupBy         ( "Rita",   ( char:string,    index:number, vector:string      ) => char == "R",     window );
<_.Dictionary<string []>>_.groupBy         ( "Rita",   "length"                                                                        );
<_.Dictionary<string []>>_.groupBy         ( "Rita",   {length:1}                                                                      );

<_.Dictionary<Entity[]>>_.groupBy<Entity>( entities                                                                                  );
<_.Dictionary<Entity[]>>_.groupBy<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.age > 18         );
<_.Dictionary<Entity[]>>_.groupBy<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.age > 18, window );
<_.Dictionary<Entity[]>>_.groupBy<Entity>( entities, "age"                                                                           );
<_.Dictionary<Entity[]>>_.groupBy<Entity>( entities, {age   :19}                                                                     );

<_.Dictionary<any    []>>_.groupBy<any    >( entity                                                                                    );
<_.Dictionary<any    []>>_.groupBy<any    >( entity,   ( property:any,   key:string,   entity:Entity     ) => key == "name"           );
<_.Dictionary<any    []>>_.groupBy<any    >( entity,   ( property:any,   key:string,   entity:Entity     ) => key == "name",   window );
<_.Dictionary<any    []>>_.groupBy<any    >( entity,   "length"                                                                        );
<_.Dictionary<any    []>>_.groupBy<any    >( entity,   {length:4}                                                                      );
//endregion

//region indexBy
<_.Dictionary<string >>_.indexBy         ( "Rita"                                                                                    );
<_.Dictionary<string >>_.indexBy         ( "Rita",   ( char:string,    index:number, vector:string      ) => char == "R"             );
<_.Dictionary<string >>_.indexBy         ( "Rita",   ( char:string,    index:number, vector:string      ) => char == "R",     window );
<_.Dictionary<string >>_.indexBy         ( "Rita",   "length"                                                                        );
<_.Dictionary<string >>_.indexBy         ( "Rita",   {length:1}                                                                      );

<_.Dictionary<Entity>>_.indexBy<Entity>( entities                                                                                  );
<_.Dictionary<Entity>>_.indexBy<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.age > 18         );
<_.Dictionary<Entity>>_.indexBy<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.age > 18, window );
<_.Dictionary<Entity>>_.indexBy<Entity>( entities, "age"                                                                           );
<_.Dictionary<Entity>>_.indexBy<Entity>( entities, {age   :19}                                                                     );

<_.Dictionary<any    >>_.indexBy<any    >( entity                                                                                    );
<_.Dictionary<any    >>_.indexBy<any    >( entity,   ( property:any,   key:string,   entity:Entity     ) => key == "name"           );
<_.Dictionary<any    >>_.indexBy<any    >( entity,   ( property:any,   key:string,   entity:Entity     ) => key == "name",   window );
<_.Dictionary<any    >>_.indexBy<any    >( entity,   "length"                                                                        );
<_.Dictionary<any    >>_.indexBy<any    >( entity,   {length:4}                                                                      );
//endregion

//region invoke
<any   []>_.invoke                ( "Rita",   "charAt"                                                                               );
<any   []>_.invoke                ( "Rita",   "charAt",                                                                            0 );
<any   []>_.invoke                ( "Rita",   function(                  ){ var c:string = this; return c.charAt(   0         ) }    );
<any   []>_.invoke                ( "Rita",   function( position:number  ){ var c:string = this; return c.charAt(   position  ) }, 0 );
<string[]>_.invoke<        string>( "Rita",   function(                  ){ var c:string = this; return c.charAt(   0         ) }    );
<string[]>_.invoke<        string>( "Rita",   function( position:number  ){ var c:string = this; return c.charAt(   position  ) }, 0 );

<any   []>_.invoke<number        >( [1, 2],   "toFixed"                                                                              );
<any   []>_.invoke<number        >( [1, 2],   "toFixed",                                                                           4 );
<any   []>_.invoke<number        >( [1, 2],   function(                  ){ var n:number = this; return n.toFixed(  4         ) }    );
<any   []>_.invoke<number        >( [1, 2],   function( precision:number ){ var n:number = this; return n.toFixed(  precision ) }, 4 );
<string[]>_.invoke<number, string>( [1, 2],   function(                  ){ var n:number = this; return n.toFixed(  4         ) }    );
<string[]>_.invoke<number, string>( [1, 2],   function( precision:number ){ var n:number = this; return n.toFixed(  precision ) }, 4 );

<any   []>_.invoke<number        >( {age:19}, "toString"                                                                             );
<any   []>_.invoke<number        >( {age:19}, "toString",                                                                          2 );
<any   []>_.invoke<number        >( {age:19}, function(                  ){ var p:number = this; return p.toString( 2         ) }    );
<any   []>_.invoke<number        >( {age:19}, function( radix:number     ){ var p:number = this; return p.toString( radix     ) }, 2 );
<string[]>_.invoke<number, string>( {age:19}, function(                  ){ var p:number = this; return p.toString( 2         ) }    );
<string[]>_.invoke<number, string>( {age:19}, function( radix:number     ){ var p:number = this; return p.toString( radix     ) }, 2 );
//endregion

//region map
<string []>_.map                  ( "Rita"                                                                                          );
<any    []>_.map                  ( "Rita",   ( char:string,    index:number, vector:string      ) => char == "R"                   );
<any    []>_.map                  ( "Rita",   ( char:string,    index:number, vector:string      ) => char == "R",           window );
<boolean[]>_.map<         boolean>( "Rita",   ( char:string,    index:number, vector:string      ) => char == "R"                   );
<boolean[]>_.map<         boolean>( "Rita",   ( char:string,    index:number, vector:string      ) => char == "R",           window );
<any    []>_.map                  ( "Rita",   "length"                                                                              );
<boolean[]>_.map                  ( "Rita",   {length:1}                                                                            );

<Entity[]>_.map<Entity         >( entities                                                                                        );
<any    []>_.map<Entity         >( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita"         );
<any    []>_.map<Entity         >( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita", window );
<boolean[]>_.map<Entity, boolean>( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita"         );
<boolean[]>_.map<Entity, boolean>( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita", window );
<any    []>_.map<Entity         >( entities, "name"                                                                                );
<boolean[]>_.map<Entity         >( entities, {name  :"Rita"}                                                                       );

<any    []>_.map<any             >( entity                                                                                          );
<any    []>_.map<any             >( entity,   ( property:any,   key:string,   entity:Entity     ) => key == "name"                 );
<any    []>_.map<any             >( entity,   ( property:any,   key:string,   entity:Entity     ) => key == "name",         window );
<boolean[]>_.map<any,     boolean>( entity,   ( property:any,   key:string,   entity:Entity     ) => key == "name"                 );
<boolean[]>_.map<any,     boolean>( entity,   ( property:any,   key:string,   entity:Entity     ) => key == "name",         window );
<any    []>_.map<any             >( entity,   "length"                                                                              );
<boolean[]>_.map<any             >( entity,   {length:4}                                                                            );
//endregion

//region max
<string>_.max         ( "Rita"                                                                                          );
<string>_.max         ( "Rita",   ( char:string,    index:number, vector:string      ) => char == "R"                   );
<string>_.max         ( "Rita",   ( char:string,    index:number, vector:string      ) => char == "R",           window );
<string>_.max         ( "Rita",   "length"                                                                              );
<string>_.max         ( "Rita",   {length:1}                                                                            );

<any   >_.max<Entity>( entities                                                                                        );
<any   >_.max<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita"         );
<any   >_.max<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita", window );
<any   >_.max<Entity>( entities, "length"                                                                              );
<any   >_.max<Entity>( entities, {length:1}                                                                            );

<any   >_.max<any    >( entity                                                                                          );
<any   >_.max<any    >( entity,   ( property:any,   key:string,   entity:Entity     ) => key == "name"                 );
<any   >_.max<any    >( entity,   ( property:any,   key:string,   entity:Entity     ) => key == "name",         window );
<any   >_.max<any    >( entity,   "length"                                                                              );
<any   >_.max<any    >( entity,   {length:4}                                                                            );
//endregion

//region min
<string>_.min         ( "Rita"                                                                                          );
<string>_.min         ( "Rita",   ( char:string,    index:number, vector:string      ) => char == "R"                   );
<string>_.min         ( "Rita",   ( char:string,    index:number, vector:string      ) => char == "R",           window );
<string>_.min         ( "Rita",   "length"                                                                              );
<string>_.min         ( "Rita",   {length:1}                                                                            );

<any   >_.min<Entity>( entities                                                                                        );
<any   >_.min<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita"         );
<any   >_.min<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita", window );
<any   >_.min<Entity>( entities, "length"                                                                              );
<any   >_.min<Entity>( entities, {length:1}                                                                            );

<any   >_.min<any    >( entity                                                                                          );
<any   >_.min<any    >( entity,   ( property:any,   key:string,   entity:Entity     ) => key == "name"                 );
<any   >_.min<any    >( entity,   ( property:any,   key:string,   entity:Entity     ) => key == "name",         window );
<any   >_.min<any    >( entity,   "length"                                                                              );
<any   >_.min<any    >( entity,   {length:4}                                                                            );
//endregion

//region pluck
<any[]>_.pluck( "Rita",   "length" );
<any[]>_.pluck( entities, "name"   );
<any[]>_.pluck( entity,   "name"   );
//endregion

//region reduce
<string>_.reduce                 ( "Rita"                                                                                                                          );
<any   >_.reduce                 ( "Rita", ( accumulator:any,    value:string, index:number, vector:string ) => value + accumulator                                );
<string>_.reduce<         string>( "Rita", ( accumulator:string, value:string, index:number, vector:string ) => value + accumulator                                );
<any   >_.reduce                 ( "Rita", ( accumulator:any,    value:string, index:number, vector:string ) => value + accumulator,                    ""         );
<any   >_.reduce                 ( "Rita", ( accumulator:any,    value:string, index:number, vector:string ) => value + accumulator,                    "", window );
<string>_.reduce<         string>( "Rita", ( accumulator:string, value:string, index:number, vector:string ) => value + accumulator,                    ""         );
<string>_.reduce<         string>( "Rita", ( accumulator:string, value:string, index:number, vector:string ) => value + accumulator,                    "", window );

<any   >_.reduce<number         >( [1, 2]                                                                                                                          );
<any   >_.reduce<number         >( [1, 2], ( accumulator:any,    value:number, index:number, array:number[] ) => value * accumulator                               );
<number>_.reduce<number,  number>( [1, 2], ( accumulator:number, value:number, index:number, array:number[] ) => value * accumulator                               );
<any   >_.reduce<number         >( [1, 2], ( accumulator:any,    value:number, index:number, array:number[] ) => value * accumulator,                   0          );
<any   >_.reduce<number         >( [1, 2], ( accumulator:any,    value:number, index:number, array:number[] ) => value * accumulator,                   0,  window );
<number>_.reduce<number,  number>( [1, 2], ( accumulator:number, value:number, index:number, array:number[] ) => value * accumulator,                   0          );
<number>_.reduce<number,  number>( [1, 2], ( accumulator:number, value:number, index:number, array:number[] ) => value * accumulator,                   0,  window );

<any   >_.reduce<Entity        >( entity                                                                                                                          );
<any   >_.reduce<Entity        >( entity, ( accumulator:any,    value:any,    key:string,   entity:Entity ) => accumulator + ", " + value.toString()             );
<string>_.reduce<Entity, string>( entity, ( accumulator:string, value:any,    key:string,   entity:Entity ) => accumulator + ", " + value.toString()             );
<any   >_.reduce<Entity        >( entity, ( accumulator:any,    value:any,    key:string,   entity:Entity ) => accumulator + ", " + value.toString(), ""         );
<any   >_.reduce<Entity        >( entity, ( accumulator:any,    value:any,    key:string,   entity:Entity ) => accumulator + ", " + value.toString(), "", window );
<string>_.reduce<Entity, string>( entity, ( accumulator:string, value:any,    key:string,   entity:Entity ) => accumulator + ", " + value.toString(), ""         );
<string>_.reduce<Entity, string>( entity, ( accumulator:string, value:any,    key:string,   entity:Entity ) => accumulator + ", " + value.toString(), "", window );
//endregion

//region reduceRight
<string>_.reduceRight                 ( "Rita"                                                                                                                          );
<any   >_.reduceRight                 ( "Rita", ( accumulator:any,    value:string, index:number, vector:string ) => value + accumulator                                );
<string>_.reduceRight<         string>( "Rita", ( accumulator:string, value:string, index:number, vector:string ) => value + accumulator                                );
<any   >_.reduceRight                 ( "Rita", ( accumulator:any,    value:string, index:number, vector:string ) => value + accumulator,                    ""         );
<any   >_.reduceRight                 ( "Rita", ( accumulator:any,    value:string, index:number, vector:string ) => value + accumulator,                    "", window );
<string>_.reduceRight<         string>( "Rita", ( accumulator:string, value:string, index:number, vector:string ) => value + accumulator,                    ""         );
<string>_.reduceRight<         string>( "Rita", ( accumulator:string, value:string, index:number, vector:string ) => value + accumulator,                    "", window );

<any   >_.reduceRight<number         >( [1, 2]                                                                                                                          );
<any   >_.reduceRight<number         >( [1, 2], ( accumulator:any,    value:number, index:number, array:number[] ) => value * accumulator                               );
<number>_.reduceRight<number,  number>( [1, 2], ( accumulator:number, value:number, index:number, array:number[] ) => value * accumulator                               );
<any   >_.reduceRight<number         >( [1, 2], ( accumulator:any,    value:number, index:number, array:number[] ) => value * accumulator,                   0          );
<any   >_.reduceRight<number         >( [1, 2], ( accumulator:any,    value:number, index:number, array:number[] ) => value * accumulator,                   0,  window );
<number>_.reduceRight<number,  number>( [1, 2], ( accumulator:number, value:number, index:number, array:number[] ) => value * accumulator,                   0          );
<number>_.reduceRight<number,  number>( [1, 2], ( accumulator:number, value:number, index:number, array:number[] ) => value * accumulator,                   0,  window );

<any   >_.reduceRight<Entity        >( entity                                                                                                                          );
<any   >_.reduceRight<Entity        >( entity, ( accumulator:any,    value:any,    key:string,   entity:Entity ) => accumulator + ", " + value.toString()             );
<string>_.reduceRight<Entity, string>( entity, ( accumulator:string, value:any,    key:string,   entity:Entity ) => accumulator + ", " + value.toString()             );
<any   >_.reduceRight<Entity        >( entity, ( accumulator:any,    value:any,    key:string,   entity:Entity ) => accumulator + ", " + value.toString(), ""         );
<any   >_.reduceRight<Entity        >( entity, ( accumulator:any,    value:any,    key:string,   entity:Entity ) => accumulator + ", " + value.toString(), "", window );
<string>_.reduceRight<Entity, string>( entity, ( accumulator:string, value:any,    key:string,   entity:Entity ) => accumulator + ", " + value.toString(), ""         );
<string>_.reduceRight<Entity, string>( entity, ( accumulator:string, value:any,    key:string,   entity:Entity ) => accumulator + ", " + value.toString(), "", window );
//endregion

//region reject
<string []>_.reject         ( "Rita"                                                                                          );
<string []>_.reject         ( "Rita",   ( char:string,    index:number, vector:string      ) => char == "R"                   );
<string []>_.reject         ( "Rita",   ( char:string,    index:number, vector:string      ) => char == "R",           window );
<string []>_.reject         ( "Rita",   "length"                                                                              );
<string []>_.reject         ( "Rita",   {length :1}                                                                           );

<Entity[]>_.reject<Entity>( entities                                                                                        );
<Entity[]>_.reject<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita"         );
<Entity[]>_.reject<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita", window );
<Entity[]>_.reject<Entity>( entities, "blocked"                                                                             );
<Entity[]>_.reject<Entity>( entities, {blocked:true}                                                                        );

<any    []>_.reject<any    >( entity                                                                                          );
<any    []>_.reject<any    >( entity,   ( property:any,   key:string,   entity:Entity     ) => key == "name"                 );
<any    []>_.reject<any    >( entity,   ( property:any,   key:string,   entity:Entity     ) => key == "name",         window );
<any    []>_.reject<any    >( entity,   "length"                                                                              );
<any    []>_.reject<any    >( entity,   {length :4}                                                                           );
//endregion

//region sample
<string   >_.sample         ( "Rita"      );
<string []>_.sample         ( "Rita",   2 );

<Entity  >_.sample<Entity>( entities    );
<Entity[]>_.sample<Entity>( entities, 2 );

<any      >_.sample<any    >( entity      );
<any    []>_.sample<any    >( entity,   2 );
//endregion

//region shuffle
<string []>_.shuffle         ( "Rita"   );

<Entity[]>_.shuffle<Entity>( entities );

<any    []>_.shuffle<any    >( entity   );
//endregion

//region size
<number>_.size         ( "Rita"   );

<number>_.size<Entity>( entities );

<number>_.size<any    >( entity   );
//endregion

//region some
<boolean>_.some         ( "Rita"                                                                                          );
<boolean>_.some         ( "Rita",   ( char:string,    index:number, vector:string      ) => char == "R"                   );
<boolean>_.some         ( "Rita",   ( char:string,    index:number, vector:string      ) => char == "R",           window );
<boolean>_.some         ( "Rita",   "length"                                                                              );
<boolean>_.some         ( "Rita",   {length :1}                                                                           );

<boolean>_.some<Entity>( entities                                                                                        );
<boolean>_.some<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita"         );
<boolean>_.some<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.name == "Rita", window );
<boolean>_.some<Entity>( entities, "blocked"                                                                             );
<boolean>_.some<Entity>( entities, {blocked:true}                                                                        );

<boolean>_.some<any    >( entity                                                                                          );
<boolean>_.some<any    >( entity,   ( property:any,   key:string,   entity:Entity     ) => key == "name"                 );
<boolean>_.some<any    >( entity,   ( property:any,   key:string,   entity:Entity     ) => key == "name",         window );
<boolean>_.some<any    >( entity,   "length"                                                                              );
<boolean>_.some<any    >( entity,   {length :4}                                                                           );
//endregion

//region sortBy
<string []>_.sortBy         ( "Rita"                                                                                              );
<string []>_.sortBy         ( "Rita",   ( char:string,    index:number, vector:string      ) => char.charCodeAt(0)                );
<string []>_.sortBy         ( "Rita",   ( char:string,    index:number, vector:string      ) => char.charCodeAt(0),        window );
<string []>_.sortBy         ( "Rita",   "length"                                                                                  );
<string []>_.sortBy         ( "Rita",   {length :1}                                                                               );

<Entity[]>_.sortBy<Entity>( entities                                                                                            );
<Entity[]>_.sortBy<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.name.charCodeAt(0)         );
<Entity[]>_.sortBy<Entity>( entities, ( entity:Entity, index:number, entities:Entity[] ) => entity.name.charCodeAt(0), window );
<Entity[]>_.sortBy<Entity>( entities, "blocked"                                                                                 );
<Entity[]>_.sortBy<Entity>( entities, {blocked:true}                                                                            );

<any    []>_.sortBy<any    >( entity                                                                                              );
<any    []>_.sortBy<any    >( entity,   ( property:any,   key:string,   entity:Entity     ) => key.charCodeAt(0)                 );
<any    []>_.sortBy<any    >( entity,   ( property:any,   key:string,   entity:Entity     ) => key.charCodeAt(0),         window );
<any    []>_.sortBy<any    >( entity,   "length"                                                                                  );
<any    []>_.sortBy<any    >( entity,   {length :4}                                                                               );
//endregion

//region toArray
<string []>_.toArray         ( "Rita"   );

<Entity[]>_.toArray<Entity>( entities );

<any    []>_.toArray<any    >( entity   );
//endregion

//region where
<string []>_.where         ( "Rita",   {length:1}      );

<Entity[]>_.where<Entity>( entities, {name  :"Rita"} );

<any    []>_.where<any    >( entity,   {length:4}      );
//endregion

//endregion

//region Functions

//region after
<_.GenericFunction<any>>_.after(3, () => {console.log("after function")});
//endregion

//region bind
<_.GenericFunction<any>>_.bind( function( greeting:string ) { return greeting + " " + (this.name || " Anonymous"); }                   );
<_.GenericFunction<any>>_.bind( function( greeting:string ) { return greeting + " " + (this.name || " Anonymous"); }, entity           );
<_.GenericFunction<any>>_.bind( function( greeting:string ) { return greeting + " " + (this.name || " Anonymous"); }, entity, "Hello," );
//endregion

//region bindAll
<_.Dictionary<any>>_.bindAll<any>( entity          );
<_.Dictionary<any>>_.bindAll<any>( entity, "greet" );
//endregion

//region bindKey
<_.GenericFunction<any>>_.bindKey( entity, "greet"          );
<_.GenericFunction<any>>_.bindKey( entity, "greet", "Hello" );
//endregion

//region compose
<_.GenericFunction<any>>_.compose( ( n:number ) => n^2                    );
<_.GenericFunction<any>>_.compose( ( n:number ) => n^2, (n:number) => n*2 );
//endregion

//region curry
<_.GenericFunction<any>>_.curry( ( a:any, b:any, c:any ) => {console.log(a, b, c)}    );
<_.GenericFunction<any>>_.curry( ( a:any, b:any, c:any ) => {console.log(a, b, c)}, 2 );
//endregion

//region debounce
<_.GenericFunction<any>>_.debounce( () => {console.log("debounce function")}, 200                                              );
<_.GenericFunction<any>>_.debounce( () => {console.log("debounce function")}, 200, {leading:true, maxWait:300, trailing:false} );
//endregion

//region defer
<number>_.defer( ( name?:string ) => {console.log(name || " Anonymous")}         );
<number>_.defer( ( name?:string ) => {console.log(name || " Anonymous")}, "Rita" );
//endregion

//region delay
<number>_.delay( ( name?:string ) => {console.log(name || " Anonymous")}, 200         );
<number>_.delay( ( name?:string ) => {console.log(name || " Anonymous")}, 200, "Rita" );
//endregion

//region memoize
<_.GenericFunction<any>>_.memoize( ( n:number ) => Math.acos(n)                       );
<_.GenericFunction<any>>_.memoize( ( n:number ) => Math.acos(n), (value:any) => value );
//endregion

//region after
<_.GenericFunction<any>>_.once( () => {console.log("Once")} );
//endregion

//region partial
<_.GenericFunction<any>>_.partial( ( a:any, b:any, c:any ) => console.log(a, b, c)                );
<_.GenericFunction<any>>_.partial( ( a:any, b:any, c:any ) => console.log(a, b, c), "a"           );
<_.GenericFunction<any>>_.partial( ( a:any, b:any, c:any ) => console.log(a, b, c), "a", "b"      );
<_.GenericFunction<any>>_.partial( ( a:any, b:any, c:any ) => console.log(a, b, c), "a", "b", "c" );
//endregion

//region partialRight
<_.GenericFunction<any>>_.partialRight( ( a:any, b:any, c:any ) => console.log(a, b, c)                );
<_.GenericFunction<any>>_.partialRight( ( a:any, b:any, c:any ) => console.log(a, b, c), "c"           );
<_.GenericFunction<any>>_.partialRight( ( a:any, b:any, c:any ) => console.log(a, b, c), "c", "b"      );
<_.GenericFunction<any>>_.partialRight( ( a:any, b:any, c:any ) => console.log(a, b, c), "c", "b", "a" );
//endregion

//region throttle
<_.GenericFunction<any>>_.throttle( () => {console.log("throttle function")}, 200                                 );
<_.GenericFunction<any>>_.throttle( () => {console.log("throttle function")}, 200, {leading:true, trailing:false} );
//endregion

//region wrap
<_.GenericFunction<any>>_.wrap( ( value:any ) => value, ( wrapped:{( value:any ):any}, value:any ) => wrapped(value.toString()));
//endregion

//endregion

//region Objects

//region assign
<_.Dictionary<any>>_.assign( {name:"Rita"}                                                                                                      );
<_.Dictionary<any>>_.assign( {name:"Rita"}, {age:19}                                                                                            );
<_.Dictionary<any>>_.assign( {name:"Rita"}, {age:19}, {blocked:false}                                                                           );
<_.Dictionary<any>>_.assign( {name:"Rita"},                            (objectValue:any, sourceValue:any) => objectValue || sourceValue         );
<_.Dictionary<any>>_.assign( {name:"Rita"}, {age:19},                  (objectValue:any, sourceValue:any) => objectValue || sourceValue         );
<_.Dictionary<any>>_.assign( {name:"Rita"}, {age:19}, {blocked:false}, (objectValue:any, sourceValue:any) => objectValue || sourceValue         );
<_.Dictionary<any>>_.assign( {name:"Rita"},                            (objectValue:any, sourceValue:any) => objectValue || sourceValue, window );
<_.Dictionary<any>>_.assign( {name:"Rita"}, {age:19},                  (objectValue:any, sourceValue:any) => objectValue || sourceValue, window );
<_.Dictionary<any>>_.assign( {name:"Rita"}, {age:19}, {blocked:false}, (objectValue:any, sourceValue:any) => objectValue || sourceValue, window );
//endregion

//region clone
<Entity>_.clone<Entity         >( entity                                         );
<Entity>_.clone<Entity         >( entity, true                                   );
<any    >_.clone<Entity         >( entity, true, (value:Entity) => value         );
<any    >_.clone<Entity         >( entity, true, (value:Entity) => value, window );
<Entity>_.clone<Entity, Entity>( entity, true, (value:Entity) => value         );
<Entity>_.clone<Entity, Entity>( entity, true, (value:Entity) => value, window );
<any    >_.clone<Entity         >( entity,       (value:Entity) => value         );
<any    >_.clone<Entity         >( entity,       (value:Entity) => value, window );
<Entity>_.clone<Entity, Entity>( entity,       (value:Entity) => value         );
<Entity>_.clone<Entity, Entity>( entity,       (value:Entity) => value, window );
//endregion

//region cloneDeep
<Entity>_.cloneDeep<Entity         >( entity                                   );
<any    >_.cloneDeep<Entity         >( entity, (value:Entity) => value         );
<any    >_.cloneDeep<Entity         >( entity, (value:Entity) => value, window );
<Entity>_.cloneDeep<Entity, Entity>( entity, (value:Entity) => value         );
<Entity>_.cloneDeep<Entity, Entity>( entity, (value:Entity) => value, window );
//endregion

//region create
<_.Dictionary<any>>_.create( entity                     );
<_.Dictionary<any>>_.create( entity, {hairColor:"foxy"} );
//endregion

//region defaults
<_.Dictionary<any>>_.defaults( entity                          );
<_.Dictionary<any>>_.defaults( entity, {name:"Cage"}           );
<_.Dictionary<any>>_.defaults( entity, {name:"Cage"}, {age:22} );
//endregion

//region findKey
<string>_.findKey     ( entity                                                                                );
<string>_.findKey<any>( entity, ( value:any, key:string, entity:Entity ) => typeof value == "string"         );
<string>_.findKey<any>( entity, ( value:any, key:string, entity:Entity ) => typeof value == "string", window );
<string>_.findKey     ( entity, "length"                                                                      );
<string>_.findKey     ( entity, {length:4}                                                                    );
//endregion

//region findLastKey
<string>_.findLastKey     ( entity                                                                                );
<string>_.findLastKey<any>( entity, ( value:any, key:string, entity:Entity ) => typeof value == "string"         );
<string>_.findLastKey<any>( entity, ( value:any, key:string, entity:Entity ) => typeof value == "string", window );
<string>_.findLastKey     ( entity, "length"                                                                      );
<string>_.findLastKey     ( entity, {length:4}                                                                    );
//endregion

//region forIn
<_.Dictionary<any>>_.forIn<any>( entity                                                                          );
<_.Dictionary<any>>_.forIn<any>( entity, ( value:any, key:string, entity:Entity ) => console.log(value)         );
<_.Dictionary<any>>_.forIn<any>( entity, ( value:any, key:string, entity:Entity ) => console.log(value), window );
//endregion

//region forInRight
<_.Dictionary<any>>_.forInRight<any>( entity                                                                          );
<_.Dictionary<any>>_.forInRight<any>( entity, ( value:any, key:string, entity:Entity ) => console.log(value)         );
<_.Dictionary<any>>_.forInRight<any>( entity, ( value:any, key:string, entity:Entity ) => console.log(value), window );
//endregion

//region forOwn
<_.Dictionary<any>>_.forOwn<any>( entity                                                                          );
<_.Dictionary<any>>_.forOwn<any>( entity, ( value:any, key:string, entity:Entity ) => console.log(value)         );
<_.Dictionary<any>>_.forOwn<any>( entity, ( value:any, key:string, entity:Entity ) => console.log(value), window );
//endregion

//region forOwnRight
<_.Dictionary<any>>_.forOwnRight<any>( entity                                                                          );
<_.Dictionary<any>>_.forOwnRight<any>( entity, ( value:any, key:string, entity:Entity ) => console.log(value)         );
<_.Dictionary<any>>_.forOwnRight<any>( entity, ( value:any, key:string, entity:Entity ) => console.log(value), window );
//endregion

//region functions
<string[]>_.functions( entity );
//endregion

//region has
<boolean>_.has( entity, "name");
//endregion

//region invert
<_.Dictionary<string>>_.invert( entity );
//endregion

//region isArguments
<boolean>_.isArguments( entity );
//endregion

//region isArray
<boolean>_.isArray( entities );
//endregion

//region isDate
<boolean>_.isDate( new Date() );
//endregion

//region isElement
<boolean>_.isElement( document.body );
//endregion

//region isEmpty
<boolean>_.isEmpty( "" );
//endregion

//region isEqual
<boolean>_.isEqual<Entity         >( entity, entity, ( a:Entity, b:any     ) => a.name == b              );
<boolean>_.isEqual<Entity         >( entity, entity, ( a:Entity, b:any     ) => a.name == b,      window );
<boolean>_.isEqual<Entity, Entity>( entity, entity, ( a:Entity, b:Entity ) => a.name == b.name         );
<boolean>_.isEqual<Entity, Entity>( entity, entity, ( a:Entity, b:Entity ) => a.name == b.name, window );
//endregion

//region isFinite
<boolean>_.isFinite( Infinity );
//endregion

//region isFunction
<boolean>_.isFunction( function(){} );
//endregion

//region isNaN
<boolean>_.isNaN( NaN );
//endregion

//region isNull
<boolean>_.isNull( null );
//endregion

//region isNumber
<boolean>_.isNumber( 200 );
//endregion

//region isObject
<boolean>_.isObject( entity );
//endregion

//region isPlainObject
<boolean>_.isPlainObject( {name:"Rita"} );
//endregion

//region isRegExp
<boolean>_.isRegExp( /regexp/i );
//endregion

//region isString
<boolean>_.isString( "Rita" );
//endregion

//region isUndefined
<boolean>_.isUndefined( undefined );
//endregion

//region keys
<string[]>_.keys( entity );
//endregion

//region mapValues
<_.Dictionary<any    >>_.mapValues<any         >( entity                                                                    );
<_.Dictionary<any    >>_.mapValues<any         >( entity, ( value:any, key:string, dictionary:Entity ) => ~~value          );
<_.Dictionary<any    >>_.mapValues<any         >( entity, ( value:any, key:string, dictionary:Entity ) => ~~value,  window );
<_.Dictionary<number >>_.mapValues<any,  number>( entity, ( value:any, key:string, dictionary:Entity ) => ~~value          );
<_.Dictionary<number >>_.mapValues<any,  number>( entity, ( value:any, key:string, dictionary:Entity ) => ~~value,  window );
<_.Dictionary<any    >>_.mapValues<any         >( entity, "length"                                                          );
<_.Dictionary<boolean>>_.mapValues<any         >( entity, {length:4}                                                        );
//endregion

//region merge
<_.Dictionary<any>>_.merge( entity                                         );
<_.Dictionary<any>>_.merge( entity, {hairColor:"foxy"}                     );
<_.Dictionary<any>>_.merge( entity, {hairColor:"foxy"}, {eyesColor:"blue"} );
//endregion

//region omit
<_.Dictionary<any>>_.omit<any>( entity                                                                                    );
<_.Dictionary<any>>_.omit<any>( entity, ( value:any, key:string, dictionary:Entity ) => typeof value != "string"         );
<_.Dictionary<any>>_.omit<any>( entity, ( value:any, key:string, dictionary:Entity ) => typeof value != "string", window );
<_.Dictionary<any>>_.omit<any>( entity,  "age"                                                                            );
<_.Dictionary<any>>_.omit<any>( entity,  "age",  "blocked"                                                                );
<_.Dictionary<any>>_.omit<any>( entity, ["age"], "blocked"                                                                );
<_.Dictionary<any>>_.omit<any>( entity, ["age",  "blocked"]                                                               );
//endregion

//region pairs
<any[][]>_.pairs( entity );
//endregion

//region pick
<_.Dictionary<any>>_.pick<any>( entity                                                                                    );
<_.Dictionary<any>>_.pick<any>( entity, ( value:any, key:string, dictionary:Entity ) => typeof value != "string"         );
<_.Dictionary<any>>_.pick<any>( entity, ( value:any, key:string, dictionary:Entity ) => typeof value != "string", window );
<_.Dictionary<any>>_.pick<any>( entity,  "name"                                                                           );
<_.Dictionary<any>>_.pick<any>( entity,  "name",  "age"                                                                   );
<_.Dictionary<any>>_.pick<any>( entity, ["name"], "age"                                                                   );
<_.Dictionary<any>>_.pick<any>( entity, ["name",  "age"]                                                                  );
//endregion

//region transform
<Entity[]           >_.transform<Entity                      >( entities                                                                                                                                             );
<any    []           >_.transform<Entity                      >( entities, ( accumulator:any,                  value:Entity, index:number, array:Entity[]              ) => accumulator.push(value.age)             );
<number []           >_.transform<Entity, number              >( entities, ( accumulator:number[],             value:Entity, index:number, array:Entity[]              ) => accumulator.push(value.age)             );
<any    []           >_.transform<Entity                      >( entities, ( accumulator:any,                  value:Entity, index:number, array:Entity[]              ) => accumulator.push(value.age), []         );
<any    []           >_.transform<Entity                      >( entities, ( accumulator:any,                  value:Entity, index:number, array:Entity[]              ) => accumulator.push(value.age), [], window );
<number []           >_.transform<Entity, number[]            >( entities, ( accumulator:number[],             value:Entity, index:number, array:Entity[]              ) => accumulator.push(value.age), []         );
<number []           >_.transform<Entity, number[]            >( entities, ( accumulator:number[],             value:Entity, index:number, array:Entity[]              ) => accumulator.push(value.age), [], window );

<_.Dictionary<any   >>_.transform<any                          >( entity                                                                                                                                               );
<_.Dictionary<any   >>_.transform<any                          >( entity,   ( accumulator:_.Dictionary<any   >, value:any,     key:string,   dictionary:_.Dictionary<any> ) => accumulator[key] = ~~value              );
<_.Dictionary<number>>_.transform<any,     number              >( entity,   ( accumulator:_.Dictionary<number>, value:any,     key:string,   dictionary:_.Dictionary<any> ) => accumulator[key] = ~~value              );
<_.Dictionary<any   >>_.transform<any                          >( entity,   ( accumulator:_.Dictionary<any   >, value:any,     key:string,   dictionary:_.Dictionary<any> ) => accumulator[key] = ~~value,  {}         );
<_.Dictionary<any   >>_.transform<any                          >( entity,   ( accumulator:_.Dictionary<any   >, value:any,     key:string,   dictionary:_.Dictionary<any> ) => accumulator[key] = ~~value,  {}, window );
<_.Dictionary<number>>_.transform<any,     _.Dictionary<number>>( entity,   ( accumulator:_.Dictionary<number>, value:any,     key:string,   dictionary:_.Dictionary<any> ) => accumulator[key] = ~~value,  {}         );
<_.Dictionary<number>>_.transform<any,     _.Dictionary<number>>( entity,   ( accumulator:_.Dictionary<number>, value:any,     key:string,   dictionary:_.Dictionary<any> ) => accumulator[key] = ~~value,  {}, window );
//endregion

//region values
<any[]>_.values( entity );
//endregion

//endregion

//region Properties         --checked-not --adequate-not

//region VERSION
var a:any = <string>_.VERSION;
//endregion

//region support
var a:any = <_.Support>_.support;
var a:any = <boolean  >_.support.argsClass;
var a:any = <boolean  >_.support.argsObject;
var a:any = <boolean  >_.support.enumErrorProps;
var a:any = <boolean  >_.support.enumPrototypes;
var a:any = <boolean  >_.support.funcDecomp;
var a:any = <boolean  >_.support.funcNames;
var a:any = <boolean  >_.support.nonEnumArgs;
var a:any = <boolean  >_.support.nonEnumShadows;
var a:any = <boolean  >_.support.ownLast;
var a:any = <boolean  >_.support.spliceObjects;
var a:any = <boolean  >_.support.unindexedChars;
//endregion

//region templateSettings   --checked-not --adequate-not
var a:any = <_.TemplateSettings       >_.templateSettings;
var a:any = <RegExp                   >_.templateSettings.escape;
var a:any = <RegExp                   >_.templateSettings.evaluate;
var a:any = <_.TemplateSettingsImports>_.templateSettings.imports;
var a:any = <_.Ctor                   >_.templateSettings.imports._;
var a:any = <RegExp                   >_.templateSettings.interpolate;
var a:any = <string                   >_.templateSettings.sourceURL;
var a:any = <string                   >_.templateSettings.variable;
//endregion

//endregion

//region Utilities

//region now
<number>_.now();
//endregion

//region constant
<_.ConstantFunction<Entity>>_.constant<Entity>( entity );
//endregion

//region createCallback
<_.IdentityFunction<any>>_.createCallback(                         );
<_.GenericFunction< any>>_.createCallback( function(){}            );
<_.GenericFunction< any>>_.createCallback( function(){}, window    );
<_.GenericFunction< any>>_.createCallback( function(){}, window, 1 );
<_.GenericFunction< any>>_.createCallback( function(){}, window, 2 );
<_.GenericFunction< any>>_.createCallback( function(){}, window, 3 );
<_.GenericFunction< any>>_.createCallback( function(){}, window, 4 );
<_.PropertyFunction<any>>_.createCallback( "name"                  );
<_.WhereFunction<   any>>_.createCallback( {name:"Rita"}           );
//endregion

//region escape
<string>_.escape( "Rita's home" );
//endregion

//region identity
<Entity>_.identity<Entity>( entity );
//endregion

//region mixin
<void>_.mixin( function(){}, {toLower:( name:string ) => name.toLowerCase()}                );
<void>_.mixin( function(){}, {toLower:( name:string ) => name.toLowerCase()}, false         );
<void>_.mixin( function(){}, {toLower:( name:string ) => name.toLowerCase()}, {chain:false} );

<void>_.mixin(               {toLower:( name:string ) => name.toLowerCase()}                );
<void>_.mixin(               {toLower:( name:string ) => name.toLowerCase()}, false         );
<void>_.mixin(               {toLower:( name:string ) => name.toLowerCase()}, {chain:false} );
<void>_.mixin( entity,       {toLower:( name:string ) => name.toLowerCase()}                );
<void>_.mixin( entity,       {toLower:( name:string ) => name.toLowerCase()}, false         );
<void>_.mixin( entity,       {toLower:( name:string ) => name.toLowerCase()}, {chain:false} );
//endregion

//region noConflict
<_.Ctor>_.noConflict();
//endregion

//region noop
<void>_.noop();
//endregion

//region parseInt
<number>_.parseInt( "200"    );
<number>_.parseInt( "200", 3 );
//endregion

//region property
<_.PropertyFunction<string>>_.property<string>( "name" );
//endregion

//region random
<number>_.random(    10       );
<number>_.random( 5, 10       );
<number>_.random( 5, 10, true );
//endregion

//region result
<string>_.result<string>( {name:"Rita"}, "name" );
//endregion

//region runInContext
<_.Ctor>_.runInContext(        );
<_.Ctor>_.runInContext( window );
//endregion

//region template
<_.PartialTemplateFunction<any>>_.template<any>( "hello <%= name %>"                          );
<string                        >_.template     ( "hello <%= name %>", entity                  );
<string                        >_.template     ( "hello <%= name %>", entity, templateOptions );
//endregion

//region times
<Entity[]>_.times<Entity>( 3, () => entity         );
<Entity[]>_.times<Entity>( 3, () => entity, window );
//endregion

//region unescape
<string>_.unescape( "Rita&#39;s home" );
//endregion

//region uniqueId
<string>_.uniqueId(           );
<string>_.uniqueId( "prefix_" );
//endregion

//endregion

//endregion