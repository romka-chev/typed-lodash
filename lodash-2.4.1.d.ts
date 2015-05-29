declare function _                    (                       ):_._EmptyWrapper;
declare function _                    ( value:  number        ):_._NumberWrapper;
declare function _                    ( value:  string        ):_._StringWrapper;
declare function _<P                 >( value:  Array<     P> ):_._ArrayWrapper<        P  >;
declare function _<P                 >( value:_.Dictionary<P> ):_._DictionaryWrapper<   P  >;
declare function _<W extends Function>( value:  Function      ):_._FunctionWrapper<  W     >;
declare function _<W                 >( value:  W             ):_._Wrapper<          W, any>;

declare module _{

    //region Static

    //region Interfaces

    interface Dictionary<T>{
        [key:string]:T;
    }

    //region FunctionWithOneArgument
    interface FunctionWithOneArgument<V, R>                                       { ( value?:V ):R; }
    interface ValueIterator<          V, R> extends FunctionWithOneArgument<V, R> { ( value?:V ):R; }
    interface CloneFunction<          V, R> extends FunctionWithOneArgument<V, R> { ( value?:V ):R; }
    //endregion

    //region FunctionWithTwoArguments
    interface FunctionWithTwoArguments<A, B, R>                                           { ( a?:A, b?:B ):R; }
    interface ComparisonFunction<      A, B, R> extends FunctionWithTwoArguments<A, B, R> { ( a?:A, b?:B ):R; }
    //endregion

    //region Iterators

    //region FunctionWithThreeArguments
    interface FunctionWithThreeArguments<       V, I, C,  R>                                                                          { (                 value?:V,      index?:I,      collection?:C              ):R; }
    interface             StringIterator<                 R> extends FunctionWithThreeArguments<   string, number, string,         R> { (                 char ?:string, index?:number, vector    ?:string         ):R; }
    interface             ArrayIterator<        V,        R> extends FunctionWithThreeArguments<   V,      number, Array<     V >, R> { (                 value?:V,      index?:number, array     ?:Array<      V> ):R; }
    interface             DictionaryIterator<   V,        R> extends FunctionWithThreeArguments<   V,      string, Dictionary<V >, R> { (                 value?:V,      key  ?:string, dictionary?:Dictionary< V> ):R; }
    //endregion

    //region FunctionWithFourArguments
    interface FunctionWithFourArguments<     A, V, I, C,  R>                                                                          { ( accumulator?:A, value?:V,      index?:I,      collection?:C              ):R; }
    interface AccumulatingStringIterator<    A,           R> extends FunctionWithFourArguments< A, string, number, string,         R> { ( accumulator?:A, value?:string, index?:number, vector    ?:string         ):R; }
    interface AccumulatingArrayIterator<     A, V,    AV, R> extends FunctionWithFourArguments< A, V,      number, Array<     AV>, R> { ( accumulator?:A, value?:V,      index?:number, array     ?:Array<     AV> ):R; }
    interface AccumulatingDictionaryIterator<A, V,    DV, R> extends FunctionWithFourArguments< A, V,      string, Dictionary<DV>, R> { ( accumulator?:A, value?:V,      key  ?:string, dictionary?:Dictionary<DV> ):R; }
    //endregion

    //endregion

    //region Other
    interface ConstantFunction<R> { (         ):R; }
    interface IdentityFunction<V> { ( value:V ):V; }

    interface WrapperFunction<V, R> { ( value?:V, ...arguments:any[] ):R; }

    interface GenericFunction<   R> { ( ...arguments:any[] ):R; }
    interface CustomIterator<    R> { ( ...arguments:any[] ):R; }

    interface PropertyFunction<       DV> { ( dictionary:Dictionary<DV> ):DV;      }
    interface WhereFunction<          DV> { ( dictionary:Dictionary<DV> ):boolean; }
    interface PartialTemplateFunction<DV> { ( dictionary:Dictionary<DV> ):string;  }
    //endregion

    //region Options
    interface DebounceOptions {
        leading ?:boolean;
        maxWait ?:number;
        trailing?:boolean;
    }
    interface ThrottleOptions {
        leading ?:boolean;
        trailing?:boolean;
    }
    interface MixinOptions {
        chain?:boolean;
    }
    interface TemplateOptions {
        escape     ?:RegExp;
        evaluate   ?:RegExp;
        imports    ?:Object;
        interpolate?:RegExp;
        sourceURL  ?:string;
        variable   ?:string;
    }
    //endregion

    //region Properties
    interface Support{
        argsClass     :boolean;
        argsObject    :boolean;
        enumErrorProps:boolean;
        enumPrototypes:boolean;
        funcDecomp    :boolean;
        funcNames     :boolean;
        nonEnumArgs   :boolean;
        nonEnumShadows:boolean;
        ownLast       :boolean;
        spliceObjects :boolean;
        unindexedChars:boolean;
    }

    interface TemplateSettings{
        escape     :RegExp;
        evaluate   :RegExp;
        imports    :TemplateSettingsImports;
        interpolate:RegExp;
        sourceURL  :string;
        variable   :string;
    }

    interface TemplateSettingsImports{
        _:Ctor;
    }
    //endregion

    //endregion

    //region Arrays

    //region compact
    export function compact   ( vector:string   ):Array<string>;

    export function compact<T>( vector:Array<T> ):Array<T     >;
    //endregion

    //region difference
    export function difference   ( vector:string,   ...arrays:Array<any>[] ):Array<string>;

    export function difference<T>( vector:Array<T>, ...arrays:Array<any>[] ):Array<T     >;
    //endregion

    //region findIndex
    export function findIndex   ( vector:string                                                  ):number;
    export function findIndex   ( vector:string,   iterator:StringIterator<   any>, thisArg?:any ):number;
    export function findIndex   ( vector:string,   pluck   :string                               ):number;
    export function findIndex   ( vector:string,   where   :Dictionary<any>                      ):number;

    export function findIndex<T>( vector:Array<T>                                                ):number;
    export function findIndex<T>( vector:Array<T>, iterator:ArrayIterator< T, any>, thisArg?:any ):number;
    export function findIndex<T>( vector:Array<T>, pluck   :string                               ):number;
    export function findIndex<T>( vector:Array<T>, where   :Dictionary<any>                      ):number;
    //endregion

    //region findLastIndex
    export function findLastIndex   ( vector:string                                                  ):number;
    export function findLastIndex   ( vector:string,   iterator:StringIterator<   any>, thisArg?:any ):number;
    export function findLastIndex   ( vector:string,   pluck   :string                               ):number;
    export function findLastIndex   ( vector:string,   where   :Dictionary<any>                      ):number;

    export function findLastIndex<T>( vector:Array<T>                                                ):number;
    export function findLastIndex<T>( vector:Array<T>, iterator:ArrayIterator< T, any>, thisArg?:any ):number;
    export function findLastIndex<T>( vector:Array<T>, pluck   :string                               ):number;
    export function findLastIndex<T>( vector:Array<T>, where   :Dictionary<any>                      ):number;
    //endregion

    //region first
    export function first   ( vector:string                                                  ):string;
    export function first   ( vector:string,   iterator:StringIterator<   any>, thisArg?:any ):Array<string>;
    export function first   ( vector:string,   count   :number                               ):Array<string>;
    export function first   ( vector:string,   pluck   :string                               ):Array<string>;
    export function first   ( vector:string,   where   :Dictionary<any>                      ):Array<string>;

    export function first<T>( vector:Array<T>                                                ):T;
    export function first<T>( vector:Array<T>, iterator:ArrayIterator< T, any>, thisArg?:any ):Array<T     >;
    export function first<T>( vector:Array<T>, count   :number                               ):Array<T     >;
    export function first<T>( vector:Array<T>, pluck   :string                               ):Array<T     >;
    export function first<T>( vector:Array<T>, where   :Dictionary<any>                      ):Array<T     >;
    //endregion

    //region flatten
    export function flatten      ( vector:string                                                                    ):Array<string >;
    export function flatten      ( vector:string,   isShallow:boolean                                               ):Array<string >;
    export function flatten<   R>( vector:string,   isShallow:boolean, iterator:StringIterator<   R >, thisArg?:any ):Array<R      >;
    export function flatten      ( vector:string,   isShallow:boolean, pluck   :string                              ):Array<any    >;
    export function flatten      ( vector:string,   isShallow:boolean, where   :Dictionary<any>                     ):Array<boolean>;
    export function flatten<   R>( vector:string,                      iterator:StringIterator<   R >, thisArg?:any ):Array<R      >;
    export function flatten      ( vector:string,                      pluck   :string                              ):Array<any    >;
    export function flatten      ( vector:string,                      where   :Dictionary<any>                     ):Array<boolean>;

    export function flatten<T   >( vector:Array<T>                                                                  ):Array<any    >;
    export function flatten<T   >( vector:Array<T>, isShallow:boolean                                               ):Array<any    >;
    export function flatten<T   >( vector:Array<T>, isShallow:boolean, iterator:ArrayIterator<T, any>, thisArg?:any ):Array<any    >;
    export function flatten<T, R>( vector:Array<T>, isShallow:boolean, iterator:ArrayIterator<T, R  >, thisArg?:any ):Array<R      >;
    export function flatten<T   >( vector:Array<T>, isShallow:boolean, pluck   :string                              ):Array<any    >;
    export function flatten<T   >( vector:Array<T>, isShallow:boolean, where   :Dictionary<any>                     ):Array<boolean>;
    export function flatten<T   >( vector:Array<T>,                    iterator:ArrayIterator<T, any>, thisArg?:any ):Array<any    >;
    export function flatten<T, R>( vector:Array<T>,                    iterator:ArrayIterator<T, R  >, thisArg?:any ):Array<R      >;
    export function flatten<T   >( vector:Array<T>,                    pluck   :string                              ):Array<any    >;
    export function flatten<T   >( vector:Array<T>,                    where   :Dictionary<any>                     ):Array<boolean>;
    //endregion

    //region indexOf
    export function indexOf   ( vector:string,   value:any                         ):number;
    export function indexOf   ( vector:string,   value:any, fromIndex     :number  ):number;
    export function indexOf   ( vector:string,   value:any, isBinarySearch:boolean ):number;

    export function indexOf<T>( vector:Array<T>, value:any                         ):number;
    export function indexOf<T>( vector:Array<T>, value:any, fromIndex     :number  ):number;
    export function indexOf<T>( vector:Array<T>, value:any, isBinarySearch:boolean ):number;
    //endregion

    //region initial
    export function initial   ( vector:string                                                    ):Array<string>;
    export function initial   ( vector:string,   iterator  :StringIterator<   any>, thisArg?:any ):Array<string>;
    export function initial   ( vector:string,   exceptLast:number                               ):Array<string>;
    export function initial   ( vector:string,   pluck     :string                               ):Array<string>;
    export function initial   ( vector:string,   where     :Dictionary<any>                      ):Array<string>;

    export function initial<T>( vector:Array<T>                                                  ):Array<T     >;
    export function initial<T>( vector:Array<T>, iterator  :ArrayIterator< T, any>, thisArg?:any ):Array<T     >;
    export function initial<T>( vector:Array<T>, exceptLast:number                               ):Array<T     >;
    export function initial<T>( vector:Array<T>, pluck     :string                               ):Array<T     >;
    export function initial<T>( vector:Array<T>, where     :Dictionary<any>                      ):Array<T     >;
    //endregion

    //region intersection
    export function intersection<T>( array:Array<T>, ...arrays:Array<any>[] ):Array<T>;
    //endregion

    //region last
    export function last   ( vector:string                                                  ):string;
    export function last   ( vector:string,   iterator:StringIterator<   any>, thisArg?:any ):Array<string>;
    export function last   ( vector:string,   count   :number                               ):Array<string>;
    export function last   ( vector:string,   pluck   :string                               ):Array<string>;
    export function last   ( vector:string,   where   :Dictionary<any>                      ):Array<string>;

    export function last<T>( vector:Array<T>                                                ):T;
    export function last<T>( vector:Array<T>, iterator:ArrayIterator< T, any>, thisArg?:any ):Array<T     >;
    export function last<T>( vector:Array<T>, count   :number                               ):Array<T     >;
    export function last<T>( vector:Array<T>, pluck   :string                               ):Array<T     >;
    export function last<T>( vector:Array<T>, where   :Dictionary<any>                      ):Array<T     >;
    //endregion

    //region lastIndexOf
    export function lastIndexOf   ( vector:string,   value:any                   ):number;
    export function lastIndexOf   ( vector:string,   value:any, fromIndex:number ):number;

    export function lastIndexOf<T>( vector:Array<T>, value:any                   ):number;
    export function lastIndexOf<T>( vector:Array<T>, value:any, fromIndex:number ):number;
    //endregion

    //region pull
    export function pull<T>( array:Array<T>, ...values:any[] ):Array<T>;
    //endregion

    //region range
    export function range(               end:number              ):Array<number>;
    export function range( start:number, end:number              ):Array<number>;
    export function range( start:number, end:number, step:number ):Array<number>;
    //endregion

    //region remove
    export function remove<T>( array:Array<T>                                               ):Array<T>;
    export function remove<T>( array:Array<T>, iterator:ArrayIterator<T, any>, thisArg?:any ):Array<T>;
    export function remove<T>( array:Array<T>, pluck   :string                              ):Array<T>;
    export function remove<T>( array:Array<T>, where   :Dictionary<any>                     ):Array<T>;
    //endregion

    //region rest
    export function rest   ( vector:string                                                     ):Array<string>;
    export function rest   ( vector:string,   iterator   :StringIterator<   any>, thisArg?:any ):Array<string>;
    export function rest   ( vector:string,   exceptFirst:number                               ):Array<string>;
    export function rest   ( vector:string,   pluck      :string                               ):Array<string>;
    export function rest   ( vector:string,   where      :Dictionary<any>                      ):Array<string>;

    export function rest<T>( vector:Array<T>                                                   ):Array<T     >;
    export function rest<T>( vector:Array<T>, iterator   :ArrayIterator< T, any>, thisArg?:any ):Array<T     >;
    export function rest<T>( vector:Array<T>, exceptFirst:number                               ):Array<T     >;
    export function rest<T>( vector:Array<T>, pluck      :string                               ):Array<T     >;
    export function rest<T>( vector:Array<T>, where      :Dictionary<any>                      ):Array<T     >;
    //endregion

    //region sortedIndex
    export function sortedIndex   ( vector:string,   value:any                                                       ):number;
    export function sortedIndex   ( vector:string,   value:string, iterator:ValueIterator<string, any>, thisArg?:any ):number;
    export function sortedIndex   ( vector:string,   value:any,    iterator:ValueIterator<any,    any>, thisArg?:any ):number;
    export function sortedIndex   ( vector:string,   value:any,    pluck   :string                                   ):number;
    export function sortedIndex   ( vector:string,   value:any,    where   :Dictionary<any>                          ):number;

    export function sortedIndex<T>( vector:Array<T>, value:any                                                       ):number;
    export function sortedIndex<T>( vector:Array<T>, value:T,      iterator:ValueIterator<T,      any>, thisArg?:any ):number;
    export function sortedIndex<T>( vector:Array<T>, value:any,    iterator:ValueIterator<any,    any>, thisArg?:any ):number;
    export function sortedIndex<T>( vector:Array<T>, value:any,    pluck   :string                                   ):number;
    export function sortedIndex<T>( vector:Array<T>, value:any,    where   :Dictionary<any>                          ):number;
    //endregion

    //region union
    export function union<T>( ...arrays:Array<T>[] ):Array<T>;
    //endregion

    //region uniq
    export function uniq   ( vector:string                                                  ):Array<string>;
    export function uniq   ( vector:string,   iterator:StringIterator<   any>, thisArg?:any ):Array<string>;
    export function uniq   ( vector:string,   isSorted:boolean                              ):Array<string>;
    export function uniq   ( vector:string,   pluck   :string                               ):Array<string>;
    export function uniq   ( vector:string,   where   :Dictionary<any>                      ):Array<string>;

    export function uniq<T>( vector:Array<T>                                                ):Array<T     >;
    export function uniq<T>( vector:Array<T>, iterator:ArrayIterator< T, any>, thisArg?:any ):Array<T     >;
    export function uniq<T>( vector:Array<T>, isSorted:boolean                              ):Array<T     >;
    export function uniq<T>( vector:Array<T>, pluck   :string                               ):Array<T     >;
    export function uniq<T>( vector:Array<T>, where   :Dictionary<any>                      ):Array<T     >;
    //endregion

    //region without
    export function without   ( vector:string,   ...values:any[] ):Array<string>;

    export function without<T>( vector:Array<T>, ...values:any[] ):Array<T     >;
    //endregion

    //region xor
    export function xor<T>( ...arrays:Array<T>[] ):Array<T>;
    //endregion

    //region zip
    export function zip   ( ...vectors:string  [] ):Array<Array<string>>;
    export function zip<T>( ...vectors:Array<T>[] ):Array<Array<T     >>;
    export function zip   ( ...vectors:any     [] ):Array<Array<any   >>;/* any (Array | string) */
    //endregion

    //region zipObject
    export function zipObject   ( keys:string                          ):Dictionary<any   >;
    export function zipObject   ( keys:string,     values:string       ):Dictionary<string>;
    export function zipObject   ( keys:string,     values:Array<string>):Dictionary<string>;

    export function zipObject   ( keys:Array<any>                      ):Dictionary<any   >;
    export function zipObject   ( keys:Array<any>, values:string       ):Dictionary<string>;
    export function zipObject<T>( keys:Array<any>, values:Array<T     >):Dictionary<T     >;
    //endregion

    //endregion

    //region Chaining

    //region chain
    export function chain                    (                     ):_EmptyWrapper;
    export function chain                    ( value:number        ):_NumberWrapper;
    export function chain                    ( value:string        ):_StringWrapper;
    export function chain<P                 >( value:Array<     P> ):_ArrayWrapper<        P  >;
    export function chain<P                 >( value:Dictionary<P> ):_DictionaryWrapper<   P  >;
    export function chain<W extends Function>( value:Function      ):_FunctionWrapper<  W     >;
    export function chain<W                 >( value:W             ):_Wrapper<          W, any>;
    //endregion

    //region tap
    export function tap<T>(value:T, interceprtor:FunctionWithOneArgument<T, any>):T;
    //endregion

    //endregion

    //region Collection

    //region at
    export function at   ( collection:string,        ...index:number       [] ):Array<string>;
    export function at   ( collection:string,        ...index:Array<number>[] ):Array<string>;

    export function at<T>( collection:Array<     T>, ...index:number       [] ):Array<T     >;
    export function at<T>( collection:Array<     T>, ...index:Array<number>[] ):Array<T     >;

    export function at<T>( collection:Dictionary<T>, ...index:string       [] ):Array<T     >;
    export function at<T>( collection:Dictionary<T>, ...index:Array<string>[] ):Array<T     >;
    //endregion

    //region contains
    export function contains   ( collection:string,        target:any, fromIndex?:number ):boolean;

    export function contains<T>( collection:Array<     T>, target:any, fromIndex?:number ):boolean;

    export function contains<T>( collection:Dictionary<T>, target:any, fromIndex?:number ):boolean;
    //endregion

    //region countBy
    export function countBy   ( collection:string                                                           ):Dictionary<number>;
    export function countBy   ( collection:string,        iterator:StringIterator<       any>, thisArg?:any ):Dictionary<number>;
    export function countBy   ( collection:string,        pluck   :string                                   ):Dictionary<number>;
    export function countBy   ( collection:string,        where   :Dictionary<any>                          ):Dictionary<number>;

    export function countBy<T>( collection:Array<     T>                                                    ):Dictionary<number>;
    export function countBy<T>( collection:Array<     T>, iterator:ArrayIterator<     T, any>, thisArg?:any ):Dictionary<number>;
    export function countBy<T>( collection:Array<     T>, pluck   :string                                   ):Dictionary<number>;
    export function countBy<T>( collection:Array<     T>, where   :Dictionary<any>                          ):Dictionary<number>;

    export function countBy<T>( collection:Dictionary<T>                                                    ):Dictionary<number>;
    export function countBy<T>( collection:Dictionary<T>, iterator:DictionaryIterator<T, any>, thisArg?:any ):Dictionary<number>;
    export function countBy<T>( collection:Dictionary<T>, pluck   :string                                   ):Dictionary<number>;
    export function countBy<T>( collection:Dictionary<T>, where   :Dictionary<any>                          ):Dictionary<number>;
    //endregion

    //region every
    export function every   ( collection:string                                                           ):boolean;
    export function every   ( collection:string,        iterator:StringIterator<       any>, thisArg?:any ):boolean;
    export function every   ( collection:string,        pluck   :string                                   ):boolean;
    export function every   ( collection:string,        where   :Dictionary<any>                          ):boolean;

    export function every<T>( collection:Array<     T>                                                    ):boolean;
    export function every<T>( collection:Array<     T>, iterator:ArrayIterator<     T, any>, thisArg?:any ):boolean;
    export function every<T>( collection:Array<     T>, pluck   :string                                   ):boolean;
    export function every<T>( collection:Array<     T>, where   :Dictionary<any>                          ):boolean;

    export function every<T>( collection:Dictionary<T>                                                    ):boolean;
    export function every<T>( collection:Dictionary<T>, iterator:DictionaryIterator<T, any>, thisArg?:any ):boolean;
    export function every<T>( collection:Dictionary<T>, pluck   :string                                   ):boolean;
    export function every<T>( collection:Dictionary<T>, where   :Dictionary<any>                          ):boolean;
    //endregion

    //region filter
    export function filter   ( collection:string                                                           ):Array<string>;
    export function filter   ( collection:string,        iterator:StringIterator<       any>, thisArg?:any ):Array<string>;
    export function filter   ( collection:string,        pluck   :string                                   ):Array<string>;
    export function filter   ( collection:string,        where   :Dictionary<any>                          ):Array<string>;

    export function filter<T>( collection:Array<     T>                                                    ):Array<T     >;
    export function filter<T>( collection:Array<     T>, iterator:ArrayIterator<     T, any>, thisArg?:any ):Array<T     >;
    export function filter<T>( collection:Array<     T>, pluck   :string                                   ):Array<T     >;
    export function filter<T>( collection:Array<     T>, where   :Dictionary<any>                          ):Array<T     >;

    export function filter<T>( collection:Dictionary<T>                                                    ):Array<T     >;
    export function filter<T>( collection:Dictionary<T>, iterator:DictionaryIterator<T, any>, thisArg?:any ):Array<T     >;
    export function filter<T>( collection:Dictionary<T>, pluck   :string                                   ):Array<T     >;
    export function filter<T>( collection:Dictionary<T>, where   :Dictionary<any>                          ):Array<T     >;
    //endregion

    //region find
    export function find   ( collection:string                                                           ):string;
    export function find   ( collection:string,        iterator:StringIterator<       any>, thisArg?:any ):string;
    export function find   ( collection:string,        pluck   :string                                   ):string;
    export function find   ( collection:string,        where   :Dictionary<any>                          ):string;

    export function find<T>( collection:Array<     T>                                                    ):T;
    export function find<T>( collection:Array<     T>, iterator:ArrayIterator<     T, any>, thisArg?:any ):T;
    export function find<T>( collection:Array<     T>, pluck   :string                                   ):T;
    export function find<T>( collection:Array<     T>, where   :Dictionary<any>                          ):T;

    export function find<T>( collection:Dictionary<T>                                                    ):T;
    export function find<T>( collection:Dictionary<T>, iterator:DictionaryIterator<T, any>, thisArg?:any ):T;
    export function find<T>( collection:Dictionary<T>, pluck   :string                                   ):T;
    export function find<T>( collection:Dictionary<T>, where   :Dictionary<any>                          ):T;
    //endregion

    //region findLast
    export function findLast   ( collection:string                                                           ):string;
    export function findLast   ( collection:string,        iterator:StringIterator<       any>, thisArg?:any ):string;
    export function findLast   ( collection:string,        pluck   :string                                   ):string;
    export function findLast   ( collection:string,        where   :Dictionary<any>                          ):string;

    export function findLast<T>( collection:Array<     T>                                                    ):T;
    export function findLast<T>( collection:Array<     T>, iterator:ArrayIterator<     T, any>, thisArg?:any ):T;
    export function findLast<T>( collection:Array<     T>, pluck   :string                                   ):T;
    export function findLast<T>( collection:Array<     T>, where   :Dictionary<any>                          ):T;

    export function findLast<T>( collection:Dictionary<T>                                                    ):T;
    export function findLast<T>( collection:Dictionary<T>, iterator:DictionaryIterator<T, any>, thisArg?:any ):T;
    export function findLast<T>( collection:Dictionary<T>, pluck   :string                                   ):T;
    export function findLast<T>( collection:Dictionary<T>, where   :Dictionary<any>                          ):T;
    //endregion

    //region forEach
    export function forEach   ( collection:string                                                           ):string;
    export function forEach   ( collection:string,        iterator:StringIterator<       any>, thisArg?:any ):string;

    export function forEach<T>( collection:Array<     T>                                                    ):Array<     T>;
    export function forEach<T>( collection:Array<     T>, iterator:ArrayIterator<     T, any>, thisArg?:any ):Array<     T>;

    export function forEach<T>( collection:Dictionary<T>                                                    ):Dictionary<T>;
    export function forEach<T>( collection:Dictionary<T>, iterator:DictionaryIterator<T, any>, thisArg?:any ):Dictionary<T>;
    //endregion

    //region forEachRight
    export function forEachRight   ( collection:string                                                           ):string;
    export function forEachRight   ( collection:string,        iterator:StringIterator<       any>, thisArg?:any ):string;

    export function forEachRight<T>( collection:Array<     T>                                                    ):Array<     T>;
    export function forEachRight<T>( collection:Array<     T>, iterator:ArrayIterator<     T, any>, thisArg?:any ):Array<     T>;

    export function forEachRight<T>( collection:Dictionary<T>                                                    ):Dictionary<T>;
    export function forEachRight<T>( collection:Dictionary<T>, iterator:DictionaryIterator<T, any>, thisArg?:any ):Dictionary<T>;
    //endregion

    //region groupBy
    export function groupBy   ( collection:string                                                           ):Dictionary<Array<string>>;
    export function groupBy   ( collection:string,        iterator:StringIterator<       any>, thisArg?:any ):Dictionary<Array<string>>;
    export function groupBy   ( collection:string,        pluck   :string                                   ):Dictionary<Array<string>>;
    export function groupBy   ( collection:string,        where   :Dictionary<any>                          ):Dictionary<Array<string>>;

    export function groupBy<T>( collection:Array<     T>                                                    ):Dictionary<Array<T     >>;
    export function groupBy<T>( collection:Array<     T>, iterator:ArrayIterator<     T, any>, thisArg?:any ):Dictionary<Array<T     >>;
    export function groupBy<T>( collection:Array<     T>, pluck   :string                                   ):Dictionary<Array<T     >>;
    export function groupBy<T>( collection:Array<     T>, where   :Dictionary<any>                          ):Dictionary<Array<T     >>;

    export function groupBy<T>( collection:Dictionary<T>                                                    ):Dictionary<Array<T     >>;
    export function groupBy<T>( collection:Dictionary<T>, iterator:DictionaryIterator<T, any>, thisArg?:any ):Dictionary<Array<T     >>;
    export function groupBy<T>( collection:Dictionary<T>, pluck   :string                                   ):Dictionary<Array<T     >>;
    export function groupBy<T>( collection:Dictionary<T>, where   :Dictionary<any>                          ):Dictionary<Array<T     >>;
    //endregion

    //region indexBy
    export function indexBy   ( collection:string                                                           ):Dictionary<string>;
    export function indexBy   ( collection:string,        iterator:StringIterator<       any>, thisArg?:any ):Dictionary<string>;
    export function indexBy   ( collection:string,        pluck   :string                                   ):Dictionary<string>;
    export function indexBy   ( collection:string,        where   :Dictionary<any>                          ):Dictionary<string>;

    export function indexBy<T>( collection:Array<     T>                                                    ):Dictionary<T     >;
    export function indexBy<T>( collection:Array<     T>, iterator:ArrayIterator<     T, any>, thisArg?:any ):Dictionary<T     >;
    export function indexBy<T>( collection:Array<     T>, pluck   :string                                   ):Dictionary<T     >;
    export function indexBy<T>( collection:Array<     T>, where   :Dictionary<any>                          ):Dictionary<T     >;

    export function indexBy<T>( collection:Dictionary<T>                                                    ):Dictionary<T     >;
    export function indexBy<T>( collection:Dictionary<T>, iterator:DictionaryIterator<T, any>, thisArg?:any ):Dictionary<T     >;
    export function indexBy<T>( collection:Dictionary<T>, pluck   :string                                   ):Dictionary<T     >;
    export function indexBy<T>( collection:Dictionary<T>, where   :Dictionary<any>                          ):Dictionary<T     >;
    //endregion

    //region invoke
    export function invoke      ( collection:string,        methodName:string,              ...arguments:any[] ):Array<any>;
    export function invoke      ( collection:string,        iterator  :CustomIterator<any>, ...arguments:any[] ):Array<any>;
    export function invoke<   R>( collection:string,        iterator  :CustomIterator<R  >, ...arguments:any[] ):Array<R  >;

    export function invoke<T   >( collection:Array<     T>, methodName:string,              ...arguments:any[] ):Array<any>;
    export function invoke<T   >( collection:Array<     T>, iterator  :CustomIterator<any>, ...arguments:any[] ):Array<any>;
    export function invoke<T, R>( collection:Array<     T>, iterator  :CustomIterator<R  >, ...arguments:any[] ):Array<R  >;

    export function invoke<T   >( collection:Dictionary<T>, methodName:string,              ...arguments:any[] ):Array<any>;
    export function invoke<T   >( collection:Dictionary<T>, iterator  :CustomIterator<any>, ...arguments:any[] ):Array<any>;
    export function invoke<T, R>( collection:Dictionary<T>, iterator  :CustomIterator<R  >, ...arguments:any[] ):Array<R  >;
    //endregion

    //region map
    export function map      ( collection:string                                                           ):Array<string >;
    export function map      ( collection:string,        iterator:StringIterator<       any>, thisArg?:any ):Array<any    >;
    export function map<   R>( collection:string,        iterator:StringIterator<       R  >, thisArg?:any ):Array<R      >;
    export function map      ( collection:string,        pluck   :string                                   ):Array<any    >;
    export function map      ( collection:string,        where   :Dictionary<any>                          ):Array<boolean>;

    export function map<T   >( collection:Array<     T>                                                    ):Array<T      >;
    export function map<T   >( collection:Array<     T>, iterator:ArrayIterator<     T, any>, thisArg?:any ):Array<any    >;
    export function map<T, R>( collection:Array<     T>, iterator:ArrayIterator<     T, R  >, thisArg?:any ):Array<R      >;
    export function map<T   >( collection:Array<     T>, pluck   :string                                   ):Array<any    >;
    export function map<T   >( collection:Array<     T>, where   :Dictionary<any>                          ):Array<boolean>;

    export function map<T   >( collection:Dictionary<T>                                                    ):Array<T      >;
    export function map<T   >( collection:Dictionary<T>, iterator:DictionaryIterator<T, any>, thisArg?:any ):Array<any    >;
    export function map<T, R>( collection:Dictionary<T>, iterator:DictionaryIterator<T, R  >, thisArg?:any ):Array<R      >;
    export function map<T   >( collection:Dictionary<T>, pluck   :string                                   ):Array<any    >;
    export function map<T   >( collection:Dictionary<T>, where   :Dictionary<any>                          ):Array<boolean>;
    //endregion

    //region max
    export function max   ( collection:string                                                           ):string;
    export function max   ( collection:string,        iterator:StringIterator<       any>, thisArg?:any ):string;
    export function max   ( collection:string,        pluck   :string                                   ):string;
    export function max   ( collection:string,        where   :Dictionary<any>                          ):string;

    export function max<T>( collection:Array<     T>                                                    ):any/* number | T */;
    export function max<T>( collection:Array<     T>, iterator:ArrayIterator<     T, any>, thisArg?:any ):any/* number | T */;
    export function max<T>( collection:Array<     T>, pluck   :string                                   ):any/* number | T */;
    export function max<T>( collection:Array<     T>, where   :Dictionary<any>                          ):any/* number | T */;

    export function max<T>( collection:Dictionary<T>                                                    ):any/* number | T */;
    export function max<T>( collection:Dictionary<T>, iterator:DictionaryIterator<T, any>, thisArg?:any ):any/* number | T */;
    export function max<T>( collection:Dictionary<T>, pluck   :string                                   ):any/* number | T */;
    export function max<T>( collection:Dictionary<T>, where   :Dictionary<any>                          ):any/* number | T */;
    //endregion

    //region min
    export function min   ( collection:string                                                           ):string;
    export function min   ( collection:string,        iterator:StringIterator<       any>, thisArg?:any ):string;
    export function min   ( collection:string,        pluck   :string                                   ):string;
    export function min   ( collection:string,        where   :Dictionary<any>                          ):string;

    export function min<T>( collection:Array<     T>                                                    ):any/* number | T */;
    export function min<T>( collection:Array<     T>, iterator:ArrayIterator<     T, any>, thisArg?:any ):any/* number | T */;
    export function min<T>( collection:Array<     T>, pluck   :string                                   ):any/* number | T */;
    export function min<T>( collection:Array<     T>, where   :Dictionary<any>                          ):any/* number | T */;

    export function min<T>( collection:Dictionary<T>                                                    ):any/* number | T */;
    export function min<T>( collection:Dictionary<T>, iterator:DictionaryIterator<T, any>, thisArg?:any ):any/* number | T */;
    export function min<T>( collection:Dictionary<T>, pluck   :string                                   ):any/* number | T */;
    export function min<T>( collection:Dictionary<T>, where   :Dictionary<any>                          ):any/* number | T */;
    //endregion

    //region pluck
    export function pluck   ( collection:string,        property:string ):Array<any>;

    export function pluck<T>( collection:Array<     T>, property:string ):Array<any>;

    export function pluck<T>( collection:Dictionary<T>, property:string ):Array<any>;
    //endregion

    //region reduce
    export function reduce      ( collection:string                                                                                                ):string;
    export function reduce      ( collection:string,        iterator:AccumulatingStringIterator<    any,       any>                                ):any;
    export function reduce<   A>( collection:string,        iterator:AccumulatingStringIterator<    A,         A  >                                ):A;
    export function reduce      ( collection:string,        iterator:AccumulatingStringIterator<    any,       any>, accumulator:any, thisArg?:any ):any;
    export function reduce<   A>( collection:string,        iterator:AccumulatingStringIterator<    A,         A  >, accumulator:A,   thisArg?:any ):A;

    export function reduce<T   >( collection:Array<     T>                                                                                         ):T;
    export function reduce<T   >( collection:Array<     T>, iterator:AccumulatingArrayIterator<     any, T, T, any>                                ):any;
    export function reduce<T, A>( collection:Array<     T>, iterator:AccumulatingArrayIterator<     A,   T, T, A  >                                ):A;
    export function reduce<T   >( collection:Array<     T>, iterator:AccumulatingArrayIterator<     any, T, T, any>, accumulator:any, thisArg?:any ):any;
    export function reduce<T, A>( collection:Array<     T>, iterator:AccumulatingArrayIterator<     A,   T, T, A  >, accumulator:A,   thisArg?:any ):A;

    export function reduce<T   >( collection:Dictionary<T>                                                                                         ):T;
    export function reduce<T   >( collection:Dictionary<T>, iterator:AccumulatingDictionaryIterator<any, T, T, any>                                ):any;
    export function reduce<T, A>( collection:Dictionary<T>, iterator:AccumulatingDictionaryIterator<A,   T, T, A  >                                ):A;
    export function reduce<T   >( collection:Dictionary<T>, iterator:AccumulatingDictionaryIterator<any, T, T, any>, accumulator:any, thisArg?:any ):any;
    export function reduce<T, A>( collection:Dictionary<T>, iterator:AccumulatingDictionaryIterator<A,   T, T, A  >, accumulator:A,   thisArg?:any ):A;
    //endregion

    //region reduceRight
    export function reduceRight      ( collection:string                                                                                                ):string;
    export function reduceRight      ( collection:string,        callback:AccumulatingStringIterator<    any,       any>                                ):any;
    export function reduceRight<   A>( collection:string,        callback:AccumulatingStringIterator<    A,         A  >                                ):A;
    export function reduceRight      ( collection:string,        callback:AccumulatingStringIterator<    any,       any>, accumulator:any, thisArg?:any ):any;
    export function reduceRight<   A>( collection:string,        callback:AccumulatingStringIterator<    A,         A  >, accumulator:A,   thisArg?:any ):A;

    export function reduceRight<T   >( collection:Array<     T>                                                                                         ):T;
    export function reduceRight<T   >( collection:Array<     T>, callback:AccumulatingArrayIterator<     any, T, T, any>                                ):any;
    export function reduceRight<T, A>( collection:Array<     T>, callback:AccumulatingArrayIterator<     A,   T, T, A  >                                ):A;
    export function reduceRight<T   >( collection:Array<     T>, callback:AccumulatingArrayIterator<     any, T, T, any>, accumulator:any, thisArg?:any ):any;
    export function reduceRight<T, A>( collection:Array<     T>, callback:AccumulatingArrayIterator<     A,   T, T, A  >, accumulator:A,   thisArg?:any ):A;

    export function reduceRight<T   >( collection:Dictionary<T>                                                                                         ):T;
    export function reduceRight<T   >( collection:Dictionary<T>, callback:AccumulatingDictionaryIterator<any, T, T, any>                                ):any;
    export function reduceRight<T, A>( collection:Dictionary<T>, callback:AccumulatingDictionaryIterator<A,   T, T, A  >                                ):A;
    export function reduceRight<T   >( collection:Dictionary<T>, callback:AccumulatingDictionaryIterator<any, T, T, any>, accumulator:any, thisArg?:any ):any;
    export function reduceRight<T, A>( collection:Dictionary<T>, callback:AccumulatingDictionaryIterator<A,   T, T, A  >, accumulator:A,   thisArg?:any ):A;
    //endregion

    //region reject
    export function reject   ( collection:string                                                           ):Array<string>;
    export function reject   ( collection:string,        iterator:StringIterator<       any>, thisArg?:any ):Array<string>;
    export function reject   ( collection:string,        pluck   :string                                   ):Array<string>;
    export function reject   ( collection:string,        where   :Dictionary<any>                          ):Array<string>;

    export function reject<T>( collection:Array<     T>                                                    ):Array<T     >;
    export function reject<T>( collection:Array<     T>, iterator:ArrayIterator<     T, any>, thisArg?:any ):Array<T     >;
    export function reject<T>( collection:Array<     T>, pluck   :string                                   ):Array<T     >;
    export function reject<T>( collection:Array<     T>, where   :Dictionary<any>                          ):Array<T     >;

    export function reject<T>( collection:Dictionary<T>                                                    ):Array<T     >;
    export function reject<T>( collection:Dictionary<T>, iterator:DictionaryIterator<T, any>, thisArg?:any ):Array<T     >;
    export function reject<T>( collection:Dictionary<T>, pluck   :string                                   ):Array<T     >;
    export function reject<T>( collection:Dictionary<T>, where   :Dictionary<any>                          ):Array<T     >;
    //endregion

    //region sample
    export function sample   ( collection:string                      ):string;
    export function sample   ( collection:string,        count:number ):Array<string>;

    export function sample<T>( collection:Array<     T>               ):T;
    export function sample<T>( collection:Array<     T>, count:number ):Array<T     >;

    export function sample<T>( collection:Dictionary<T>               ):T;
    export function sample<T>( collection:Dictionary<T>, count:number ):Array<T     >;
    //endregion

    //region shuffle
    export function shuffle   ( collection:string        ):Array<string>;

    export function shuffle<T>( collection:Array<     T> ):Array<T     >;

    export function shuffle<T>( collection:Dictionary<T> ):Array<T     >;
    //endregion

    //region size
    export function size   ( collection:string        ):number;

    export function size<T>( collection:Array<     T> ):number;

    export function size<T>( collection:Dictionary<T> ):number;
    //endregion

    //region some
    export function some   ( collection:string                                                           ):boolean;
    export function some   ( collection:string,        iterator:StringIterator<       any>, thisArg?:any ):boolean;
    export function some   ( collection:string,        pluck   :string                                   ):boolean;
    export function some   ( collection:string,        where   :Dictionary<any>                          ):boolean;

    export function some<T>( collection:Array<     T>                                                    ):boolean;
    export function some<T>( collection:Array<     T>, iterator:ArrayIterator<     T, any>, thisArg?:any ):boolean;
    export function some<T>( collection:Array<     T>, pluck   :string                                   ):boolean;
    export function some<T>( collection:Array<     T>, where   :Dictionary<any>                          ):boolean;

    export function some<T>( collection:Dictionary<T>                                                    ):boolean;
    export function some<T>( collection:Dictionary<T>, iterator:DictionaryIterator<T, any>, thisArg?:any ):boolean;
    export function some<T>( collection:Dictionary<T>, pluck   :string                                   ):boolean;
    export function some<T>( collection:Dictionary<T>, where   :Dictionary<any>                          ):boolean;
    //endregion

    //region sortBy
    export function sortBy   ( collection:string                                                           ):Array<string>;
    export function sortBy   ( collection:string,        iterator:StringIterator<       any>, thisArg?:any ):Array<string>;
    export function sortBy   ( collection:string,        pluck   :string                                   ):Array<string>;
    export function sortBy   ( collection:string,        where   :Dictionary<any>                          ):Array<string>;

    export function sortBy<T>( collection:Array<     T>                                                    ):Array<T     >;
    export function sortBy<T>( collection:Array<     T>, iterator:ArrayIterator<     T, any>, thisArg?:any ):Array<T     >;
    export function sortBy<T>( collection:Array<     T>, pluck   :string                                   ):Array<T     >;
    export function sortBy<T>( collection:Array<     T>, where   :Dictionary<any>                          ):Array<T     >;

    export function sortBy<T>( collection:Dictionary<T>                                                    ):Array<T     >;
    export function sortBy<T>( collection:Dictionary<T>, iterator:DictionaryIterator<T, any>, thisArg?:any ):Array<T     >;
    export function sortBy<T>( collection:Dictionary<T>, pluck   :string                                   ):Array<T     >;
    export function sortBy<T>( collection:Dictionary<T>, where   :Dictionary<any>                          ):Array<T     >;
    //endregion

    //region toArray
    export function toArray   ( collection:string        ):Array<string>;

    export function toArray<T>( collection:Array<     T> ):Array<T     >;

    export function toArray<T>( collection:Dictionary<T> ):Array<T     >;
    //endregion

    //region where
    export function where   ( collection:string,        properties:Dictionary<any> ):Array<string>;

    export function where<T>( collection:Array<     T>, properties:Dictionary<any> ):Array<T     >;

    export function where<T>( collection:Dictionary<T>, properties:Dictionary<any> ):Array<T     >;
    //endregion

    //endregion

    //region Functions

    //region after
    export function after( n:number, callback:GenericFunction<any> ):GenericFunction<any>;
    //endregion

    //region bind
    export function bind( callback:GenericFunction<any>                                  ):GenericFunction<any>;
    export function bind( callback:GenericFunction<any>, thisArg:any, ...arguments:any[] ):GenericFunction<any>;
    //endregion

    //region bindAll
    export function bindAll<T>( object:Dictionary<T>, ...methodNames:string[] ):Dictionary<T>;
    //endregion

    //region bindKey
    export function bindKey( object:Dictionary<any>, key:string, ...arguments:any[] ):GenericFunction<any>;
    //endregion

    //region compose
    export function compose( ...functions:GenericFunction<any>[] ):GenericFunction<any>;
    //endregion

    //region curry
    export function curry( callback:GenericFunction<any>, artiy?:number ):GenericFunction<any>;
    //endregion

    //region debounce
    export function debounce( callback:GenericFunction<any>, wait:number, options?:DebounceOptions ):GenericFunction<any>;
    //endregion

    //region defer
    export function defer( callback:GenericFunction<any>, ...arguments:any[] ):number;
    //endregion

    //region delay
    export function delay( callback:GenericFunction<any>, wait:number, ...arguments:any[] ):number;
    //endregion

    //region memoize
    export function memoize( callback:GenericFunction<any>, resolver?:GenericFunction<any> ):GenericFunction<any>;
    //endregion

    //region once
    export function once( callback:GenericFunction<any> ):GenericFunction<any>;
    //endregion

    //region partial
    export function partial( callback:GenericFunction<any>, ...arguments:any[] ):GenericFunction<any>;
    //endregion

    //region partialRight
    export function partialRight( callback:GenericFunction<any>, ...arguments:any[] ):GenericFunction<any>;
    //endregion

    //region throttle
    export function throttle( callback:GenericFunction<any>, wait:number, options?:ThrottleOptions ):GenericFunction<any>;
    //endregion

    //region wrap
    export function wrap<T>( value:T, wrapper:WrapperFunction<T, any> ):GenericFunction<any>;
    //endregion

    //endregion

    //region Objects

    //region assign
    export function assign( object:Dictionary<any>, ...arguments:any[] ):Dictionary<any>;
    //endregion

    //region clone
    export function clone<T   >( value:T                                                               ):T;
    export function clone<T   >( value:T, isDeep:boolean                                               ):T;
    export function clone<T   >( value:T, isDeep:boolean, callback:CloneFunction<T, any>, thisArg?:any ):any;
    export function clone<T, R>( value:T, isDeep:boolean, callback:CloneFunction<T, R  >, thisArg?:any ):R;
    export function clone<T   >( value:T,                 callback:CloneFunction<T, any>, thisArg?:any ):any;
    export function clone<T, R>( value:T,                 callback:CloneFunction<T, R  >, thisArg?:any ):R;
    //endregion

    //region cloneDeep
    export function cloneDeep<T   >( value:T                                               ):T;
    export function cloneDeep<T   >( value:T, callback:CloneFunction<T, any>, thisArg?:any ):any;
    export function cloneDeep<T, R>( value:T, callback:CloneFunction<T, R  >, thisArg?:any ):R;
    //endregion

    //region create
    export function create( prototype:Dictionary<any>, properties?:Dictionary<any> ):Dictionary<any>;
    //endregion

    //region defaults
    export function defaults( object:Dictionary<any>, ...sources:Dictionary<any>[] ):Dictionary<any>;
    //endregion

    //region findKey
    export function findKey   ( object:Dictionary<any>                                                    ):string;
    export function findKey<T>( object:Dictionary<T  >, callback:DictionaryIterator<T, any>, thisArg?:any ):string;
    export function findKey   ( object:Dictionary<any>, pluck   :any                                      ):string;
    export function findKey   ( object:Dictionary<any>, where   :Dictionary<any>                          ):string;
    //endregion

    //region findLastKey
    export function findLastKey   ( object:Dictionary<any>                                                    ):string;
    export function findLastKey<T>( object:Dictionary<T  >, callback:DictionaryIterator<T, any>, thisArg?:any ):string;
    export function findLastKey   ( object:Dictionary<any>, pluck   :any                                      ):string;
    export function findLastKey   ( object:Dictionary<any>, where   :Dictionary<any>                          ):string;
    //endregion

    //region forIn
    export function forIn<T>( object:Dictionary<T>, iterator?:DictionaryIterator<T, any>, thisArg?:any ):Dictionary<T>;
    //endregion

    //region forInRight
    export function forInRight<T>( object:Dictionary<T>, iterator?:DictionaryIterator<T, any>, thisArg?:any ):Dictionary<T>;
    //endregion

    //region forOwn
    export function forOwn<T>( object:Dictionary<T>, iterator?:DictionaryIterator<T, any>, thisArg?:any ):Dictionary<T>;
    //endregion

    //region forOwnRight
    export function forOwnRight<T>( object:Dictionary<T>, iterator?:DictionaryIterator<T, any>, thisArg?:any ):Dictionary<T>;
    //endregion

    //region functions
    export function functions( object:Dictionary<any> ):Array<string>;
    //endregion

    //region has
    export function has( object:Dictionary<any>, key:string ):boolean;
    //endregion

    //region invert
    export function invert( object:Dictionary<any> ):Dictionary<string>;
    //endregion

    //region isArguments
    export function isArguments( value:any ):boolean;
    //endregion

    //region isArray
    export function isArray( value:any ):boolean;
    //endregion

    //region isDate
    export function isDate( value:any ):boolean;
    //endregion

    //region isElement
    export function isElement( value:any ):boolean;
    //endregion

    //region isEmpty
    export function isEmpty( value:any ):boolean;
    //endregion

    //region isEqual
    export function isEqual<A   >( a:A, b:any, callback:ComparisonFunction<A, any, any>, thisArg?:any ):boolean;
    export function isEqual<A, B>( a:A, b:B,   callback:ComparisonFunction<A, B,   any>, thisArg?:any ):boolean;
    //endregion

    //region isFinite
    export function isFinite( value:any ):boolean;
    //endregion

    //region isFunction
    export function isFunction( value:any ):boolean;
    //endregion

    //region isNaN
    export function isNaN( value:any ):boolean;
    //endregion

    //region isNull
    export function isNull( value:any ):boolean;
    //endregion

    //region isNumber
    export function isNumber( value:any ):boolean;
    //endregion

    //region isObject
    export function isObject( value:any ):boolean;
    //endregion

    //region isPlainObject
    export function isPlainObject( value:any ):boolean;
    //endregion

    //region isRegExp
    export function isRegExp( value:any ):boolean;
    //endregion

    //region isString
    export function isString( value:any ):boolean;
    //endregion

    //region isUndefined
    export function isUndefined( value:any ):boolean;
    //endregion

    //region keys
    export function keys( object:Dictionary<any> ):Array<string>;
    //endregion

    //region mapValues
    export function mapValues<T   >( object:Dictionary<T>                                                    ):Dictionary<T      >;
    export function mapValues<T   >( object:Dictionary<T>, iterator:DictionaryIterator<T, any>, thisArg?:any ):Dictionary<any    >;
    export function mapValues<T, R>( object:Dictionary<T>, iterator:DictionaryIterator<T, R  >, thisArg?:any ):Dictionary<R      >;
    export function mapValues<T   >( object:Dictionary<T>, pluck   :string                                   ):Dictionary<any    >;
    export function mapValues<T   >( object:Dictionary<T>, where   :Dictionary<any>                          ):Dictionary<boolean>;
    //endregion

    //region merge
    export function merge( object:Dictionary<any>, ...arguments:any[] ):Dictionary<any>;
    //endregion

    //region omit
    export function omit<T>( object:Dictionary<T>                                                         ):Dictionary<T>;
    export function omit<T>( object:Dictionary<T>,    iterator  :DictionaryIterator<T, any>, thisArg?:any ):Dictionary<T>;
    export function omit<T>( object:Dictionary<T>, ...properties:any[] /* string | Array<string> */       ):Dictionary<T>;
    //endregion

    //region pairs
    export function pairs<T>( object:Dictionary<T> ):Array<Array<any>>; /* string | T */
    //endregion

    //region pick
    export function pick<T>( object:Dictionary<T>                                                         ):Dictionary<T>;
    export function pick<T>( object:Dictionary<T>,    iterator  :DictionaryIterator<T, any>, thisArg?:any ):Dictionary<T>;
    export function pick<T>( object:Dictionary<T>, ...properties:any[] /* string | Array<string> */       ):Dictionary<T>;
    //endregion

    //region transform
    export function transform<T   >( collection:Array<     T>                                                                                                     ):Array<     T  >;
    export function transform<T   >( collection:Array<     T>, iterator:AccumulatingArrayIterator<     Array<    any>,  T, T, any>                                ):Array<     any>;
    export function transform<T, R>( collection:Array<     T>, iterator:AccumulatingArrayIterator<     Array<    R  >,  T, T, any>                                ):Array<     R  >;
    export function transform<T   >( collection:Array<     T>, iterator:AccumulatingArrayIterator<     any,             T, T, any>, accumulator:any, thisArg?:any ):any;
    export function transform<T, R>( collection:Array<     T>, iterator:AccumulatingArrayIterator<     R,               T, T, any>, accumulator:R,   thisArg?:any ):R;

    export function transform<T   >( collection:Dictionary<T>                                                                                                     ):Dictionary<T  >;
    export function transform<T   >( collection:Dictionary<T>, iterator:AccumulatingDictionaryIterator<Dictionary<any>, T, T, any>                                ):Dictionary<any>;
    export function transform<T, R>( collection:Dictionary<T>, iterator:AccumulatingDictionaryIterator<Dictionary<R  >, T, T, any>                                ):Dictionary<R  >;
    export function transform<T   >( collection:Dictionary<T>, iterator:AccumulatingDictionaryIterator<any,             T, T, any>, accumulator:any, thisArg?:any ):any;
    export function transform<T, R>( collection:Dictionary<T>, iterator:AccumulatingDictionaryIterator<R,               T, T, any>, accumulator:R,   thisArg?:any ):R;
    //endregion

    //region values
    export function values<T>( object:Dictionary<T> ):Array<T>;
    //endregion

    //endregion

    //region Utilities

    //region now
    export function now():number;
    //endregion

    //region constant
    export function constant<T>( value:T ):ConstantFunction<T>;
    //endregion

    //region createCallback
    export function createCallback(                                                            ):IdentityFunction<any>;
    export function createCallback( func :GenericFunction<any>, thisArg?:any, argCount?:number ):GenericFunction< any>;
    export function createCallback( pluck:string                                               ):PropertyFunction<any>;
    export function createCallback( where:Dictionary<any>                                      ):WhereFunction<   any>;
    //endregion

    //region escape
    export function escape( s:string ):string;
    //endregion

    //region identity
    export function identity<T>( value:T ):T;
    //endregion

    //region mixin
    export function mixin( object:GenericFunction<any>, source:Dictionary<any>, isChain?:boolean      ):void;
    export function mixin( object:GenericFunction<any>, source:Dictionary<any>, options?:MixinOptions ):void;

    export function mixin( object:Dictionary<     any>, source:Dictionary<any>, isChain?:boolean      ):void;
    export function mixin( object:Dictionary<     any>, source:Dictionary<any>, options?:MixinOptions ):void;
    export function mixin(                              source:Dictionary<any>, isChain?:boolean      ):void;
    export function mixin(                              source:Dictionary<any>, options?:MixinOptions ):void;
    //endregion

    //region noConflict
    export function noConflict():Ctor;
    //endregion

    //region noop
    export function noop():void;
    //endregion

    //region parseInt
    export function parseInt( value:string, radix?:number ):number;
    //endregion

    //region property
    export function property<T>( key:string ):PropertyFunction<T>;
    //endregion

    //region random
    export function random(             max:number                   ):number;
    export function random( min:number, max:number                   ):number;
    export function random( min:number, max:number, floating:boolean ):number;
    //endregion

    //region result
    export function result<T>( object:Dictionary<T>, key:string ):T;
    //endregion

    //region runInContext
    export function runInContext( context?:any ):Ctor;
    //endregion

    //region template
    export function template<T>( text:string                                                 ):PartialTemplateFunction<T>;
    export function template   ( text:string, data:Dictionary<any>, options?:TemplateOptions ):string;
    //endregion

    //region times
    export function times<T>( n:number, callback:GenericFunction<T>, thisArg?:any ):Array<T>;
    //endregion

    //region unescape
    export function unescape( s:string ):string;
    //endregion

    //region uniqueId
    export function uniqueId( prefix?:string ):string;
    //endregion

    //endregion

    //region Properties

    //region VERSION
    export var VERSION:string;
    //endregion

    //region support
    export var support:Support;
    //endregion

    //region templateSettings
    export var templateSettings:TemplateSettings;
    //endregion

    //endregion

    //endregion

    //region Dynamic

    //region Interfaces
    interface Ctor{
        (                     ):_EmptyWrapper;
        ( value:number        ):_NumberWrapper;
        ( value:string        ):_StringWrapper;
        <P                 >( value:Array<     P> ):_ArrayWrapper<        P  >;
        <P                 >( value:Dictionary<P> ):_DictionaryWrapper<   P  >;
        <W extends Function>( value:Function      ):_FunctionWrapper<  W     >;
        <W                 >( value:W             ):_Wrapper<          W, any>;
    }

    interface _Wrapper<W, P> {
        __chain__  :boolean;
        __wrapped__:W;
        value()    :W;
    }
    interface _EmptyWrapper         extends _Wrapper<any,           any   >{}
    interface _NumberWrapper        extends _Wrapper<number,        number>{}
    interface _StringWrapper        extends _Wrapper<string,        string>{}
    interface _ArrayWrapper<     P> extends _Wrapper<Array<     P>, P     >{}
    interface _DictionaryWrapper<P> extends _Wrapper<Dictionary<P>, P     >{}
    interface _FunctionWrapper<  W> extends _Wrapper<W,             any   >{}

    //endregion

    //region NativeArrays

    //region concat
    interface _Wrapper<W, P>{
        concat<U extends Array<P>>( ...items:U  [] ):_ArrayWrapper<any>;
        concat                    ( ...items:any[] ):_ArrayWrapper<any>;
    }
    //endregion

    //region join
    interface _Wrapper<W, P>{
        join( separator?:string ):string;
    }
    //endregion

    //region pop
    interface _Wrapper<W, P>{
        pop():P;
    }
    //endregion

    //region push
    interface _Wrapper<W, P>{
        push<T extends P>( ...items:T[] ):_ArrayWrapper<T>;
    }
    //endregion

    //region reverse
    interface _Wrapper<W, P>{
        reverse():_ArrayWrapper<P>;
    }
    //endregion

    //region shift
    interface _Wrapper<W, P>{
        shift():P;
    }
    //endregion

    //region slice
    interface _Wrapper<W, P>{
        slice( start:number, end?:number ):_ArrayWrapper<P>;
    }
    //endregion

    //region sort
    interface _Wrapper<W, P>{
        sort( compareFn?:( a:P, b:P ) => number ):_ArrayWrapper<P>;
    }
    //endregion

    //region splice
    interface _Wrapper<W, P>{
        splice( start:number ):_ArrayWrapper<P>;
    }
    //endregion

    //region unshift
    interface _Wrapper<W, P>{
        unshift<T extends P>( ...items:T[] ):_ArrayWrapper<T>;
    }
    //endregion

    //endregion

    //region Arrays

    //region compact
    interface _Wrapper<W, P>{
        compact():_ArrayWrapper<P>;
    }
    //endregion

    //region difference
    interface _Wrapper<W, P>{
        difference( ...vectors:Array<any>[] ):_ArrayWrapper<P>;
    }
    //endregion

    //region findIndex
    interface _Wrapper<W, P>{
        findIndex(                                                                     ):number;
        findIndex( iterator:FunctionWithThreeArguments<P, any, any, any>, thisArg?:any ):number;
        findIndex( pluck   :string                                                     ):number;
        findIndex( where   :Dictionary<any>                                            ):number;
    }
    interface _StringWrapper extends _Wrapper<string, string>{
        findIndex(                                              ):number;
        findIndex( iterator:StringIterator<  any>, thisArg?:any ):number;
        findIndex( pluck   :string                              ):number;
        findIndex( where   :Dictionary<any>                     ):number;
    }
    interface _ArrayWrapper<P> extends _Wrapper<Array<P>, P>{
        findIndex(                                              ):number;
        findIndex( iterator:ArrayIterator<P, any>, thisArg?:any ):number;
        findIndex( pluck   :string                              ):number;
        findIndex( where   :Dictionary<any>                     ):number;
    }
    //endregion

    //region findLastIndex
    interface _Wrapper<W, P>{
        findLastIndex(                                                                     ):number;
        findLastIndex( iterator:FunctionWithThreeArguments<P, any, any, any>, thisArg?:any ):number;
        findLastIndex( pluck   :string                                                     ):number;
        findLastIndex( where   :Dictionary<any>                                            ):number;
    }
    interface _StringWrapper extends _Wrapper<string, string>{
        findLastIndex(                                              ):number;
        findLastIndex( iterator:StringIterator<  any>, thisArg?:any ):number;
        findLastIndex( pluck   :string                              ):number;
        findLastIndex( where   :Dictionary<any>                     ):number;
    }
    interface _ArrayWrapper<P> extends _Wrapper<Array<P>, P>{
        findLastIndex(                                              ):number;
        findLastIndex( iterator:ArrayIterator<P, any>, thisArg?:any ):number;
        findLastIndex( pluck   :string                              ):number;
        findLastIndex( where   :Dictionary<any>                     ):number;
    }
    //endregion

    //region first
    interface _Wrapper<W, P>{
        first(                                                                     ):P;
        first( iterator:FunctionWithThreeArguments<P, any, any, any>, thisArg?:any ):_ArrayWrapper<P>;
        first( count   :number                                                     ):_ArrayWrapper<P>;
        first( pluck   :string                                                     ):_ArrayWrapper<P>;
        first( where   :Dictionary<any>                                            ):_ArrayWrapper<P>;
    }
    interface _StringWrapper extends _Wrapper<string, string>{
        first(                                              ):string;
        first( iterator:StringIterator<  any>, thisArg?:any ):_ArrayWrapper<string>;
        first( count   :number                              ):_ArrayWrapper<string>;
        first( pluck   :string                              ):_ArrayWrapper<string>;
        first( where   :Dictionary<any>                     ):_ArrayWrapper<string>;
    }
    interface _ArrayWrapper<P> extends _Wrapper<Array<P>, P>{
        first(                                              ):P;
        first( iterator:ArrayIterator<P, any>, thisArg?:any ):_ArrayWrapper<P>;
        first( count   :number                              ):_ArrayWrapper<P>;
        first( pluck   :string                              ):_ArrayWrapper<P>;
        first( where   :Dictionary<any>                     ):_ArrayWrapper<P>;
    }
    //endregion

    //region flatten
    interface _Wrapper<W, P>{
        flatten   (                                                                                      ):_ArrayWrapper<any    >;
        flatten   ( isShallow:boolean                                                                    ):_ArrayWrapper<any    >;
        flatten<R>( isShallow:boolean, iterator:FunctionWithThreeArguments<P, any, any, R>, thisArg?:any ):_ArrayWrapper<R      >;
        flatten   ( isShallow:boolean, pluck   :string                                                   ):_ArrayWrapper<any    >;
        flatten   ( isShallow:boolean, where   :Dictionary<any>                                          ):_ArrayWrapper<boolean>;
        flatten<R>(                    iterator:FunctionWithThreeArguments<P, any, any, R>, thisArg?:any ):_ArrayWrapper<R      >;
        flatten   (                    pluck   :string                                                   ):_ArrayWrapper<any    >;
        flatten   (                    where   :Dictionary<any>                                          ):_ArrayWrapper<boolean>;
    }
    interface _StringWrapper extends _Wrapper<string, string>{
        flatten   (                                                               ):_ArrayWrapper<string >;
        flatten   ( isShallow:boolean                                             ):_ArrayWrapper<string >;
        flatten<R>( isShallow:boolean, iterator:StringIterator<  R>, thisArg?:any ):_ArrayWrapper<R      >;
        flatten   ( isShallow:boolean, pluck   :string                            ):_ArrayWrapper<any    >;
        flatten   ( isShallow:boolean, where   :Dictionary<any>                   ):_ArrayWrapper<boolean>;
        flatten<R>(                    iterator:StringIterator<  R>, thisArg?:any ):_ArrayWrapper<R      >;
        flatten   (                    pluck   :string                            ):_ArrayWrapper<any    >;
        flatten   (                    where   :Dictionary<any>                   ):_ArrayWrapper<boolean>;
    }
    interface _ArrayWrapper<P> extends _Wrapper<Array<P>, P>{
        flatten   (                                                               ):_ArrayWrapper<any    >;
        flatten   ( isShallow:boolean                                             ):_ArrayWrapper<any    >;
        flatten<R>( isShallow:boolean, iterator:ArrayIterator<P, R>, thisArg?:any ):_ArrayWrapper<R      >;
        flatten   ( isShallow:boolean, pluck   :string                            ):_ArrayWrapper<any    >;
        flatten   ( isShallow:boolean, where   :Dictionary<any>                   ):_ArrayWrapper<boolean>;
        flatten<R>(                    iterator:ArrayIterator<P, R>, thisArg?:any ):_ArrayWrapper<R      >;
        flatten   (                    pluck   :string                            ):_ArrayWrapper<any    >;
        flatten   (                    where   :Dictionary<any>                   ):_ArrayWrapper<boolean>;
    }
    //endregion

    //region indexOf
    interface _Wrapper<W, P>{
        indexOf( value:any                         ):number;
        indexOf( value:any, fromIndex     :number  ):number;
        indexOf( value:any, isBinarySearch:boolean ):number;
    }
    //endregion

    //region initial
    interface _Wrapper<W, P>{
        initial(                                                                       ):_ArrayWrapper<P>;
        initial( iterator  :FunctionWithThreeArguments<P, any, any, any>, thisArg?:any ):_ArrayWrapper<P>;
        initial( exceptLast:number                                                     ):_ArrayWrapper<P>;
        initial( pluck     :string                                                     ):_ArrayWrapper<P>;
        initial( where     :Dictionary<any>                                            ):_ArrayWrapper<P>;
    }
    interface _StringWrapper extends _Wrapper<string, string>{
        initial(                                                ):_ArrayWrapper<string>;
        initial( iterator  :StringIterator<  any>, thisArg?:any ):_ArrayWrapper<string>;
        initial( exceptLast:number                              ):_ArrayWrapper<string>;
        initial( pluck     :string                              ):_ArrayWrapper<string>;
        initial( where     :Dictionary<any>                     ):_ArrayWrapper<string>;
    }
    interface _ArrayWrapper<P> extends _Wrapper<Array<P>, P>{
        initial(                                                ):_ArrayWrapper<P>;
        initial( iterator  :ArrayIterator<P, any>, thisArg?:any ):_ArrayWrapper<P>;
        initial( exceptLast:number                              ):_ArrayWrapper<P>;
        initial( pluck     :string                              ):_ArrayWrapper<P>;
        initial( where     :Dictionary<any>                     ):_ArrayWrapper<P>;
    }
    //endregion

    //region intersection
    interface _Wrapper<W, P>{
        intersection( ...arrays:Array<any>[] ):_ArrayWrapper<P>;
    }
    //endregion

    //region last
    interface _Wrapper<W, P>{
        last(                                                                     ):P;
        last( iterator:FunctionWithThreeArguments<P, any, any, any>, thisArg?:any ):_ArrayWrapper<P>;
        last( count   :number                                                     ):_ArrayWrapper<P>;
        last( pluck   :string                                                     ):_ArrayWrapper<P>;
        last( where   :Dictionary<any>                                            ):_ArrayWrapper<P>;
    }
    interface _StringWrapper extends _Wrapper<string, string>{
        last(                                              ):string;
        last( iterator:StringIterator<  any>, thisArg?:any ):_ArrayWrapper<string>;
        last( count   :number                              ):_ArrayWrapper<string>;
        last( pluck   :string                              ):_ArrayWrapper<string>;
        last( where   :Dictionary<any>                     ):_ArrayWrapper<string>;
    }
    interface _ArrayWrapper<P> extends _Wrapper<Array<P>, P>{
        last(                                              ):P;
        last( iterator:ArrayIterator<P, any>, thisArg?:any ):_ArrayWrapper<P>;
        last( count   :number                              ):_ArrayWrapper<P>;
        last( pluck   :string                              ):_ArrayWrapper<P>;
        last( where   :Dictionary<any>                     ):_ArrayWrapper<P>;
    }
    //endregion

    //region lastIndexOf
    interface _Wrapper<W, P>{
        lastIndexOf( value:any                   ):number;
        lastIndexOf( value:any, fromIndex:number ):number;
    }
    //endregion

    //region pull
    interface _Wrapper<W, P>{
        pull( ...values:any[] ):_ArrayWrapper<P>;
    }
    //endregion

    //region range
    interface _Wrapper<W, P>{
        range(                         ):_ArrayWrapper<number>;
        range( end:number              ):_ArrayWrapper<number>;
        range( end:number, step:number ):_ArrayWrapper<number>;
    }
    //endregion

    //region remove
    interface _Wrapper<W, P>{
        remove(                                              ):_ArrayWrapper<P>;
        remove( iterator:ArrayIterator<P, any>, thisArg?:any ):_ArrayWrapper<P>;
        remove( pluck   :string                              ):_ArrayWrapper<P>;
        remove( where   :Dictionary<any>                     ):_ArrayWrapper<P>;
    }
    //endregion

    //region rest
    interface _Wrapper<W, P>{
        rest(                                                                        ):_ArrayWrapper<P>;
        rest( iterator   :FunctionWithThreeArguments<P, any, any, any>, thisArg?:any ):_ArrayWrapper<P>;
        rest( exceptFirst:number                                                     ):_ArrayWrapper<P>;
        rest( pluck      :string                                                     ):_ArrayWrapper<P>;
        rest( where      :Dictionary<any>                                            ):_ArrayWrapper<P>;
    }
    interface _StringWrapper extends _Wrapper<string, string>{
        rest(                                                 ):_ArrayWrapper<string>;
        rest( iterator   :StringIterator<  any>, thisArg?:any ):_ArrayWrapper<string>;
        rest( exceptFirst:number                              ):_ArrayWrapper<string>;
        rest( pluck      :string                              ):_ArrayWrapper<string>;
        rest( where      :Dictionary<any>                     ):_ArrayWrapper<string>;
    }
    interface _ArrayWrapper<P> extends _Wrapper<Array<P>, P>{
        rest(                                                 ):_ArrayWrapper<P     >;
        rest( iterator   :ArrayIterator<P, any>, thisArg?:any ):_ArrayWrapper<P     >;
        rest( exceptFirst:number                              ):_ArrayWrapper<P     >;
        rest( pluck      :string                              ):_ArrayWrapper<P     >;
        rest( where      :Dictionary<any>                     ):_ArrayWrapper<P     >;
    }
    //endregion

    //region sortedIndex
    interface _Wrapper<W, P>{
        sortedIndex( value:any                                                 ):number;
        sortedIndex( value:P,   iterator:ValueIterator<P,   any>, thisArg?:any ):number;
        sortedIndex( value:any, iterator:ValueIterator<any, any>, thisArg?:any ):number;
        sortedIndex( value:any, pluck   :string                                ):number;
        sortedIndex( value:any, where   :Dictionary<any>                       ):number;
    }
    //endregion

    //region union
    interface _Wrapper<W, P>{
        union<T>( ...arrays:Array<T>[] ):_ArrayWrapper<T>;
    }
    //endregion

    //region uniq
    interface _Wrapper<W, P>{
        uniq(                                                                     ):_ArrayWrapper<P>;
        uniq( iterator:FunctionWithThreeArguments<P, any, any, any>, thisArg?:any ):_ArrayWrapper<P>;
        uniq( isSorted:boolean                                                    ):_ArrayWrapper<P>;
        uniq( pluck   :string                                                     ):_ArrayWrapper<P>;
        uniq( where   :Dictionary<any>                                            ):_ArrayWrapper<P>;
    }
    interface _StringWrapper extends _Wrapper<string, string>{
        uniq(                                              ):_ArrayWrapper<string>;
        uniq( iterator:StringIterator<  any>, thisArg?:any ):_ArrayWrapper<string>;
        uniq( isSorted:boolean                             ):_ArrayWrapper<string>;
        uniq( pluck   :string                              ):_ArrayWrapper<string>;
        uniq( where   :Dictionary<any>                     ):_ArrayWrapper<string>;
    }
    interface _ArrayWrapper<P> extends _Wrapper<Array<P>, P>{
        uniq(                                              ):_ArrayWrapper<P     >;
        uniq( iterator:ArrayIterator<P, any>, thisArg?:any ):_ArrayWrapper<P     >;
        uniq( isSorted:boolean                             ):_ArrayWrapper<P     >;
        uniq( pluck   :string                              ):_ArrayWrapper<P     >;
        uniq( where   :Dictionary<any>                     ):_ArrayWrapper<P     >;
    }
    //endregion

    //region without
    interface _Wrapper<W, P>{
        without( ...values:any[] ):_ArrayWrapper<P>;
    }
    //endregion

    //region xor
    interface _Wrapper<W, P>{
        xor( ...arrays:Array<any>[] ):_ArrayWrapper<any>;
    }
    //endregion

    //region zip
    interface _Wrapper<W, P>{
        zip( ...vectors:any[]/* Array | string */ ):_ArrayWrapper<Array<any>>;
    }
    //endregion

    //region zipObject
    interface _Wrapper<W, P>{
        zipObject   (                 ):_DictionaryWrapper<any   >;
        zipObject   ( values:string   ):_DictionaryWrapper<string>;
        zipObject<T>( values:Array<T> ):_DictionaryWrapper<T     >;
    }
    //endregion

    //endregion

    //region Chaining

    //region chain
    interface _Wrapper<W, P>{
        chain():_Wrapper<W, P>;
    }
    //endregion

    //region tap
    interface _Wrapper<W, P>{
        tap( interceprtor:FunctionWithOneArgument<W, any> ):_Wrapper<W, P>;
    }
    //endregion

    //endregion

    //region Collections

    //region at
    interface _Wrapper<W, P>{
        at( ...index:any       [] ):_ArrayWrapper<P>;
        at( ...index:Array<any>[] ):_ArrayWrapper<P>;
    }
    interface _StringWrapper extends _Wrapper<string, string>{
        at( ...index:number       [] ):_ArrayWrapper<string>;
        at( ...index:Array<number>[] ):_ArrayWrapper<string>;
    }
    interface _ArrayWrapper<P> extends _Wrapper<Array<P>, P>{
        at( ...index:number       [] ):_ArrayWrapper<P     >;
        at( ...index:Array<number>[] ):_ArrayWrapper<P     >;
    }
    interface _DictionaryWrapper<P> extends _Wrapper<Dictionary<P>, P>{
        at( ...index:string       [] ):_ArrayWrapper<P     >;
        at( ...index:Array<string>[] ):_ArrayWrapper<P     >;
    }
    //endregion

    //region contains
    interface _Wrapper<W, P>{
        contains( target:any, fromIndex?:number ):boolean;
    }
    //endregion

    //region countBy
    interface _Wrapper<W, P>{
        countBy(                                                                     ):_DictionaryWrapper<number>;
        countBy( iterator:FunctionWithThreeArguments<P, any, any, any>, thisArg?:any ):_DictionaryWrapper<number>;
        countBy( pluck   :string                                                     ):_DictionaryWrapper<number>;
        countBy( where   :Dictionary<any>                                            ):_DictionaryWrapper<number>;
    }
    interface _StringWrapper extends _Wrapper<string, string>{
        countBy(                                                   ):_DictionaryWrapper<number>;
        countBy( iterator:StringIterator<       any>, thisArg?:any ):_DictionaryWrapper<number>;
        countBy( pluck   :string                                   ):_DictionaryWrapper<number>;
        countBy( where   :Dictionary<any>                          ):_DictionaryWrapper<number>;
    }
    interface _ArrayWrapper<P> extends _Wrapper<Array<P>, P>{
        countBy(                                                   ):_DictionaryWrapper<number>;
        countBy( iterator:ArrayIterator<     P, any>, thisArg?:any ):_DictionaryWrapper<number>;
        countBy( pluck   :string                                   ):_DictionaryWrapper<number>;
        countBy( where   :Dictionary<any>                          ):_DictionaryWrapper<number>;
    }
    interface _DictionaryWrapper<P> extends _Wrapper<Dictionary<P>, P>{
        countBy(                                                   ):_DictionaryWrapper<number>;
        countBy( iterator:DictionaryIterator<P, any>, thisArg?:any ):_DictionaryWrapper<number>;
        countBy( pluck   :string                                   ):_DictionaryWrapper<number>;
        countBy( where   :Dictionary<any>                          ):_DictionaryWrapper<number>;
    }
    //endregion

    //region every
    interface _Wrapper<W, P>{
        every(                                                                     ):boolean;
        every( iterator:FunctionWithThreeArguments<P, any, any, any>, thisArg?:any ):boolean;
        every( pluck   :string                                                     ):boolean;
        every( where   :Dictionary<any>                                            ):boolean;
    }
    interface _StringWrapper extends _Wrapper<string, string>{
        every(                                                   ):boolean;
        every( iterator:StringIterator<  any>,      thisArg?:any ):boolean;
        every( pluck   :string                                   ):boolean;
        every( where   :Dictionary<any>                          ):boolean;
    }
    interface _ArrayWrapper<P> extends _Wrapper<Array<P>, P>{
        every(                                                   ):boolean;
        every( iterator:ArrayIterator<P, any>,      thisArg?:any ):boolean;
        every( pluck   :string                                   ):boolean;
        every( where   :Dictionary<any>                          ):boolean;
    }
    interface _DictionaryWrapper<P> extends _Wrapper<Dictionary<P>, P>{
        every(                                                   ):boolean;
        every( iterator:DictionaryIterator<P, any>, thisArg?:any ):boolean;
        every( pluck   :string                                   ):boolean;
        every( where   :Dictionary<any>                          ):boolean;
    }
    //endregion

    //region filter
    interface _Wrapper<W, P>{
        filter(                                                                     ):_ArrayWrapper<P>;
        filter( iterator:FunctionWithThreeArguments<P, any, any, any>, thisArg?:any ):_ArrayWrapper<P>;
        filter( pluck   :string                                                     ):_ArrayWrapper<P>;
        filter( where   :Dictionary<any>                                            ):_ArrayWrapper<P>;
    }
    interface _StringWrapper extends _Wrapper<string, string>{
        filter(                                                   ):_ArrayWrapper<string>;
        filter( iterator:StringIterator<       any>, thisArg?:any ):_ArrayWrapper<string>;
        filter( pluck   :string                                   ):_ArrayWrapper<string>;
        filter( where   :Dictionary<any>                          ):_ArrayWrapper<string>;
    }
    interface _ArrayWrapper<P> extends _Wrapper<Array<P>, P>{
        filter(                                                   ):_ArrayWrapper<P     >;
        filter( iterator:ArrayIterator<     P, any>, thisArg?:any ):_ArrayWrapper<P     >;
        filter( pluck   :string                                   ):_ArrayWrapper<P     >;
        filter( where   :Dictionary<any>                          ):_ArrayWrapper<P     >;
    }
    interface _DictionaryWrapper<P> extends _Wrapper<Dictionary<P>, P>{
        filter(                                                   ):_ArrayWrapper<P     >;
        filter( iterator:DictionaryIterator<P, any>, thisArg?:any ):_ArrayWrapper<P     >;
        filter( pluck   :string                                   ):_ArrayWrapper<P     >;
        filter( where   :Dictionary<any>                          ):_ArrayWrapper<P     >;
    }
    //endregion

    //region find
    interface _Wrapper<W, P>{
        find(                                                                     ):P;
        find( iterator:FunctionWithThreeArguments<P, any, any, any>, thisArg?:any ):P;
        find( pluck   :string                                                     ):P;
        find( where   :Dictionary<any>                                            ):P;
    }
    interface _StringWrapper extends _Wrapper<string, string>{
        find(                                                   ):string;
        find( iterator:StringIterator<       any>, thisArg?:any ):string;
        find( pluck   :string                                   ):string;
        find( where   :Dictionary<any>                          ):string;
    }
    interface _ArrayWrapper<P> extends _Wrapper<Array<P>, P>{
        find(                                                   ):P;
        find( iterator:ArrayIterator<     P, any>, thisArg?:any ):P;
        find( pluck   :string                                   ):P;
        find( where   :Dictionary<any>                          ):P;
    }
    interface _DictionaryWrapper<P> extends _Wrapper<Dictionary<P>, P>{
        find(                                                   ):P;
        find( iterator:DictionaryIterator<P, any>, thisArg?:any ):P;
        find( pluck   :string                                   ):P;
        find( where   :Dictionary<any>                          ):P;
    }
    //endregion

    //region findLast
    interface _Wrapper<W, P>{
        findLast(                                                                     ):P;
        findLast( iterator:FunctionWithThreeArguments<P, any, any, any>, thisArg?:any ):P;
        findLast( pluck   :string                                                     ):P;
        findLast( where   :Dictionary<any>                                            ):P;
    }
    interface _StringWrapper extends _Wrapper<string, string>{
        findLast(                                                   ):string;
        findLast( iterator:StringIterator<       any>, thisArg?:any ):string;
        findLast( pluck   :string                                   ):string;
        findLast( where   :Dictionary<any>                          ):string;
    }
    interface _ArrayWrapper<P> extends _Wrapper<Array<P>, P>{
        findLast(                                                   ):P;
        findLast( iterator:ArrayIterator<     P, any>, thisArg?:any ):P;
        findLast( pluck   :string                                   ):P;
        findLast( where   :Dictionary<any>                          ):P;
    }
    interface _DictionaryWrapper<P> extends _Wrapper<Dictionary<P>, P>{
        findLast(                                                   ):P;
        findLast( iterator:DictionaryIterator<P, any>, thisArg?:any ):P;
        findLast( pluck   :string                                   ):P;
        findLast( where   :Dictionary<any>                          ):P;
    }
    //endregion

    //region forEach
    interface _Wrapper<W, P>{
        forEach(                                                                     ):_Wrapper<W, P>;
        forEach( iterator:FunctionWithThreeArguments<P, any, any, any>, thisArg?:any ):_Wrapper<W, P>;
    }
    interface _StringWrapper extends _Wrapper<string, string>{
        forEach(                                                   ):_StringWrapper;
        forEach( iterator:StringIterator<       any>, thisArg?:any ):_StringWrapper;
    }
    interface _ArrayWrapper<P> extends _Wrapper<Array<P>, P>{
        forEach(                                                   ):_ArrayWrapper<P     >;
        forEach( iterator:ArrayIterator<     P, any>, thisArg?:any ):_ArrayWrapper<P     >;
    }
    interface _DictionaryWrapper<P> extends _Wrapper<Dictionary<P>, P>{
        forEach(                                                   ):_DictionaryWrapper<P>;
        forEach( iterator:DictionaryIterator<P, any>, thisArg?:any ):_DictionaryWrapper<P>;
    }
    //endregion

    //region forEachRight
    interface _Wrapper<W, P>{
        forEachRight(                                                                     ):_Wrapper<W, P>;
        forEachRight( iterator:FunctionWithThreeArguments<P, any, any, any>, thisArg?:any ):_Wrapper<W, P>;
    }
    interface _StringWrapper extends _Wrapper<string, string>{
        forEachRight(                                                   ):_StringWrapper;
        forEachRight( iterator:StringIterator<       any>, thisArg?:any ):_StringWrapper;
    }
    interface _ArrayWrapper<P> extends _Wrapper<Array<P>, P>{
        forEachRight(                                                   ):_ArrayWrapper<P     >;
        forEachRight( iterator:ArrayIterator<     P, any>, thisArg?:any ):_ArrayWrapper<P     >;
    }
    interface _DictionaryWrapper<P> extends _Wrapper<Dictionary<P>, P>{
        forEachRight(                                                   ):_DictionaryWrapper<P>;
        forEachRight( iterator:DictionaryIterator<P, any>, thisArg?:any ):_DictionaryWrapper<P>;
    }
    //endregion

    //region groupBy
    interface _Wrapper<W, P>{
        groupBy(                                                                     ):_DictionaryWrapper<Array<P>>;
        groupBy( iterator:FunctionWithThreeArguments<P, any, any, any>, thisArg?:any ):_DictionaryWrapper<Array<P>>;
        groupBy( pluck   :string                                                     ):_DictionaryWrapper<Array<P>>;
        groupBy( where   :Dictionary<any>                                            ):_DictionaryWrapper<Array<P>>;
    }
    interface _StringWrapper extends _Wrapper<string, string>{
        groupBy(                                                   ):_DictionaryWrapper<Array<string>>;
        groupBy( iterator:StringIterator<       any>, thisArg?:any ):_DictionaryWrapper<Array<string>>;
        groupBy( pluck   :string                                   ):_DictionaryWrapper<Array<string>>;
        groupBy( where   :Dictionary<any>                          ):_DictionaryWrapper<Array<string>>;
    }
    interface _ArrayWrapper<P> extends _Wrapper<Array<P>, P>{
        groupBy(                                                   ):_DictionaryWrapper<Array<P     >>;
        groupBy( iterator:ArrayIterator<     P, any>, thisArg?:any ):_DictionaryWrapper<Array<P     >>;
        groupBy( pluck   :string                                   ):_DictionaryWrapper<Array<P     >>;
        groupBy( where   :Dictionary<any>                          ):_DictionaryWrapper<Array<P     >>;
    }
    interface _DictionaryWrapper<P> extends _Wrapper<Dictionary<P>, P>{
        groupBy(                                                   ):_DictionaryWrapper<Array<P     >>;
        groupBy( iterator:DictionaryIterator<P, any>, thisArg?:any ):_DictionaryWrapper<Array<P     >>;
        groupBy( pluck   :string                                   ):_DictionaryWrapper<Array<P     >>;
        groupBy( where   :Dictionary<any>                          ):_DictionaryWrapper<Array<P     >>;
    }
    //endregion

    //region indexBy
    interface _Wrapper<W, P>{
        indexBy(                                                                     ):_DictionaryWrapper<P>;
        indexBy( iterator:FunctionWithThreeArguments<P, any, any, any>, thisArg?:any ):_DictionaryWrapper<P>;
        indexBy( pluck   :string                                                     ):_DictionaryWrapper<P>;
        indexBy( where   :Dictionary<any>                                            ):_DictionaryWrapper<P>;
    }
    interface _StringWrapper extends _Wrapper<string, string>{
        indexBy(                                                   ):_DictionaryWrapper<string>;
        indexBy( iterator:StringIterator<       any>, thisArg?:any ):_DictionaryWrapper<string>;
        indexBy( pluck   :string                                   ):_DictionaryWrapper<string>;
        indexBy( where   :Dictionary<any>                          ):_DictionaryWrapper<string>;
    }
    interface _ArrayWrapper<P> extends _Wrapper<Array<P>, P>{
        indexBy(                                                   ):_DictionaryWrapper<P     >;
        indexBy( iterator:ArrayIterator<     P, any>, thisArg?:any ):_DictionaryWrapper<P     >;
        indexBy( pluck   :string                                   ):_DictionaryWrapper<P     >;
        indexBy( where   :Dictionary<any>                          ):_DictionaryWrapper<P     >;
    }
    interface _DictionaryWrapper<P> extends _Wrapper<Dictionary<P>, P>{
        indexBy(                                                   ):_DictionaryWrapper<P     >;
        indexBy( iterator:DictionaryIterator<P, any>, thisArg?:any ):_DictionaryWrapper<P     >;
        indexBy( pluck   :string                                   ):_DictionaryWrapper<P     >;
        indexBy( where   :Dictionary<any>                          ):_DictionaryWrapper<P     >;
    }
    //endregion

    //region invoke
    interface _Wrapper<W, P>{
        invoke   ( methodName:string,            ...arguments:any[] ):_ArrayWrapper<any>;
        invoke<R>( iterator  :CustomIterator<R>, ...arguments:any[] ):_ArrayWrapper<R  >;
    }
    //endregion

    //region map
    interface _Wrapper<W, P>{
        map   (                                                                     ):_ArrayWrapper<P      >;
        map   ( iterator:FunctionWithThreeArguments<P, any, any, any>, thisArg?:any ):_ArrayWrapper<any    >;
        map<R>( iterator:FunctionWithThreeArguments<P, any, any, R  >, thisArg?:any ):_ArrayWrapper<R      >;
        map   ( pluck   :string                                                     ):_ArrayWrapper<any    >;
        map   ( where   :Dictionary<any>                                            ):_ArrayWrapper<boolean>;
    }
    interface _StringWrapper extends _Wrapper<string, string>{
        map   (                                                   ):_ArrayWrapper<string>;
        map   ( iterator:StringIterator<       any>, thisArg?:any ):_ArrayWrapper<any   >;
        map<R>( iterator:StringIterator<       R  >, thisArg?:any ):_ArrayWrapper<R     >;
        map   ( pluck   :string                                   ):_ArrayWrapper<any   >;
        map   ( where   :Dictionary<any>                          ):_ArrayWrapper<boolean>;
    }
    interface _ArrayWrapper<P> extends _Wrapper<Array<P>, P>{
        map   (                                                   ):_ArrayWrapper<P      >;
        map   ( iterator:ArrayIterator<     P, any>, thisArg?:any ):_ArrayWrapper<any    >;
        map<R>( iterator:ArrayIterator<     P, R  >, thisArg?:any ):_ArrayWrapper<R      >;
        map   ( pluck   :string                                   ):_ArrayWrapper<any    >;
        map   ( where   :Dictionary<any>                          ):_ArrayWrapper<boolean>;
    }
    interface _DictionaryWrapper<P> extends _Wrapper<Dictionary<P>, P>{
        map   (                                                   ):_ArrayWrapper<P      >;
        map   ( iterator:DictionaryIterator<P, any>, thisArg?:any ):_ArrayWrapper<any    >;
        map<R>( iterator:DictionaryIterator<P, R  >, thisArg?:any ):_ArrayWrapper<R      >;
        map   ( pluck   :string                                   ):_ArrayWrapper<any    >;
        map   ( where   :Dictionary<any>                          ):_ArrayWrapper<boolean>;
    }
    //endregion

    //region max
    interface _Wrapper<W, P>{
        max(                                                                     ):_Wrapper<any, any>;
        max( iterator:FunctionWithThreeArguments<P, any, any, any>, thisArg?:any ):_Wrapper<any, any>;
        max( pluck   :string                                                     ):_Wrapper<any, any>;
        max( where   :Dictionary<any>                                            ):_Wrapper<any, any>;
    }
    interface _StringWrapper extends _Wrapper<string, string>{
        max(                                                   ):_StringWrapper;
        max( iterator:StringIterator<       any>, thisArg?:any ):_StringWrapper;
        max( pluck   :string                                   ):_StringWrapper;
        max( where   :Dictionary<any>                          ):_StringWrapper;
    }
    interface _ArrayWrapper<P> extends _Wrapper<Array<P>, P>{
        max(                                                   ):_Wrapper<any, any>;
        max( iterator:ArrayIterator<     P, any>, thisArg?:any ):_Wrapper<any, any>;
        max( pluck   :string                                   ):_Wrapper<any, any>;
        max( where   :Dictionary<any>                          ):_Wrapper<any, any>;
    }
    interface _DictionaryWrapper<P> extends _Wrapper<Dictionary<P>, P>{
        max(                                                   ):_Wrapper<any, any>;
        max( iterator:DictionaryIterator<P, any>, thisArg?:any ):_Wrapper<any, any>;
        max( pluck   :string                                   ):_Wrapper<any, any>;
        max( where   :Dictionary<any>                          ):_Wrapper<any, any>;
    }
    //endregion

    //region min
    interface _Wrapper<W, P>{
        min(                                                                     ):_Wrapper<any, any>;
        min( iterator:FunctionWithThreeArguments<P, any, any, any>, thisArg?:any ):_Wrapper<any, any>;
        min( pluck   :string                                                     ):_Wrapper<any, any>;
        min( where   :Dictionary<any>                                            ):_Wrapper<any, any>;
    }
    interface _StringWrapper extends _Wrapper<string, string>{
        min(                                                   ):_StringWrapper;
        min( iterator:StringIterator<       any>, thisArg?:any ):_StringWrapper;
        min( pluck   :string                                   ):_StringWrapper;
        min( where   :Dictionary<any>                          ):_StringWrapper;
    }
    interface _ArrayWrapper<P> extends _Wrapper<Array<P>, P>{
        min(                                                   ):_Wrapper<any, any>;
        min( iterator:ArrayIterator<     P, any>, thisArg?:any ):_Wrapper<any, any>;
        min( pluck   :string                                   ):_Wrapper<any, any>;
        min( where   :Dictionary<any>                          ):_Wrapper<any, any>;
    }
    interface _DictionaryWrapper<P> extends _Wrapper<Dictionary<P>, P>{
        min(                                                   ):_Wrapper<any, any>;
        min( iterator:DictionaryIterator<P, any>, thisArg?:any ):_Wrapper<any, any>;
        min( pluck   :string                                   ):_Wrapper<any, any>;
        min( where   :Dictionary<any>                          ):_Wrapper<any, any>;
    }
    //endregion

    //region pluck
    interface _Wrapper<W, P>{
        pluck( property:string ):_ArrayWrapper<any>;
    }
    //endregion

    //region reduce
    interface _Wrapper<W, P>{
        reduce   (                                                                                        ):P;
        reduce<A>( callback:FunctionWithFourArguments<A,   P, any, P, A  >                                ):A;
        reduce<A>( callback:FunctionWithFourArguments<A,   P, any, P, A  >, accumulator:A,   thisArg?:any ):A;
    }
    interface _StringWrapper extends _Wrapper<string, string>{
        reduce   (                                                                                  ):string;
        reduce<A>( callback:AccumulatingStringIterator<    A,       A>                              ):A;
        reduce<A>( callback:AccumulatingStringIterator<    A,       A>, accumulator:A, thisArg?:any ):A;
    }
    interface _ArrayWrapper<P> extends _Wrapper<Array<P>, P>{
        reduce   (                                                                                  ):P;
        reduce<A>( callback:AccumulatingArrayIterator<     A, P, P, A>                              ):A;
        reduce<A>( callback:AccumulatingArrayIterator<     A, P, P, A>, accumulator:A, thisArg?:any ):A;
    }
    interface _DictionaryWrapper<P> extends _Wrapper<Dictionary<P>, P>{
        reduce   (                                                                                  ):P;
        reduce<A>( callback:AccumulatingDictionaryIterator<A, P, P, A>                              ):A;
        reduce<A>( callback:AccumulatingDictionaryIterator<A, P, P, A>, accumulator:A, thisArg?:any ):A;
    }
    //endregion

    //region reduceRight
    interface _Wrapper<W, P>{
        reduceRight   (                                                                                        ):P;
        reduceRight<A>( callback:FunctionWithFourArguments<A,   P, any, P, A  >                                ):A;
        reduceRight<A>( callback:FunctionWithFourArguments<A,   P, any, P, A  >, accumulator:A,   thisArg?:any ):A;
    }
    interface _StringWrapper extends _Wrapper<string, string>{
        reduceRight   (                                                                                  ):string;
        reduceRight<A>( callback:AccumulatingStringIterator<    A,       A>                              ):A;
        reduceRight<A>( callback:AccumulatingStringIterator<    A,       A>, accumulator:A, thisArg?:any ):A;
    }
    interface _ArrayWrapper<P> extends _Wrapper<Array<P>, P>{
        reduceRight   (                                                                                  ):P;
        reduceRight<A>( callback:AccumulatingArrayIterator<     A, P, P, A>                              ):A;
        reduceRight<A>( callback:AccumulatingArrayIterator<     A, P, P, A>, accumulator:A, thisArg?:any ):A;
    }
    interface _DictionaryWrapper<P> extends _Wrapper<Dictionary<P>, P>{
        reduceRight   (                                                                                  ):P;
        reduceRight<A>( callback:AccumulatingDictionaryIterator<A, P, P, A>                              ):A;
        reduceRight<A>( callback:AccumulatingDictionaryIterator<A, P, P, A>, accumulator:A, thisArg?:any ):A;
    }
    //endregion

    //region reject
    interface _Wrapper<W, P>{
        reject(                                                                     ):_ArrayWrapper<P>;
        reject( iterator:FunctionWithThreeArguments<P, any, any, any>, thisArg?:any ):_ArrayWrapper<P>;
        reject( pluck   :string                                                     ):_ArrayWrapper<P>;
        reject( where   :Dictionary<any>                                            ):_ArrayWrapper<P>;
    }
    interface _StringWrapper extends _Wrapper<string, string>{
        reject(                                                   ):_ArrayWrapper<string>;
        reject( iterator:StringIterator<       any>, thisArg?:any ):_ArrayWrapper<string>;
        reject( pluck   :string                                   ):_ArrayWrapper<string>;
        reject( where   :Dictionary<any>                          ):_ArrayWrapper<string>;
    }
    interface _ArrayWrapper<P> extends _Wrapper<Array<P>, P>{
        reject(                                                   ):_ArrayWrapper<P     >;
        reject( iterator:ArrayIterator<     P, any>, thisArg?:any ):_ArrayWrapper<P     >;
        reject( pluck   :string                                   ):_ArrayWrapper<P     >;
        reject( where   :Dictionary<any>                          ):_ArrayWrapper<P     >;
    }
    interface _DictionaryWrapper<P> extends _Wrapper<Dictionary<P>, P>{
        reject(                                                   ):_ArrayWrapper<P     >;
        reject( iterator:DictionaryIterator<P, any>, thisArg?:any ):_ArrayWrapper<P     >;
        reject( pluck   :string                                   ):_ArrayWrapper<P     >;
        reject( where   :Dictionary<any>                          ):_ArrayWrapper<P     >;
    }
    //endregion

    //region sample
    interface _Wrapper<W, P>{
        sample(              ):P;
        sample( count:number ):_ArrayWrapper<P>;
    }
    //endregion

    //region shuffle
    interface _Wrapper<W, P>{
        shuffle():_ArrayWrapper<P>;
    }
    //endregion

    //region size
    interface _Wrapper<W, P>{
        size():number;
    }
    //endregion

    //region some
    interface _Wrapper<W, P>{
        some(                                                                     ):boolean;
        some( iterator:FunctionWithThreeArguments<P, any, any, any>, thisArg?:any ):boolean;
        some( pluck   :string                                                     ):boolean;
        some( where   :Dictionary<any>                                            ):boolean;
    }
    interface _StringWrapper extends _Wrapper<string, string>{
        some(                                                   ):boolean;
        some( iterator:StringIterator<       any>, thisArg?:any ):boolean;
        some( pluck   :string                                   ):boolean;
        some( where   :Dictionary<any>                          ):boolean;
    }
    interface _ArrayWrapper<P> extends _Wrapper<Array<P>, P>{
        some(                                                   ):boolean;
        some( iterator:ArrayIterator<     P, any>, thisArg?:any ):boolean;
        some( pluck   :string                                   ):boolean;
        some( where   :Dictionary<any>                          ):boolean;
    }
    interface _DictionaryWrapper<P> extends _Wrapper<Dictionary<P>, P>{
        some(                                                   ):boolean;
        some( iterator:DictionaryIterator<P, any>, thisArg?:any ):boolean;
        some( pluck   :string                                   ):boolean;
        some( where   :Dictionary<any>                          ):boolean;
    }
    //endregion

    //region sortBy
    interface _Wrapper<W, P>{
        sortBy(                                                                     ):_ArrayWrapper<P>;
        sortBy( iterator:FunctionWithThreeArguments<P, any, any, any>, thisArg?:any ):_ArrayWrapper<P>;
        sortBy( pluck   :string                                                     ):_ArrayWrapper<P>;
        sortBy( where   :Dictionary<any>                                            ):_ArrayWrapper<P>;
    }
    interface _StringWrapper extends _Wrapper<string, string>{
        sortBy(                                                   ):_ArrayWrapper<string>;
        sortBy( iterator:StringIterator<       any>, thisArg?:any ):_ArrayWrapper<string>;
        sortBy( pluck   :string                                   ):_ArrayWrapper<string>;
        sortBy( where   :Dictionary<any>                          ):_ArrayWrapper<string>;
    }
    interface _ArrayWrapper<P> extends _Wrapper<Array<P>, P>{
        sortBy(                                                   ):_ArrayWrapper<P     >;
        sortBy( iterator:ArrayIterator<     P, any>, thisArg?:any ):_ArrayWrapper<P     >;
        sortBy( pluck   :string                                   ):_ArrayWrapper<P     >;
        sortBy( where   :Dictionary<any>                          ):_ArrayWrapper<P     >;
    }
    interface _DictionaryWrapper<P> extends _Wrapper<Dictionary<P>, P>{
        sortBy(                                                   ):_ArrayWrapper<P     >;
        sortBy( iterator:DictionaryIterator<P, any>, thisArg?:any ):_ArrayWrapper<P     >;
        sortBy( pluck   :string                                   ):_ArrayWrapper<P     >;
        sortBy( where   :Dictionary<any>                          ):_ArrayWrapper<P     >;
    }
    //endregion

    //region toArray
    interface _Wrapper<W, P>{
        toArray():_ArrayWrapper<P>;
    }
    //endregion

    //region where
    interface _Wrapper<W, P>{
        where( properties:Dictionary<any> ):_ArrayWrapper<P>;
    }
    //endregion

    //endregion

    //region Functions

    //region after
    interface _Wrapper<W, P>{
        after( callback:GenericFunction<any> ):_FunctionWrapper<GenericFunction<any>>;
    }
    //endregion

    //region bind
    interface _Wrapper<W, P>{
        bind(                                 ):_FunctionWrapper<W>;
        bind( thisArg:any, ...arguments:any[] ):_FunctionWrapper<W>;
    }
    //endregion

    //region bindAll
    interface _Wrapper<W, P>{
        bindAll( ...methodNames:string[] ):_DictionaryWrapper<P>;
    }
    //endregion

    //region bindKey
    interface _Wrapper<W, P>{
        bindKey( key:string, ...arguments:any[] ):_FunctionWrapper<GenericFunction<any>>;
    }
    //endregion

    //region compose
    interface _Wrapper<W, P>{
        compose( ...functions:GenericFunction<any>[] ):_FunctionWrapper<GenericFunction<any>>;
    }
    //endregion

    //region curry
    interface _Wrapper<W, P>{
        curry( artiy?:number ):_FunctionWrapper<W>;
    }
    //endregion

    //region debounce
    interface _Wrapper<W, P>{
        debounce( wait:number, options?:DebounceOptions ):_FunctionWrapper<W>;
    }
    //endregion

    //region defer
    interface _Wrapper<W, P>{
        defer( ...arguments:any[] ):_NumberWrapper;
    }
    //endregion

    //region delay
    interface _Wrapper<W, P>{
        delay( wait:number, ...arguments:any[] ):_NumberWrapper;
    }
    //endregion

    //region memoize
    interface _Wrapper<W, P>{
        memoize( resolver?:Function ):_FunctionWrapper<W>;
    }
    //endregion

    //region once
    interface _Wrapper<W, P>{
        once():_FunctionWrapper<W>;
    }
    //endregion

    //region partial
    interface _Wrapper<W, P>{
        partial( ...arguments:any[] ):_FunctionWrapper<W>;
    }
    //endregion

    //region partialRight
    interface _Wrapper<W, P>{
        partialRight( ...arguments:any[] ):_FunctionWrapper<W>;
    }
    //endregion

    //region throttle
    interface _Wrapper<W, P>{
        throttle( wait:number, options?:ThrottleOptions ):_FunctionWrapper<W>;
    }
    //endregion

    //region wrap
    interface _Wrapper<W, P>{
        wrap( wrapper:WrapperFunction<W, any> ):_FunctionWrapper<GenericFunction<any>>;
    }
    //endregion

    //endregion

    //region Objects

    //region assign
    interface _Wrapper<W, P>{
        assign( ...arguments:any[] ):_DictionaryWrapper<any>;
    }
    //endregion

    //region clone
    interface _Wrapper<W, P>{
        clone   (                                                              ):P;
        clone   ( isDeep:boolean                                               ):P;
        clone   ( isDeep:boolean, callback:CloneFunction<P, any>, thisArg?:any ):any;
        clone<R>( isDeep:boolean, callback:CloneFunction<P, R  >, thisArg?:any ):R;
        clone   (                 callback:CloneFunction<P, any>, thisArg?:any ):any;
        clone<R>(                 callback:CloneFunction<P, R  >, thisArg?:any ):R;
    }
    //endregion

    //region cloneDeep
    interface _Wrapper<W, P>{
        cloneDeep   (                                              ):P;
        cloneDeep   ( callback:CloneFunction<P, any>, thisArg?:any ):any;
        cloneDeep<R>( callback:CloneFunction<P, R  >, thisArg?:any ):R;
    }
    //endregion

    //region create
    interface _Wrapper<W, P>{
        create( properties?:Dictionary<any> ):_DictionaryWrapper<any>;
    }
    //endregion

    //region defaults
    interface _Wrapper<W, P>{
        defaults( ...sources:Dictionary<any>[] ):_DictionaryWrapper<any>;
    }
    //endregion

    //region findKey
    interface _Wrapper<W, P>{
        findKey(                                                   ):string;
        findKey( callback:DictionaryIterator<P, any>, thisArg?:any ):string;
        findKey( pluck   :any                                      ):string;
        findKey( where   :Dictionary<any>                          ):string;
    }
    //endregion

    //region findLastKey
    interface _Wrapper<W, P>{
        findLastKey(                                                   ):string;
        findLastKey( callback:DictionaryIterator<P, any>, thisArg?:any ):string;
        findLastKey( pluck   :any                                      ):string;
        findLastKey( where   :Dictionary<any>                          ):string;
    }
    //endregion

    //region forIn
    interface _Wrapper<W, P>{
        forIn( iterator?:DictionaryIterator<P, any>, thisArg?:any ):_DictionaryWrapper<P>;
    }
    //endregion

    //region forInRight
    interface _Wrapper<W, P>{
        forInRight( iterator?:DictionaryIterator<P, any>, thisArg?:any ):_DictionaryWrapper<P>;
    }
    //endregion

    //region forOwn
    interface _Wrapper<W, P>{
        forOwn( iterator?:DictionaryIterator<P, any>, thisArg?:any ):_DictionaryWrapper<P>;
    }
    //endregion

    //region forOwnRight
    interface _Wrapper<W, P>{
        forOwnRight( iterator?:DictionaryIterator<P, any>, thisArg?:any ):_DictionaryWrapper<P>;
    }
    //endregion

    //region functions
    interface _Wrapper<W, P>{
        functions():_ArrayWrapper<string>;
    }
    //endregion

    //region has
    interface _Wrapper<W, P>{
        has( key:string ):boolean;
    }
    //endregion

    //region invert
    interface _Wrapper<W, P>{
        invert():_DictionaryWrapper<string>;
    }
    //endregion

    //region isArguments
    interface _Wrapper<W, P>{
        isArguments():boolean;
    }
    //endregion

    //region isArray
    interface _Wrapper<W, P>{
        isArray():boolean;
    }
    //endregion

    //region isDate
    interface _Wrapper<W, P>{
        isDate():boolean;
    }
    //endregion

    //region isElement
    interface _Wrapper<W, P>{
        isElement():boolean;
    }
    //endregion

    //region isEmpty
    interface _Wrapper<W, P>{
        isEmpty():boolean;
    }
    //endregion

    //region isEqual
    interface _Wrapper<W, P>{
        isEqual   ( b:any, callback:ComparisonFunction<P, any, any>, thisArg?:any ):boolean;
        isEqual<B>( b:B,   callback:ComparisonFunction<P, B,   any>, thisArg?:any ):boolean;
    }
    //endregion

    //region isFinite
    interface _Wrapper<W, P>{
        isFinite():boolean;
    }
    //endregion

    //region isFunction
    interface _Wrapper<W, P>{
        isFunction():boolean;
    }
    //endregion

    //region isNaN
    interface _Wrapper<W, P>{
        isNaN():boolean;
    }
    //endregion

    //region isNull
    interface _Wrapper<W, P>{
        isNull():boolean;
    }
    //endregion

    //region isNumber
    interface _Wrapper<W, P>{
        isNumber():boolean;
    }
    //endregion

    //region isObject
    interface _Wrapper<W, P>{
        isObject():boolean;
    }
    //endregion

    //region isPlainObject
    interface _Wrapper<W, P>{
        isPlainObject():boolean;
    }
    //endregion

    //region isRegExp
    interface _Wrapper<W, P>{
        isRegExp():boolean;
    }
    //endregion

    //region isString
    interface _Wrapper<W, P>{
        isString():boolean;
    }
    //endregion

    //region isUndefined
    interface _Wrapper<W, P>{
        isUndefined():boolean;
    }
    //endregion

    //region keys
    interface _Wrapper<W, P>{
        keys():_ArrayWrapper<string>;
    }
    //endregion

    //region mapValues
    interface _Wrapper<W, P>{
        mapValues   (                                                   ):_DictionaryWrapper<P  >;
        mapValues   ( iterator:DictionaryIterator<P, any>, thisArg?:any ):_DictionaryWrapper<any>;
        mapValues<R>( iterator:DictionaryIterator<P, R  >, thisArg?:any ):_DictionaryWrapper<R  >;
        mapValues   ( pluck   :string                                   ):_DictionaryWrapper<P  >;
        mapValues   ( where   :Dictionary<any>                          ):_DictionaryWrapper<P  >;
    }
    //endregion

    //region merge
    interface _Wrapper<W, P>{
        merge( ...arguments:any[] ):_DictionaryWrapper<any>;
    }
    //endregion

    //region omit
    interface _Wrapper<W, P>{
        omit(                                                        ):_DictionaryWrapper<P>;
        omit(    callback  :DictionaryIterator<P, any>, thisArg?:any ):_DictionaryWrapper<P>;
        omit( ...properties:any[] /* string | Array<string> */       ):_DictionaryWrapper<P>;
    }
    //endregion

    //region pairs
    interface _Wrapper<W, P>{
        pairs():_ArrayWrapper<Array<any>>;
    }
    //endregion

    //region pick
    interface _Wrapper<W, P>{
        pick(                                                        ):_DictionaryWrapper<P>;
        pick(    callback  :DictionaryIterator<P, any>, thisArg?:any ):_DictionaryWrapper<P>;
        pick( ...properties:any[] /* string | Array<string> */       ):_DictionaryWrapper<P>;
    }
    //endregion

    //region transform
    interface _Wrapper<W, P>{
        transform    (                                                                                             ):_Wrapper<any, P  >;
        transform    ( iterator:FunctionWithFourArguments<any,  any, any, any, any>                                ):_Wrapper<any, any>;
        transform<AV>( iterator:FunctionWithFourArguments<any,  any, any, any, any>                                ):_Wrapper<any, AV >;
        transform    ( iterator:FunctionWithFourArguments<any,  any, any, any, any>, accumulator:any, thisArg?:any ):_Wrapper<any, any>;
        transform<A >( iterator:FunctionWithFourArguments<A,    any, any, any, any>, accumulator:A,   thisArg?:any ):_Wrapper<A,   any>;
    }
    interface _ArrayWrapper<P> extends _Wrapper<Array<P>, P>{
        transform    (                                                                                                   ):_ArrayWrapper<          P  >;
        transform    ( iterator:AccumulatingArrayIterator<     any,            P, P, any>                                ):_ArrayWrapper<          any>;
        transform<AV>( iterator:AccumulatingArrayIterator<     Array<     AV>, P, P, any>                                ):_ArrayWrapper<          AV >;
        transform    ( iterator:AccumulatingArrayIterator<     any,            P, P, any>, accumulator:any, thisArg?:any ):_Wrapper<          any, any>;
        transform<A >( iterator:AccumulatingArrayIterator<     A,              P, P, any>, accumulator:A,   thisArg?:any ):_Wrapper<          A,   any>;
    }
    interface _DictionaryWrapper<P> extends _Wrapper<Dictionary<P>, P>{
        transform    (                                                                                                   ):_DictionaryWrapper<     P  >;
        transform    ( iterator:AccumulatingDictionaryIterator<any,            P, P, any>                                ):_DictionaryWrapper<     any>;
        transform<AV>( iterator:AccumulatingDictionaryIterator<Dictionary<AV>, P, P, any>                                ):_DictionaryWrapper<     AV >;
        transform    ( iterator:AccumulatingDictionaryIterator<any,            P, P, any>, accumulator:any, thisArg?:any ):_Wrapper<          any, any>;
        transform<A >( iterator:AccumulatingDictionaryIterator<A,              P, P, any>, accumulator:A,   thisArg?:any ):_Wrapper<          A,   any>;
    }
    //endregion

    //region values
    interface _Wrapper<W, P>{
        values():_ArrayWrapper<P>;
    }
    //endregion

    //endregion

    //region Utilities

    //region now
    interface _Wrapper<W, P>{
        now():number;
    }
    //endregion

    //region constant
    interface _Wrapper<W, P>{
        constant():_FunctionWrapper<ConstantFunction<W>>;
    }
    //endregion

    //region createCallback
    interface _Wrapper<W, P>{
        createCallback():_FunctionWrapper<GenericFunction<any>>;
    }
    interface _EmptyWrapper extends _Wrapper<any, any>{
        createCallback(                              ):_FunctionWrapper<IdentityFunction<any>>;
    }
    interface _StringWrapper extends _Wrapper<string, string>{
        createCallback(                              ):_FunctionWrapper<PropertyFunction<any>>;
    }
    interface _DictionaryWrapper<P> extends _Wrapper<Dictionary<P>, P>{
        createCallback(                              ):_FunctionWrapper<WhereFunction<any   >>;
    }
    interface _FunctionWrapper<W> extends _Wrapper<W, any>{
        createCallback(thisArg?:any, argCount?:number):_FunctionWrapper<GenericFunction<any >>;
    }
    //endregion

    //region escape
    interface _Wrapper<W, P>{
        escape():string;
    }
    //endregion

    //region identity
    interface _Wrapper<W, P>{
        identity():W;
    }
    //endregion

    //region mixin
    interface _Wrapper<W, P>{
        mixin(                                              ):void;
        mixin(                         isChain:boolean      ):void;
        mixin(                         options:MixinOptions ):void;
        mixin( source:Dictionary<any>                       ):void;
        mixin( source:Dictionary<any>, isChain:boolean      ):void;
        mixin( source:Dictionary<any>, options:MixinOptions ):void;
    }
    //endregion

    //region noConflict
    interface _Wrapper<W, P>{
        noConflict():Ctor;
    }
    //endregion

    //region noop
    interface _Wrapper<W, P>{
        noop():void;
    }
    //endregion

    //region parseInt
    interface _Wrapper<W, P>{
        parseInt( radix?:number ):number;
    }
    //endregion

    //region property
    interface _Wrapper<W, P>{
        property<T>():_FunctionWrapper<PropertyFunction<T>>;
    }
    //endregion

    //region random
    interface _Wrapper<W, P>{
        random(                              ):number;
        random( max:number                   ):number;
        random( max:number, floating:boolean ):number;
    }
    //endregion

    //region result
    interface _Wrapper<W, P>{
        result( key:string ):P;
    }
    //endregion

    //region runInContext
    interface _Wrapper<W, P>{
        runInContext():Ctor;
    }
    //endregion

    //region template
    interface _Wrapper<W, P>{
        template<DV>(                                                ):PartialTemplateFunction<DV>;
        template    ( data:Dictionary<any>, options?:TemplateOptions ):string;
    }
    //endregion

    //region times
    interface _Wrapper<W, P>{
        times<R>(callback:GenericFunction<R>, thisArg?:any ):_ArrayWrapper<R>;
    }
    //endregion

    //region unescape
    interface _Wrapper<W, P>{
        unescape():string;
    }
    //endregion

    //region uniqueId
    interface _Wrapper<W, P>{
        uniqueId():string;
    }
    //endregion

    //endregion

    //endregion

}

declare module "lo-dash" {
    export = _;
}