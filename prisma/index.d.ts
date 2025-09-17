
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Background
 * 
 */
export type Background = $Result.DefaultSelection<Prisma.$BackgroundPayload>
/**
 * Model BackgroundFeature
 * 
 */
export type BackgroundFeature = $Result.DefaultSelection<Prisma.$BackgroundFeaturePayload>
/**
 * Model Class
 * 
 */
export type Class = $Result.DefaultSelection<Prisma.$ClassPayload>
/**
 * Model ClassLong
 * 
 */
export type ClassLong = $Result.DefaultSelection<Prisma.$ClassLongPayload>
/**
 * Model Race
 * 
 */
export type Race = $Result.DefaultSelection<Prisma.$RacePayload>
/**
 * Model Trait
 * 
 */
export type Trait = $Result.DefaultSelection<Prisma.$TraitPayload>
/**
 * Model SubRace
 * 
 */
export type SubRace = $Result.DefaultSelection<Prisma.$SubRacePayload>
/**
 * Model Spell
 * 
 */
export type Spell = $Result.DefaultSelection<Prisma.$SpellPayload>
/**
 * Model Subclass
 * 
 */
export type Subclass = $Result.DefaultSelection<Prisma.$SubclassPayload>
/**
 * Model MagicItem
 * 
 */
export type MagicItem = $Result.DefaultSelection<Prisma.$MagicItemPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Backgrounds
 * const backgrounds = await prisma.background.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Backgrounds
   * const backgrounds = await prisma.background.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.background`: Exposes CRUD operations for the **Background** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Backgrounds
    * const backgrounds = await prisma.background.findMany()
    * ```
    */
  get background(): Prisma.BackgroundDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.backgroundFeature`: Exposes CRUD operations for the **BackgroundFeature** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BackgroundFeatures
    * const backgroundFeatures = await prisma.backgroundFeature.findMany()
    * ```
    */
  get backgroundFeature(): Prisma.BackgroundFeatureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.class`: Exposes CRUD operations for the **Class** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.class.findMany()
    * ```
    */
  get class(): Prisma.ClassDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classLong`: Exposes CRUD operations for the **ClassLong** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClassLongs
    * const classLongs = await prisma.classLong.findMany()
    * ```
    */
  get classLong(): Prisma.ClassLongDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.race`: Exposes CRUD operations for the **Race** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Races
    * const races = await prisma.race.findMany()
    * ```
    */
  get race(): Prisma.RaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trait`: Exposes CRUD operations for the **Trait** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Traits
    * const traits = await prisma.trait.findMany()
    * ```
    */
  get trait(): Prisma.TraitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subRace`: Exposes CRUD operations for the **SubRace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubRaces
    * const subRaces = await prisma.subRace.findMany()
    * ```
    */
  get subRace(): Prisma.SubRaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.spell`: Exposes CRUD operations for the **Spell** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Spells
    * const spells = await prisma.spell.findMany()
    * ```
    */
  get spell(): Prisma.SpellDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subclass`: Exposes CRUD operations for the **Subclass** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subclasses
    * const subclasses = await prisma.subclass.findMany()
    * ```
    */
  get subclass(): Prisma.SubclassDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.magicItem`: Exposes CRUD operations for the **MagicItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MagicItems
    * const magicItems = await prisma.magicItem.findMany()
    * ```
    */
  get magicItem(): Prisma.MagicItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Background: 'Background',
    BackgroundFeature: 'BackgroundFeature',
    Class: 'Class',
    ClassLong: 'ClassLong',
    Race: 'Race',
    Trait: 'Trait',
    SubRace: 'SubRace',
    Spell: 'Spell',
    Subclass: 'Subclass',
    MagicItem: 'MagicItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "background" | "backgroundFeature" | "class" | "classLong" | "race" | "trait" | "subRace" | "spell" | "subclass" | "magicItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Background: {
        payload: Prisma.$BackgroundPayload<ExtArgs>
        fields: Prisma.BackgroundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BackgroundFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BackgroundFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundPayload>
          }
          findFirst: {
            args: Prisma.BackgroundFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BackgroundFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundPayload>
          }
          findMany: {
            args: Prisma.BackgroundFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundPayload>[]
          }
          create: {
            args: Prisma.BackgroundCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundPayload>
          }
          createMany: {
            args: Prisma.BackgroundCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BackgroundCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundPayload>[]
          }
          delete: {
            args: Prisma.BackgroundDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundPayload>
          }
          update: {
            args: Prisma.BackgroundUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundPayload>
          }
          deleteMany: {
            args: Prisma.BackgroundDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BackgroundUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BackgroundUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundPayload>[]
          }
          upsert: {
            args: Prisma.BackgroundUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundPayload>
          }
          aggregate: {
            args: Prisma.BackgroundAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBackground>
          }
          groupBy: {
            args: Prisma.BackgroundGroupByArgs<ExtArgs>
            result: $Utils.Optional<BackgroundGroupByOutputType>[]
          }
          count: {
            args: Prisma.BackgroundCountArgs<ExtArgs>
            result: $Utils.Optional<BackgroundCountAggregateOutputType> | number
          }
        }
      }
      BackgroundFeature: {
        payload: Prisma.$BackgroundFeaturePayload<ExtArgs>
        fields: Prisma.BackgroundFeatureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BackgroundFeatureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundFeaturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BackgroundFeatureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundFeaturePayload>
          }
          findFirst: {
            args: Prisma.BackgroundFeatureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundFeaturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BackgroundFeatureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundFeaturePayload>
          }
          findMany: {
            args: Prisma.BackgroundFeatureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundFeaturePayload>[]
          }
          create: {
            args: Prisma.BackgroundFeatureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundFeaturePayload>
          }
          createMany: {
            args: Prisma.BackgroundFeatureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BackgroundFeatureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundFeaturePayload>[]
          }
          delete: {
            args: Prisma.BackgroundFeatureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundFeaturePayload>
          }
          update: {
            args: Prisma.BackgroundFeatureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundFeaturePayload>
          }
          deleteMany: {
            args: Prisma.BackgroundFeatureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BackgroundFeatureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BackgroundFeatureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundFeaturePayload>[]
          }
          upsert: {
            args: Prisma.BackgroundFeatureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackgroundFeaturePayload>
          }
          aggregate: {
            args: Prisma.BackgroundFeatureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBackgroundFeature>
          }
          groupBy: {
            args: Prisma.BackgroundFeatureGroupByArgs<ExtArgs>
            result: $Utils.Optional<BackgroundFeatureGroupByOutputType>[]
          }
          count: {
            args: Prisma.BackgroundFeatureCountArgs<ExtArgs>
            result: $Utils.Optional<BackgroundFeatureCountAggregateOutputType> | number
          }
        }
      }
      Class: {
        payload: Prisma.$ClassPayload<ExtArgs>
        fields: Prisma.ClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findFirst: {
            args: Prisma.ClassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findMany: {
            args: Prisma.ClassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          create: {
            args: Prisma.ClassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          createMany: {
            args: Prisma.ClassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          delete: {
            args: Prisma.ClassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          update: {
            args: Prisma.ClassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          deleteMany: {
            args: Prisma.ClassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          upsert: {
            args: Prisma.ClassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          aggregate: {
            args: Prisma.ClassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClass>
          }
          groupBy: {
            args: Prisma.ClassGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassCountArgs<ExtArgs>
            result: $Utils.Optional<ClassCountAggregateOutputType> | number
          }
        }
      }
      ClassLong: {
        payload: Prisma.$ClassLongPayload<ExtArgs>
        fields: Prisma.ClassLongFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassLongFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassLongPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassLongFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassLongPayload>
          }
          findFirst: {
            args: Prisma.ClassLongFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassLongPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassLongFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassLongPayload>
          }
          findMany: {
            args: Prisma.ClassLongFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassLongPayload>[]
          }
          create: {
            args: Prisma.ClassLongCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassLongPayload>
          }
          createMany: {
            args: Prisma.ClassLongCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassLongCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassLongPayload>[]
          }
          delete: {
            args: Prisma.ClassLongDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassLongPayload>
          }
          update: {
            args: Prisma.ClassLongUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassLongPayload>
          }
          deleteMany: {
            args: Prisma.ClassLongDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassLongUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassLongUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassLongPayload>[]
          }
          upsert: {
            args: Prisma.ClassLongUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassLongPayload>
          }
          aggregate: {
            args: Prisma.ClassLongAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassLong>
          }
          groupBy: {
            args: Prisma.ClassLongGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassLongGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassLongCountArgs<ExtArgs>
            result: $Utils.Optional<ClassLongCountAggregateOutputType> | number
          }
        }
      }
      Race: {
        payload: Prisma.$RacePayload<ExtArgs>
        fields: Prisma.RaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          findFirst: {
            args: Prisma.RaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          findMany: {
            args: Prisma.RaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>[]
          }
          create: {
            args: Prisma.RaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          createMany: {
            args: Prisma.RaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>[]
          }
          delete: {
            args: Prisma.RaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          update: {
            args: Prisma.RaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          deleteMany: {
            args: Prisma.RaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RaceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>[]
          }
          upsert: {
            args: Prisma.RaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          aggregate: {
            args: Prisma.RaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRace>
          }
          groupBy: {
            args: Prisma.RaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<RaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.RaceCountArgs<ExtArgs>
            result: $Utils.Optional<RaceCountAggregateOutputType> | number
          }
        }
      }
      Trait: {
        payload: Prisma.$TraitPayload<ExtArgs>
        fields: Prisma.TraitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TraitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TraitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraitPayload>
          }
          findFirst: {
            args: Prisma.TraitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TraitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraitPayload>
          }
          findMany: {
            args: Prisma.TraitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraitPayload>[]
          }
          create: {
            args: Prisma.TraitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraitPayload>
          }
          createMany: {
            args: Prisma.TraitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TraitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraitPayload>[]
          }
          delete: {
            args: Prisma.TraitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraitPayload>
          }
          update: {
            args: Prisma.TraitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraitPayload>
          }
          deleteMany: {
            args: Prisma.TraitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TraitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TraitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraitPayload>[]
          }
          upsert: {
            args: Prisma.TraitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraitPayload>
          }
          aggregate: {
            args: Prisma.TraitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrait>
          }
          groupBy: {
            args: Prisma.TraitGroupByArgs<ExtArgs>
            result: $Utils.Optional<TraitGroupByOutputType>[]
          }
          count: {
            args: Prisma.TraitCountArgs<ExtArgs>
            result: $Utils.Optional<TraitCountAggregateOutputType> | number
          }
        }
      }
      SubRace: {
        payload: Prisma.$SubRacePayload<ExtArgs>
        fields: Prisma.SubRaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubRaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubRacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubRaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubRacePayload>
          }
          findFirst: {
            args: Prisma.SubRaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubRacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubRaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubRacePayload>
          }
          findMany: {
            args: Prisma.SubRaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubRacePayload>[]
          }
          create: {
            args: Prisma.SubRaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubRacePayload>
          }
          createMany: {
            args: Prisma.SubRaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubRaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubRacePayload>[]
          }
          delete: {
            args: Prisma.SubRaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubRacePayload>
          }
          update: {
            args: Prisma.SubRaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubRacePayload>
          }
          deleteMany: {
            args: Prisma.SubRaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubRaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubRaceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubRacePayload>[]
          }
          upsert: {
            args: Prisma.SubRaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubRacePayload>
          }
          aggregate: {
            args: Prisma.SubRaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubRace>
          }
          groupBy: {
            args: Prisma.SubRaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubRaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubRaceCountArgs<ExtArgs>
            result: $Utils.Optional<SubRaceCountAggregateOutputType> | number
          }
        }
      }
      Spell: {
        payload: Prisma.$SpellPayload<ExtArgs>
        fields: Prisma.SpellFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpellFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpellPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpellFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpellPayload>
          }
          findFirst: {
            args: Prisma.SpellFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpellPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpellFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpellPayload>
          }
          findMany: {
            args: Prisma.SpellFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpellPayload>[]
          }
          create: {
            args: Prisma.SpellCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpellPayload>
          }
          createMany: {
            args: Prisma.SpellCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpellCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpellPayload>[]
          }
          delete: {
            args: Prisma.SpellDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpellPayload>
          }
          update: {
            args: Prisma.SpellUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpellPayload>
          }
          deleteMany: {
            args: Prisma.SpellDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpellUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpellUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpellPayload>[]
          }
          upsert: {
            args: Prisma.SpellUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpellPayload>
          }
          aggregate: {
            args: Prisma.SpellAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpell>
          }
          groupBy: {
            args: Prisma.SpellGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpellGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpellCountArgs<ExtArgs>
            result: $Utils.Optional<SpellCountAggregateOutputType> | number
          }
        }
      }
      Subclass: {
        payload: Prisma.$SubclassPayload<ExtArgs>
        fields: Prisma.SubclassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubclassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubclassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubclassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubclassPayload>
          }
          findFirst: {
            args: Prisma.SubclassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubclassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubclassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubclassPayload>
          }
          findMany: {
            args: Prisma.SubclassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubclassPayload>[]
          }
          create: {
            args: Prisma.SubclassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubclassPayload>
          }
          createMany: {
            args: Prisma.SubclassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubclassCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubclassPayload>[]
          }
          delete: {
            args: Prisma.SubclassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubclassPayload>
          }
          update: {
            args: Prisma.SubclassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubclassPayload>
          }
          deleteMany: {
            args: Prisma.SubclassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubclassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubclassUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubclassPayload>[]
          }
          upsert: {
            args: Prisma.SubclassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubclassPayload>
          }
          aggregate: {
            args: Prisma.SubclassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubclass>
          }
          groupBy: {
            args: Prisma.SubclassGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubclassGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubclassCountArgs<ExtArgs>
            result: $Utils.Optional<SubclassCountAggregateOutputType> | number
          }
        }
      }
      MagicItem: {
        payload: Prisma.$MagicItemPayload<ExtArgs>
        fields: Prisma.MagicItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MagicItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagicItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MagicItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagicItemPayload>
          }
          findFirst: {
            args: Prisma.MagicItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagicItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MagicItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagicItemPayload>
          }
          findMany: {
            args: Prisma.MagicItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagicItemPayload>[]
          }
          create: {
            args: Prisma.MagicItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagicItemPayload>
          }
          createMany: {
            args: Prisma.MagicItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MagicItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagicItemPayload>[]
          }
          delete: {
            args: Prisma.MagicItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagicItemPayload>
          }
          update: {
            args: Prisma.MagicItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagicItemPayload>
          }
          deleteMany: {
            args: Prisma.MagicItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MagicItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MagicItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagicItemPayload>[]
          }
          upsert: {
            args: Prisma.MagicItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagicItemPayload>
          }
          aggregate: {
            args: Prisma.MagicItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMagicItem>
          }
          groupBy: {
            args: Prisma.MagicItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<MagicItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.MagicItemCountArgs<ExtArgs>
            result: $Utils.Optional<MagicItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    background?: BackgroundOmit
    backgroundFeature?: BackgroundFeatureOmit
    class?: ClassOmit
    classLong?: ClassLongOmit
    race?: RaceOmit
    trait?: TraitOmit
    subRace?: SubRaceOmit
    spell?: SpellOmit
    subclass?: SubclassOmit
    magicItem?: MagicItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BackgroundCountOutputType
   */

  export type BackgroundCountOutputType = {
    features: number
  }

  export type BackgroundCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    features?: boolean | BackgroundCountOutputTypeCountFeaturesArgs
  }

  // Custom InputTypes
  /**
   * BackgroundCountOutputType without action
   */
  export type BackgroundCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BackgroundCountOutputType
     */
    select?: BackgroundCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BackgroundCountOutputType without action
   */
  export type BackgroundCountOutputTypeCountFeaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BackgroundFeatureWhereInput
  }


  /**
   * Count Type ClassCountOutputType
   */

  export type ClassCountOutputType = {
    spells: number
  }

  export type ClassCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spells?: boolean | ClassCountOutputTypeCountSpellsArgs
  }

  // Custom InputTypes
  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassCountOutputType
     */
    select?: ClassCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountSpellsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpellWhereInput
  }


  /**
   * Count Type RaceCountOutputType
   */

  export type RaceCountOutputType = {
    traits: number
    subraces: number
  }

  export type RaceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    traits?: boolean | RaceCountOutputTypeCountTraitsArgs
    subraces?: boolean | RaceCountOutputTypeCountSubracesArgs
  }

  // Custom InputTypes
  /**
   * RaceCountOutputType without action
   */
  export type RaceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceCountOutputType
     */
    select?: RaceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RaceCountOutputType without action
   */
  export type RaceCountOutputTypeCountTraitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TraitWhereInput
  }

  /**
   * RaceCountOutputType without action
   */
  export type RaceCountOutputTypeCountSubracesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubRaceWhereInput
  }


  /**
   * Count Type SpellCountOutputType
   */

  export type SpellCountOutputType = {
    classes: number
  }

  export type SpellCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | SpellCountOutputTypeCountClassesArgs
  }

  // Custom InputTypes
  /**
   * SpellCountOutputType without action
   */
  export type SpellCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpellCountOutputType
     */
    select?: SpellCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpellCountOutputType without action
   */
  export type SpellCountOutputTypeCountClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Background
   */

  export type AggregateBackground = {
    _count: BackgroundCountAggregateOutputType | null
    _avg: BackgroundAvgAggregateOutputType | null
    _sum: BackgroundSumAggregateOutputType | null
    _min: BackgroundMinAggregateOutputType | null
    _max: BackgroundMaxAggregateOutputType | null
  }

  export type BackgroundAvgAggregateOutputType = {
    id: number | null
    languages: number | null
  }

  export type BackgroundSumAggregateOutputType = {
    id: number | null
    languages: number | null
  }

  export type BackgroundMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    languages: number | null
  }

  export type BackgroundMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    languages: number | null
  }

  export type BackgroundCountAggregateOutputType = {
    id: number
    name: number
    description: number
    skills: number
    languages: number
    equipment: number
    _all: number
  }


  export type BackgroundAvgAggregateInputType = {
    id?: true
    languages?: true
  }

  export type BackgroundSumAggregateInputType = {
    id?: true
    languages?: true
  }

  export type BackgroundMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    languages?: true
  }

  export type BackgroundMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    languages?: true
  }

  export type BackgroundCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    skills?: true
    languages?: true
    equipment?: true
    _all?: true
  }

  export type BackgroundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Background to aggregate.
     */
    where?: BackgroundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Backgrounds to fetch.
     */
    orderBy?: BackgroundOrderByWithRelationInput | BackgroundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BackgroundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Backgrounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Backgrounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Backgrounds
    **/
    _count?: true | BackgroundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BackgroundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BackgroundSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BackgroundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BackgroundMaxAggregateInputType
  }

  export type GetBackgroundAggregateType<T extends BackgroundAggregateArgs> = {
        [P in keyof T & keyof AggregateBackground]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBackground[P]>
      : GetScalarType<T[P], AggregateBackground[P]>
  }




  export type BackgroundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BackgroundWhereInput
    orderBy?: BackgroundOrderByWithAggregationInput | BackgroundOrderByWithAggregationInput[]
    by: BackgroundScalarFieldEnum[] | BackgroundScalarFieldEnum
    having?: BackgroundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BackgroundCountAggregateInputType | true
    _avg?: BackgroundAvgAggregateInputType
    _sum?: BackgroundSumAggregateInputType
    _min?: BackgroundMinAggregateInputType
    _max?: BackgroundMaxAggregateInputType
  }

  export type BackgroundGroupByOutputType = {
    id: number
    name: string
    description: string
    skills: string[]
    languages: number
    equipment: string[]
    _count: BackgroundCountAggregateOutputType | null
    _avg: BackgroundAvgAggregateOutputType | null
    _sum: BackgroundSumAggregateOutputType | null
    _min: BackgroundMinAggregateOutputType | null
    _max: BackgroundMaxAggregateOutputType | null
  }

  type GetBackgroundGroupByPayload<T extends BackgroundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BackgroundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BackgroundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BackgroundGroupByOutputType[P]>
            : GetScalarType<T[P], BackgroundGroupByOutputType[P]>
        }
      >
    >


  export type BackgroundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    skills?: boolean
    languages?: boolean
    equipment?: boolean
    features?: boolean | Background$featuresArgs<ExtArgs>
    _count?: boolean | BackgroundCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["background"]>

  export type BackgroundSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    skills?: boolean
    languages?: boolean
    equipment?: boolean
  }, ExtArgs["result"]["background"]>

  export type BackgroundSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    skills?: boolean
    languages?: boolean
    equipment?: boolean
  }, ExtArgs["result"]["background"]>

  export type BackgroundSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    skills?: boolean
    languages?: boolean
    equipment?: boolean
  }

  export type BackgroundOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "skills" | "languages" | "equipment", ExtArgs["result"]["background"]>
  export type BackgroundInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    features?: boolean | Background$featuresArgs<ExtArgs>
    _count?: boolean | BackgroundCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BackgroundIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BackgroundIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BackgroundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Background"
    objects: {
      features: Prisma.$BackgroundFeaturePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      skills: string[]
      languages: number
      equipment: string[]
    }, ExtArgs["result"]["background"]>
    composites: {}
  }

  type BackgroundGetPayload<S extends boolean | null | undefined | BackgroundDefaultArgs> = $Result.GetResult<Prisma.$BackgroundPayload, S>

  type BackgroundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BackgroundFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BackgroundCountAggregateInputType | true
    }

  export interface BackgroundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Background'], meta: { name: 'Background' } }
    /**
     * Find zero or one Background that matches the filter.
     * @param {BackgroundFindUniqueArgs} args - Arguments to find a Background
     * @example
     * // Get one Background
     * const background = await prisma.background.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BackgroundFindUniqueArgs>(args: SelectSubset<T, BackgroundFindUniqueArgs<ExtArgs>>): Prisma__BackgroundClient<$Result.GetResult<Prisma.$BackgroundPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Background that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BackgroundFindUniqueOrThrowArgs} args - Arguments to find a Background
     * @example
     * // Get one Background
     * const background = await prisma.background.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BackgroundFindUniqueOrThrowArgs>(args: SelectSubset<T, BackgroundFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BackgroundClient<$Result.GetResult<Prisma.$BackgroundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Background that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackgroundFindFirstArgs} args - Arguments to find a Background
     * @example
     * // Get one Background
     * const background = await prisma.background.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BackgroundFindFirstArgs>(args?: SelectSubset<T, BackgroundFindFirstArgs<ExtArgs>>): Prisma__BackgroundClient<$Result.GetResult<Prisma.$BackgroundPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Background that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackgroundFindFirstOrThrowArgs} args - Arguments to find a Background
     * @example
     * // Get one Background
     * const background = await prisma.background.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BackgroundFindFirstOrThrowArgs>(args?: SelectSubset<T, BackgroundFindFirstOrThrowArgs<ExtArgs>>): Prisma__BackgroundClient<$Result.GetResult<Prisma.$BackgroundPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Backgrounds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackgroundFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Backgrounds
     * const backgrounds = await prisma.background.findMany()
     * 
     * // Get first 10 Backgrounds
     * const backgrounds = await prisma.background.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const backgroundWithIdOnly = await prisma.background.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BackgroundFindManyArgs>(args?: SelectSubset<T, BackgroundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BackgroundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Background.
     * @param {BackgroundCreateArgs} args - Arguments to create a Background.
     * @example
     * // Create one Background
     * const Background = await prisma.background.create({
     *   data: {
     *     // ... data to create a Background
     *   }
     * })
     * 
     */
    create<T extends BackgroundCreateArgs>(args: SelectSubset<T, BackgroundCreateArgs<ExtArgs>>): Prisma__BackgroundClient<$Result.GetResult<Prisma.$BackgroundPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Backgrounds.
     * @param {BackgroundCreateManyArgs} args - Arguments to create many Backgrounds.
     * @example
     * // Create many Backgrounds
     * const background = await prisma.background.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BackgroundCreateManyArgs>(args?: SelectSubset<T, BackgroundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Backgrounds and returns the data saved in the database.
     * @param {BackgroundCreateManyAndReturnArgs} args - Arguments to create many Backgrounds.
     * @example
     * // Create many Backgrounds
     * const background = await prisma.background.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Backgrounds and only return the `id`
     * const backgroundWithIdOnly = await prisma.background.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BackgroundCreateManyAndReturnArgs>(args?: SelectSubset<T, BackgroundCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BackgroundPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Background.
     * @param {BackgroundDeleteArgs} args - Arguments to delete one Background.
     * @example
     * // Delete one Background
     * const Background = await prisma.background.delete({
     *   where: {
     *     // ... filter to delete one Background
     *   }
     * })
     * 
     */
    delete<T extends BackgroundDeleteArgs>(args: SelectSubset<T, BackgroundDeleteArgs<ExtArgs>>): Prisma__BackgroundClient<$Result.GetResult<Prisma.$BackgroundPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Background.
     * @param {BackgroundUpdateArgs} args - Arguments to update one Background.
     * @example
     * // Update one Background
     * const background = await prisma.background.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BackgroundUpdateArgs>(args: SelectSubset<T, BackgroundUpdateArgs<ExtArgs>>): Prisma__BackgroundClient<$Result.GetResult<Prisma.$BackgroundPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Backgrounds.
     * @param {BackgroundDeleteManyArgs} args - Arguments to filter Backgrounds to delete.
     * @example
     * // Delete a few Backgrounds
     * const { count } = await prisma.background.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BackgroundDeleteManyArgs>(args?: SelectSubset<T, BackgroundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Backgrounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackgroundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Backgrounds
     * const background = await prisma.background.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BackgroundUpdateManyArgs>(args: SelectSubset<T, BackgroundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Backgrounds and returns the data updated in the database.
     * @param {BackgroundUpdateManyAndReturnArgs} args - Arguments to update many Backgrounds.
     * @example
     * // Update many Backgrounds
     * const background = await prisma.background.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Backgrounds and only return the `id`
     * const backgroundWithIdOnly = await prisma.background.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BackgroundUpdateManyAndReturnArgs>(args: SelectSubset<T, BackgroundUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BackgroundPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Background.
     * @param {BackgroundUpsertArgs} args - Arguments to update or create a Background.
     * @example
     * // Update or create a Background
     * const background = await prisma.background.upsert({
     *   create: {
     *     // ... data to create a Background
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Background we want to update
     *   }
     * })
     */
    upsert<T extends BackgroundUpsertArgs>(args: SelectSubset<T, BackgroundUpsertArgs<ExtArgs>>): Prisma__BackgroundClient<$Result.GetResult<Prisma.$BackgroundPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Backgrounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackgroundCountArgs} args - Arguments to filter Backgrounds to count.
     * @example
     * // Count the number of Backgrounds
     * const count = await prisma.background.count({
     *   where: {
     *     // ... the filter for the Backgrounds we want to count
     *   }
     * })
    **/
    count<T extends BackgroundCountArgs>(
      args?: Subset<T, BackgroundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BackgroundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Background.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackgroundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BackgroundAggregateArgs>(args: Subset<T, BackgroundAggregateArgs>): Prisma.PrismaPromise<GetBackgroundAggregateType<T>>

    /**
     * Group by Background.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackgroundGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BackgroundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BackgroundGroupByArgs['orderBy'] }
        : { orderBy?: BackgroundGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BackgroundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBackgroundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Background model
   */
  readonly fields: BackgroundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Background.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BackgroundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    features<T extends Background$featuresArgs<ExtArgs> = {}>(args?: Subset<T, Background$featuresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BackgroundFeaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Background model
   */
  interface BackgroundFieldRefs {
    readonly id: FieldRef<"Background", 'Int'>
    readonly name: FieldRef<"Background", 'String'>
    readonly description: FieldRef<"Background", 'String'>
    readonly skills: FieldRef<"Background", 'String[]'>
    readonly languages: FieldRef<"Background", 'Int'>
    readonly equipment: FieldRef<"Background", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Background findUnique
   */
  export type BackgroundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background
     */
    select?: BackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Background
     */
    omit?: BackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackgroundInclude<ExtArgs> | null
    /**
     * Filter, which Background to fetch.
     */
    where: BackgroundWhereUniqueInput
  }

  /**
   * Background findUniqueOrThrow
   */
  export type BackgroundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background
     */
    select?: BackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Background
     */
    omit?: BackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackgroundInclude<ExtArgs> | null
    /**
     * Filter, which Background to fetch.
     */
    where: BackgroundWhereUniqueInput
  }

  /**
   * Background findFirst
   */
  export type BackgroundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background
     */
    select?: BackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Background
     */
    omit?: BackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackgroundInclude<ExtArgs> | null
    /**
     * Filter, which Background to fetch.
     */
    where?: BackgroundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Backgrounds to fetch.
     */
    orderBy?: BackgroundOrderByWithRelationInput | BackgroundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Backgrounds.
     */
    cursor?: BackgroundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Backgrounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Backgrounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Backgrounds.
     */
    distinct?: BackgroundScalarFieldEnum | BackgroundScalarFieldEnum[]
  }

  /**
   * Background findFirstOrThrow
   */
  export type BackgroundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background
     */
    select?: BackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Background
     */
    omit?: BackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackgroundInclude<ExtArgs> | null
    /**
     * Filter, which Background to fetch.
     */
    where?: BackgroundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Backgrounds to fetch.
     */
    orderBy?: BackgroundOrderByWithRelationInput | BackgroundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Backgrounds.
     */
    cursor?: BackgroundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Backgrounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Backgrounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Backgrounds.
     */
    distinct?: BackgroundScalarFieldEnum | BackgroundScalarFieldEnum[]
  }

  /**
   * Background findMany
   */
  export type BackgroundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background
     */
    select?: BackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Background
     */
    omit?: BackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackgroundInclude<ExtArgs> | null
    /**
     * Filter, which Backgrounds to fetch.
     */
    where?: BackgroundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Backgrounds to fetch.
     */
    orderBy?: BackgroundOrderByWithRelationInput | BackgroundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Backgrounds.
     */
    cursor?: BackgroundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Backgrounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Backgrounds.
     */
    skip?: number
    distinct?: BackgroundScalarFieldEnum | BackgroundScalarFieldEnum[]
  }

  /**
   * Background create
   */
  export type BackgroundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background
     */
    select?: BackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Background
     */
    omit?: BackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackgroundInclude<ExtArgs> | null
    /**
     * The data needed to create a Background.
     */
    data: XOR<BackgroundCreateInput, BackgroundUncheckedCreateInput>
  }

  /**
   * Background createMany
   */
  export type BackgroundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Backgrounds.
     */
    data: BackgroundCreateManyInput | BackgroundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Background createManyAndReturn
   */
  export type BackgroundCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background
     */
    select?: BackgroundSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Background
     */
    omit?: BackgroundOmit<ExtArgs> | null
    /**
     * The data used to create many Backgrounds.
     */
    data: BackgroundCreateManyInput | BackgroundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Background update
   */
  export type BackgroundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background
     */
    select?: BackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Background
     */
    omit?: BackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackgroundInclude<ExtArgs> | null
    /**
     * The data needed to update a Background.
     */
    data: XOR<BackgroundUpdateInput, BackgroundUncheckedUpdateInput>
    /**
     * Choose, which Background to update.
     */
    where: BackgroundWhereUniqueInput
  }

  /**
   * Background updateMany
   */
  export type BackgroundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Backgrounds.
     */
    data: XOR<BackgroundUpdateManyMutationInput, BackgroundUncheckedUpdateManyInput>
    /**
     * Filter which Backgrounds to update
     */
    where?: BackgroundWhereInput
    /**
     * Limit how many Backgrounds to update.
     */
    limit?: number
  }

  /**
   * Background updateManyAndReturn
   */
  export type BackgroundUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background
     */
    select?: BackgroundSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Background
     */
    omit?: BackgroundOmit<ExtArgs> | null
    /**
     * The data used to update Backgrounds.
     */
    data: XOR<BackgroundUpdateManyMutationInput, BackgroundUncheckedUpdateManyInput>
    /**
     * Filter which Backgrounds to update
     */
    where?: BackgroundWhereInput
    /**
     * Limit how many Backgrounds to update.
     */
    limit?: number
  }

  /**
   * Background upsert
   */
  export type BackgroundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background
     */
    select?: BackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Background
     */
    omit?: BackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackgroundInclude<ExtArgs> | null
    /**
     * The filter to search for the Background to update in case it exists.
     */
    where: BackgroundWhereUniqueInput
    /**
     * In case the Background found by the `where` argument doesn't exist, create a new Background with this data.
     */
    create: XOR<BackgroundCreateInput, BackgroundUncheckedCreateInput>
    /**
     * In case the Background was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BackgroundUpdateInput, BackgroundUncheckedUpdateInput>
  }

  /**
   * Background delete
   */
  export type BackgroundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background
     */
    select?: BackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Background
     */
    omit?: BackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackgroundInclude<ExtArgs> | null
    /**
     * Filter which Background to delete.
     */
    where: BackgroundWhereUniqueInput
  }

  /**
   * Background deleteMany
   */
  export type BackgroundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Backgrounds to delete
     */
    where?: BackgroundWhereInput
    /**
     * Limit how many Backgrounds to delete.
     */
    limit?: number
  }

  /**
   * Background.features
   */
  export type Background$featuresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BackgroundFeature
     */
    select?: BackgroundFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BackgroundFeature
     */
    omit?: BackgroundFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackgroundFeatureInclude<ExtArgs> | null
    where?: BackgroundFeatureWhereInput
    orderBy?: BackgroundFeatureOrderByWithRelationInput | BackgroundFeatureOrderByWithRelationInput[]
    cursor?: BackgroundFeatureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BackgroundFeatureScalarFieldEnum | BackgroundFeatureScalarFieldEnum[]
  }

  /**
   * Background without action
   */
  export type BackgroundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background
     */
    select?: BackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Background
     */
    omit?: BackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackgroundInclude<ExtArgs> | null
  }


  /**
   * Model BackgroundFeature
   */

  export type AggregateBackgroundFeature = {
    _count: BackgroundFeatureCountAggregateOutputType | null
    _avg: BackgroundFeatureAvgAggregateOutputType | null
    _sum: BackgroundFeatureSumAggregateOutputType | null
    _min: BackgroundFeatureMinAggregateOutputType | null
    _max: BackgroundFeatureMaxAggregateOutputType | null
  }

  export type BackgroundFeatureAvgAggregateOutputType = {
    id: number | null
    backgroundId: number | null
  }

  export type BackgroundFeatureSumAggregateOutputType = {
    id: number | null
    backgroundId: number | null
  }

  export type BackgroundFeatureMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    backgroundId: number | null
  }

  export type BackgroundFeatureMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    backgroundId: number | null
  }

  export type BackgroundFeatureCountAggregateOutputType = {
    id: number
    name: number
    description: number
    backgroundId: number
    _all: number
  }


  export type BackgroundFeatureAvgAggregateInputType = {
    id?: true
    backgroundId?: true
  }

  export type BackgroundFeatureSumAggregateInputType = {
    id?: true
    backgroundId?: true
  }

  export type BackgroundFeatureMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    backgroundId?: true
  }

  export type BackgroundFeatureMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    backgroundId?: true
  }

  export type BackgroundFeatureCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    backgroundId?: true
    _all?: true
  }

  export type BackgroundFeatureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BackgroundFeature to aggregate.
     */
    where?: BackgroundFeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BackgroundFeatures to fetch.
     */
    orderBy?: BackgroundFeatureOrderByWithRelationInput | BackgroundFeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BackgroundFeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BackgroundFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BackgroundFeatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BackgroundFeatures
    **/
    _count?: true | BackgroundFeatureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BackgroundFeatureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BackgroundFeatureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BackgroundFeatureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BackgroundFeatureMaxAggregateInputType
  }

  export type GetBackgroundFeatureAggregateType<T extends BackgroundFeatureAggregateArgs> = {
        [P in keyof T & keyof AggregateBackgroundFeature]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBackgroundFeature[P]>
      : GetScalarType<T[P], AggregateBackgroundFeature[P]>
  }




  export type BackgroundFeatureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BackgroundFeatureWhereInput
    orderBy?: BackgroundFeatureOrderByWithAggregationInput | BackgroundFeatureOrderByWithAggregationInput[]
    by: BackgroundFeatureScalarFieldEnum[] | BackgroundFeatureScalarFieldEnum
    having?: BackgroundFeatureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BackgroundFeatureCountAggregateInputType | true
    _avg?: BackgroundFeatureAvgAggregateInputType
    _sum?: BackgroundFeatureSumAggregateInputType
    _min?: BackgroundFeatureMinAggregateInputType
    _max?: BackgroundFeatureMaxAggregateInputType
  }

  export type BackgroundFeatureGroupByOutputType = {
    id: number
    name: string
    description: string
    backgroundId: number | null
    _count: BackgroundFeatureCountAggregateOutputType | null
    _avg: BackgroundFeatureAvgAggregateOutputType | null
    _sum: BackgroundFeatureSumAggregateOutputType | null
    _min: BackgroundFeatureMinAggregateOutputType | null
    _max: BackgroundFeatureMaxAggregateOutputType | null
  }

  type GetBackgroundFeatureGroupByPayload<T extends BackgroundFeatureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BackgroundFeatureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BackgroundFeatureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BackgroundFeatureGroupByOutputType[P]>
            : GetScalarType<T[P], BackgroundFeatureGroupByOutputType[P]>
        }
      >
    >


  export type BackgroundFeatureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    backgroundId?: boolean
    background?: boolean | BackgroundFeature$backgroundArgs<ExtArgs>
  }, ExtArgs["result"]["backgroundFeature"]>

  export type BackgroundFeatureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    backgroundId?: boolean
    background?: boolean | BackgroundFeature$backgroundArgs<ExtArgs>
  }, ExtArgs["result"]["backgroundFeature"]>

  export type BackgroundFeatureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    backgroundId?: boolean
    background?: boolean | BackgroundFeature$backgroundArgs<ExtArgs>
  }, ExtArgs["result"]["backgroundFeature"]>

  export type BackgroundFeatureSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    backgroundId?: boolean
  }

  export type BackgroundFeatureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "backgroundId", ExtArgs["result"]["backgroundFeature"]>
  export type BackgroundFeatureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    background?: boolean | BackgroundFeature$backgroundArgs<ExtArgs>
  }
  export type BackgroundFeatureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    background?: boolean | BackgroundFeature$backgroundArgs<ExtArgs>
  }
  export type BackgroundFeatureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    background?: boolean | BackgroundFeature$backgroundArgs<ExtArgs>
  }

  export type $BackgroundFeaturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BackgroundFeature"
    objects: {
      background: Prisma.$BackgroundPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      backgroundId: number | null
    }, ExtArgs["result"]["backgroundFeature"]>
    composites: {}
  }

  type BackgroundFeatureGetPayload<S extends boolean | null | undefined | BackgroundFeatureDefaultArgs> = $Result.GetResult<Prisma.$BackgroundFeaturePayload, S>

  type BackgroundFeatureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BackgroundFeatureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BackgroundFeatureCountAggregateInputType | true
    }

  export interface BackgroundFeatureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BackgroundFeature'], meta: { name: 'BackgroundFeature' } }
    /**
     * Find zero or one BackgroundFeature that matches the filter.
     * @param {BackgroundFeatureFindUniqueArgs} args - Arguments to find a BackgroundFeature
     * @example
     * // Get one BackgroundFeature
     * const backgroundFeature = await prisma.backgroundFeature.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BackgroundFeatureFindUniqueArgs>(args: SelectSubset<T, BackgroundFeatureFindUniqueArgs<ExtArgs>>): Prisma__BackgroundFeatureClient<$Result.GetResult<Prisma.$BackgroundFeaturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BackgroundFeature that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BackgroundFeatureFindUniqueOrThrowArgs} args - Arguments to find a BackgroundFeature
     * @example
     * // Get one BackgroundFeature
     * const backgroundFeature = await prisma.backgroundFeature.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BackgroundFeatureFindUniqueOrThrowArgs>(args: SelectSubset<T, BackgroundFeatureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BackgroundFeatureClient<$Result.GetResult<Prisma.$BackgroundFeaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BackgroundFeature that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackgroundFeatureFindFirstArgs} args - Arguments to find a BackgroundFeature
     * @example
     * // Get one BackgroundFeature
     * const backgroundFeature = await prisma.backgroundFeature.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BackgroundFeatureFindFirstArgs>(args?: SelectSubset<T, BackgroundFeatureFindFirstArgs<ExtArgs>>): Prisma__BackgroundFeatureClient<$Result.GetResult<Prisma.$BackgroundFeaturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BackgroundFeature that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackgroundFeatureFindFirstOrThrowArgs} args - Arguments to find a BackgroundFeature
     * @example
     * // Get one BackgroundFeature
     * const backgroundFeature = await prisma.backgroundFeature.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BackgroundFeatureFindFirstOrThrowArgs>(args?: SelectSubset<T, BackgroundFeatureFindFirstOrThrowArgs<ExtArgs>>): Prisma__BackgroundFeatureClient<$Result.GetResult<Prisma.$BackgroundFeaturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BackgroundFeatures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackgroundFeatureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BackgroundFeatures
     * const backgroundFeatures = await prisma.backgroundFeature.findMany()
     * 
     * // Get first 10 BackgroundFeatures
     * const backgroundFeatures = await prisma.backgroundFeature.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const backgroundFeatureWithIdOnly = await prisma.backgroundFeature.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BackgroundFeatureFindManyArgs>(args?: SelectSubset<T, BackgroundFeatureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BackgroundFeaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BackgroundFeature.
     * @param {BackgroundFeatureCreateArgs} args - Arguments to create a BackgroundFeature.
     * @example
     * // Create one BackgroundFeature
     * const BackgroundFeature = await prisma.backgroundFeature.create({
     *   data: {
     *     // ... data to create a BackgroundFeature
     *   }
     * })
     * 
     */
    create<T extends BackgroundFeatureCreateArgs>(args: SelectSubset<T, BackgroundFeatureCreateArgs<ExtArgs>>): Prisma__BackgroundFeatureClient<$Result.GetResult<Prisma.$BackgroundFeaturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BackgroundFeatures.
     * @param {BackgroundFeatureCreateManyArgs} args - Arguments to create many BackgroundFeatures.
     * @example
     * // Create many BackgroundFeatures
     * const backgroundFeature = await prisma.backgroundFeature.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BackgroundFeatureCreateManyArgs>(args?: SelectSubset<T, BackgroundFeatureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BackgroundFeatures and returns the data saved in the database.
     * @param {BackgroundFeatureCreateManyAndReturnArgs} args - Arguments to create many BackgroundFeatures.
     * @example
     * // Create many BackgroundFeatures
     * const backgroundFeature = await prisma.backgroundFeature.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BackgroundFeatures and only return the `id`
     * const backgroundFeatureWithIdOnly = await prisma.backgroundFeature.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BackgroundFeatureCreateManyAndReturnArgs>(args?: SelectSubset<T, BackgroundFeatureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BackgroundFeaturePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BackgroundFeature.
     * @param {BackgroundFeatureDeleteArgs} args - Arguments to delete one BackgroundFeature.
     * @example
     * // Delete one BackgroundFeature
     * const BackgroundFeature = await prisma.backgroundFeature.delete({
     *   where: {
     *     // ... filter to delete one BackgroundFeature
     *   }
     * })
     * 
     */
    delete<T extends BackgroundFeatureDeleteArgs>(args: SelectSubset<T, BackgroundFeatureDeleteArgs<ExtArgs>>): Prisma__BackgroundFeatureClient<$Result.GetResult<Prisma.$BackgroundFeaturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BackgroundFeature.
     * @param {BackgroundFeatureUpdateArgs} args - Arguments to update one BackgroundFeature.
     * @example
     * // Update one BackgroundFeature
     * const backgroundFeature = await prisma.backgroundFeature.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BackgroundFeatureUpdateArgs>(args: SelectSubset<T, BackgroundFeatureUpdateArgs<ExtArgs>>): Prisma__BackgroundFeatureClient<$Result.GetResult<Prisma.$BackgroundFeaturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BackgroundFeatures.
     * @param {BackgroundFeatureDeleteManyArgs} args - Arguments to filter BackgroundFeatures to delete.
     * @example
     * // Delete a few BackgroundFeatures
     * const { count } = await prisma.backgroundFeature.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BackgroundFeatureDeleteManyArgs>(args?: SelectSubset<T, BackgroundFeatureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BackgroundFeatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackgroundFeatureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BackgroundFeatures
     * const backgroundFeature = await prisma.backgroundFeature.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BackgroundFeatureUpdateManyArgs>(args: SelectSubset<T, BackgroundFeatureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BackgroundFeatures and returns the data updated in the database.
     * @param {BackgroundFeatureUpdateManyAndReturnArgs} args - Arguments to update many BackgroundFeatures.
     * @example
     * // Update many BackgroundFeatures
     * const backgroundFeature = await prisma.backgroundFeature.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BackgroundFeatures and only return the `id`
     * const backgroundFeatureWithIdOnly = await prisma.backgroundFeature.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BackgroundFeatureUpdateManyAndReturnArgs>(args: SelectSubset<T, BackgroundFeatureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BackgroundFeaturePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BackgroundFeature.
     * @param {BackgroundFeatureUpsertArgs} args - Arguments to update or create a BackgroundFeature.
     * @example
     * // Update or create a BackgroundFeature
     * const backgroundFeature = await prisma.backgroundFeature.upsert({
     *   create: {
     *     // ... data to create a BackgroundFeature
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BackgroundFeature we want to update
     *   }
     * })
     */
    upsert<T extends BackgroundFeatureUpsertArgs>(args: SelectSubset<T, BackgroundFeatureUpsertArgs<ExtArgs>>): Prisma__BackgroundFeatureClient<$Result.GetResult<Prisma.$BackgroundFeaturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BackgroundFeatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackgroundFeatureCountArgs} args - Arguments to filter BackgroundFeatures to count.
     * @example
     * // Count the number of BackgroundFeatures
     * const count = await prisma.backgroundFeature.count({
     *   where: {
     *     // ... the filter for the BackgroundFeatures we want to count
     *   }
     * })
    **/
    count<T extends BackgroundFeatureCountArgs>(
      args?: Subset<T, BackgroundFeatureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BackgroundFeatureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BackgroundFeature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackgroundFeatureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BackgroundFeatureAggregateArgs>(args: Subset<T, BackgroundFeatureAggregateArgs>): Prisma.PrismaPromise<GetBackgroundFeatureAggregateType<T>>

    /**
     * Group by BackgroundFeature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackgroundFeatureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BackgroundFeatureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BackgroundFeatureGroupByArgs['orderBy'] }
        : { orderBy?: BackgroundFeatureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BackgroundFeatureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBackgroundFeatureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BackgroundFeature model
   */
  readonly fields: BackgroundFeatureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BackgroundFeature.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BackgroundFeatureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    background<T extends BackgroundFeature$backgroundArgs<ExtArgs> = {}>(args?: Subset<T, BackgroundFeature$backgroundArgs<ExtArgs>>): Prisma__BackgroundClient<$Result.GetResult<Prisma.$BackgroundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BackgroundFeature model
   */
  interface BackgroundFeatureFieldRefs {
    readonly id: FieldRef<"BackgroundFeature", 'Int'>
    readonly name: FieldRef<"BackgroundFeature", 'String'>
    readonly description: FieldRef<"BackgroundFeature", 'String'>
    readonly backgroundId: FieldRef<"BackgroundFeature", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BackgroundFeature findUnique
   */
  export type BackgroundFeatureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BackgroundFeature
     */
    select?: BackgroundFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BackgroundFeature
     */
    omit?: BackgroundFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackgroundFeatureInclude<ExtArgs> | null
    /**
     * Filter, which BackgroundFeature to fetch.
     */
    where: BackgroundFeatureWhereUniqueInput
  }

  /**
   * BackgroundFeature findUniqueOrThrow
   */
  export type BackgroundFeatureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BackgroundFeature
     */
    select?: BackgroundFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BackgroundFeature
     */
    omit?: BackgroundFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackgroundFeatureInclude<ExtArgs> | null
    /**
     * Filter, which BackgroundFeature to fetch.
     */
    where: BackgroundFeatureWhereUniqueInput
  }

  /**
   * BackgroundFeature findFirst
   */
  export type BackgroundFeatureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BackgroundFeature
     */
    select?: BackgroundFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BackgroundFeature
     */
    omit?: BackgroundFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackgroundFeatureInclude<ExtArgs> | null
    /**
     * Filter, which BackgroundFeature to fetch.
     */
    where?: BackgroundFeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BackgroundFeatures to fetch.
     */
    orderBy?: BackgroundFeatureOrderByWithRelationInput | BackgroundFeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BackgroundFeatures.
     */
    cursor?: BackgroundFeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BackgroundFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BackgroundFeatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BackgroundFeatures.
     */
    distinct?: BackgroundFeatureScalarFieldEnum | BackgroundFeatureScalarFieldEnum[]
  }

  /**
   * BackgroundFeature findFirstOrThrow
   */
  export type BackgroundFeatureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BackgroundFeature
     */
    select?: BackgroundFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BackgroundFeature
     */
    omit?: BackgroundFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackgroundFeatureInclude<ExtArgs> | null
    /**
     * Filter, which BackgroundFeature to fetch.
     */
    where?: BackgroundFeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BackgroundFeatures to fetch.
     */
    orderBy?: BackgroundFeatureOrderByWithRelationInput | BackgroundFeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BackgroundFeatures.
     */
    cursor?: BackgroundFeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BackgroundFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BackgroundFeatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BackgroundFeatures.
     */
    distinct?: BackgroundFeatureScalarFieldEnum | BackgroundFeatureScalarFieldEnum[]
  }

  /**
   * BackgroundFeature findMany
   */
  export type BackgroundFeatureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BackgroundFeature
     */
    select?: BackgroundFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BackgroundFeature
     */
    omit?: BackgroundFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackgroundFeatureInclude<ExtArgs> | null
    /**
     * Filter, which BackgroundFeatures to fetch.
     */
    where?: BackgroundFeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BackgroundFeatures to fetch.
     */
    orderBy?: BackgroundFeatureOrderByWithRelationInput | BackgroundFeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BackgroundFeatures.
     */
    cursor?: BackgroundFeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BackgroundFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BackgroundFeatures.
     */
    skip?: number
    distinct?: BackgroundFeatureScalarFieldEnum | BackgroundFeatureScalarFieldEnum[]
  }

  /**
   * BackgroundFeature create
   */
  export type BackgroundFeatureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BackgroundFeature
     */
    select?: BackgroundFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BackgroundFeature
     */
    omit?: BackgroundFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackgroundFeatureInclude<ExtArgs> | null
    /**
     * The data needed to create a BackgroundFeature.
     */
    data: XOR<BackgroundFeatureCreateInput, BackgroundFeatureUncheckedCreateInput>
  }

  /**
   * BackgroundFeature createMany
   */
  export type BackgroundFeatureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BackgroundFeatures.
     */
    data: BackgroundFeatureCreateManyInput | BackgroundFeatureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BackgroundFeature createManyAndReturn
   */
  export type BackgroundFeatureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BackgroundFeature
     */
    select?: BackgroundFeatureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BackgroundFeature
     */
    omit?: BackgroundFeatureOmit<ExtArgs> | null
    /**
     * The data used to create many BackgroundFeatures.
     */
    data: BackgroundFeatureCreateManyInput | BackgroundFeatureCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackgroundFeatureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BackgroundFeature update
   */
  export type BackgroundFeatureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BackgroundFeature
     */
    select?: BackgroundFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BackgroundFeature
     */
    omit?: BackgroundFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackgroundFeatureInclude<ExtArgs> | null
    /**
     * The data needed to update a BackgroundFeature.
     */
    data: XOR<BackgroundFeatureUpdateInput, BackgroundFeatureUncheckedUpdateInput>
    /**
     * Choose, which BackgroundFeature to update.
     */
    where: BackgroundFeatureWhereUniqueInput
  }

  /**
   * BackgroundFeature updateMany
   */
  export type BackgroundFeatureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BackgroundFeatures.
     */
    data: XOR<BackgroundFeatureUpdateManyMutationInput, BackgroundFeatureUncheckedUpdateManyInput>
    /**
     * Filter which BackgroundFeatures to update
     */
    where?: BackgroundFeatureWhereInput
    /**
     * Limit how many BackgroundFeatures to update.
     */
    limit?: number
  }

  /**
   * BackgroundFeature updateManyAndReturn
   */
  export type BackgroundFeatureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BackgroundFeature
     */
    select?: BackgroundFeatureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BackgroundFeature
     */
    omit?: BackgroundFeatureOmit<ExtArgs> | null
    /**
     * The data used to update BackgroundFeatures.
     */
    data: XOR<BackgroundFeatureUpdateManyMutationInput, BackgroundFeatureUncheckedUpdateManyInput>
    /**
     * Filter which BackgroundFeatures to update
     */
    where?: BackgroundFeatureWhereInput
    /**
     * Limit how many BackgroundFeatures to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackgroundFeatureIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BackgroundFeature upsert
   */
  export type BackgroundFeatureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BackgroundFeature
     */
    select?: BackgroundFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BackgroundFeature
     */
    omit?: BackgroundFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackgroundFeatureInclude<ExtArgs> | null
    /**
     * The filter to search for the BackgroundFeature to update in case it exists.
     */
    where: BackgroundFeatureWhereUniqueInput
    /**
     * In case the BackgroundFeature found by the `where` argument doesn't exist, create a new BackgroundFeature with this data.
     */
    create: XOR<BackgroundFeatureCreateInput, BackgroundFeatureUncheckedCreateInput>
    /**
     * In case the BackgroundFeature was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BackgroundFeatureUpdateInput, BackgroundFeatureUncheckedUpdateInput>
  }

  /**
   * BackgroundFeature delete
   */
  export type BackgroundFeatureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BackgroundFeature
     */
    select?: BackgroundFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BackgroundFeature
     */
    omit?: BackgroundFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackgroundFeatureInclude<ExtArgs> | null
    /**
     * Filter which BackgroundFeature to delete.
     */
    where: BackgroundFeatureWhereUniqueInput
  }

  /**
   * BackgroundFeature deleteMany
   */
  export type BackgroundFeatureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BackgroundFeatures to delete
     */
    where?: BackgroundFeatureWhereInput
    /**
     * Limit how many BackgroundFeatures to delete.
     */
    limit?: number
  }

  /**
   * BackgroundFeature.background
   */
  export type BackgroundFeature$backgroundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Background
     */
    select?: BackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Background
     */
    omit?: BackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackgroundInclude<ExtArgs> | null
    where?: BackgroundWhereInput
  }

  /**
   * BackgroundFeature without action
   */
  export type BackgroundFeatureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BackgroundFeature
     */
    select?: BackgroundFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BackgroundFeature
     */
    omit?: BackgroundFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackgroundFeatureInclude<ExtArgs> | null
  }


  /**
   * Model Class
   */

  export type AggregateClass = {
    _count: ClassCountAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  export type ClassMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    image: string | null
  }

  export type ClassMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    image: string | null
  }

  export type ClassCountAggregateOutputType = {
    id: number
    name: number
    description: number
    image: number
    _all: number
  }


  export type ClassMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
  }

  export type ClassMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
  }

  export type ClassCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    _all?: true
  }

  export type ClassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Class to aggregate.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classes
    **/
    _count?: true | ClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassMaxAggregateInputType
  }

  export type GetClassAggregateType<T extends ClassAggregateArgs> = {
        [P in keyof T & keyof AggregateClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClass[P]>
      : GetScalarType<T[P], AggregateClass[P]>
  }




  export type ClassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithAggregationInput | ClassOrderByWithAggregationInput[]
    by: ClassScalarFieldEnum[] | ClassScalarFieldEnum
    having?: ClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassCountAggregateInputType | true
    _min?: ClassMinAggregateInputType
    _max?: ClassMaxAggregateInputType
  }

  export type ClassGroupByOutputType = {
    id: string
    name: string
    description: string
    image: string | null
    _count: ClassCountAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  type GetClassGroupByPayload<T extends ClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassGroupByOutputType[P]>
            : GetScalarType<T[P], ClassGroupByOutputType[P]>
        }
      >
    >


  export type ClassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    long?: boolean | Class$longArgs<ExtArgs>
    spells?: boolean | Class$spellsArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
  }, ExtArgs["result"]["class"]>

  export type ClassSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
  }, ExtArgs["result"]["class"]>

  export type ClassSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
  }

  export type ClassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "image", ExtArgs["result"]["class"]>
  export type ClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    long?: boolean | Class$longArgs<ExtArgs>
    spells?: boolean | Class$spellsArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClassIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClassIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Class"
    objects: {
      long: Prisma.$ClassLongPayload<ExtArgs> | null
      spells: Prisma.$SpellPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      image: string | null
    }, ExtArgs["result"]["class"]>
    composites: {}
  }

  type ClassGetPayload<S extends boolean | null | undefined | ClassDefaultArgs> = $Result.GetResult<Prisma.$ClassPayload, S>

  type ClassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassCountAggregateInputType | true
    }

  export interface ClassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Class'], meta: { name: 'Class' } }
    /**
     * Find zero or one Class that matches the filter.
     * @param {ClassFindUniqueArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassFindUniqueArgs>(args: SelectSubset<T, ClassFindUniqueArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Class that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassFindUniqueOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassFindFirstArgs>(args?: SelectSubset<T, ClassFindFirstArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.class.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.class.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classWithIdOnly = await prisma.class.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassFindManyArgs>(args?: SelectSubset<T, ClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Class.
     * @param {ClassCreateArgs} args - Arguments to create a Class.
     * @example
     * // Create one Class
     * const Class = await prisma.class.create({
     *   data: {
     *     // ... data to create a Class
     *   }
     * })
     * 
     */
    create<T extends ClassCreateArgs>(args: SelectSubset<T, ClassCreateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classes.
     * @param {ClassCreateManyArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassCreateManyArgs>(args?: SelectSubset<T, ClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classes and returns the data saved in the database.
     * @param {ClassCreateManyAndReturnArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classes and only return the `id`
     * const classWithIdOnly = await prisma.class.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Class.
     * @param {ClassDeleteArgs} args - Arguments to delete one Class.
     * @example
     * // Delete one Class
     * const Class = await prisma.class.delete({
     *   where: {
     *     // ... filter to delete one Class
     *   }
     * })
     * 
     */
    delete<T extends ClassDeleteArgs>(args: SelectSubset<T, ClassDeleteArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Class.
     * @param {ClassUpdateArgs} args - Arguments to update one Class.
     * @example
     * // Update one Class
     * const class = await prisma.class.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassUpdateArgs>(args: SelectSubset<T, ClassUpdateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classes.
     * @param {ClassDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.class.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassDeleteManyArgs>(args?: SelectSubset<T, ClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassUpdateManyArgs>(args: SelectSubset<T, ClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes and returns the data updated in the database.
     * @param {ClassUpdateManyAndReturnArgs} args - Arguments to update many Classes.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classes and only return the `id`
     * const classWithIdOnly = await prisma.class.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClassUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Class.
     * @param {ClassUpsertArgs} args - Arguments to update or create a Class.
     * @example
     * // Update or create a Class
     * const class = await prisma.class.upsert({
     *   create: {
     *     // ... data to create a Class
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Class we want to update
     *   }
     * })
     */
    upsert<T extends ClassUpsertArgs>(args: SelectSubset<T, ClassUpsertArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.class.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends ClassCountArgs>(
      args?: Subset<T, ClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassAggregateArgs>(args: Subset<T, ClassAggregateArgs>): Prisma.PrismaPromise<GetClassAggregateType<T>>

    /**
     * Group by Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassGroupByArgs['orderBy'] }
        : { orderBy?: ClassGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Class model
   */
  readonly fields: ClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Class.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    long<T extends Class$longArgs<ExtArgs> = {}>(args?: Subset<T, Class$longArgs<ExtArgs>>): Prisma__ClassLongClient<$Result.GetResult<Prisma.$ClassLongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    spells<T extends Class$spellsArgs<ExtArgs> = {}>(args?: Subset<T, Class$spellsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpellPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Class model
   */
  interface ClassFieldRefs {
    readonly id: FieldRef<"Class", 'String'>
    readonly name: FieldRef<"Class", 'String'>
    readonly description: FieldRef<"Class", 'String'>
    readonly image: FieldRef<"Class", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Class findUnique
   */
  export type ClassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findUniqueOrThrow
   */
  export type ClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findFirst
   */
  export type ClassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findFirstOrThrow
   */
  export type ClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findMany
   */
  export type ClassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Classes to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class create
   */
  export type ClassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to create a Class.
     */
    data: XOR<ClassCreateInput, ClassUncheckedCreateInput>
  }

  /**
   * Class createMany
   */
  export type ClassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Class createManyAndReturn
   */
  export type ClassCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Class update
   */
  export type ClassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to update a Class.
     */
    data: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
    /**
     * Choose, which Class to update.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class updateMany
   */
  export type ClassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
  }

  /**
   * Class updateManyAndReturn
   */
  export type ClassUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
  }

  /**
   * Class upsert
   */
  export type ClassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The filter to search for the Class to update in case it exists.
     */
    where: ClassWhereUniqueInput
    /**
     * In case the Class found by the `where` argument doesn't exist, create a new Class with this data.
     */
    create: XOR<ClassCreateInput, ClassUncheckedCreateInput>
    /**
     * In case the Class was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
  }

  /**
   * Class delete
   */
  export type ClassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter which Class to delete.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class deleteMany
   */
  export type ClassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classes to delete
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to delete.
     */
    limit?: number
  }

  /**
   * Class.long
   */
  export type Class$longArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassLong
     */
    select?: ClassLongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassLong
     */
    omit?: ClassLongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassLongInclude<ExtArgs> | null
    where?: ClassLongWhereInput
  }

  /**
   * Class.spells
   */
  export type Class$spellsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spell
     */
    select?: SpellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spell
     */
    omit?: SpellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpellInclude<ExtArgs> | null
    where?: SpellWhereInput
    orderBy?: SpellOrderByWithRelationInput | SpellOrderByWithRelationInput[]
    cursor?: SpellWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpellScalarFieldEnum | SpellScalarFieldEnum[]
  }

  /**
   * Class without action
   */
  export type ClassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
  }


  /**
   * Model ClassLong
   */

  export type AggregateClassLong = {
    _count: ClassLongCountAggregateOutputType | null
    _avg: ClassLongAvgAggregateOutputType | null
    _sum: ClassLongSumAggregateOutputType | null
    _min: ClassLongMinAggregateOutputType | null
    _max: ClassLongMaxAggregateOutputType | null
  }

  export type ClassLongAvgAggregateOutputType = {
    skillsChoose: number | null
  }

  export type ClassLongSumAggregateOutputType = {
    skillsChoose: number | null
  }

  export type ClassLongMinAggregateOutputType = {
    id: string | null
    source: string | null
    hitDice: string | null
    image: string | null
    skillsChoose: number | null
    description: string | null
  }

  export type ClassLongMaxAggregateOutputType = {
    id: string | null
    source: string | null
    hitDice: string | null
    image: string | null
    skillsChoose: number | null
    description: string | null
  }

  export type ClassLongCountAggregateOutputType = {
    id: number
    source: number
    hitDice: number
    image: number
    primaryAbility: number
    savingThrows: number
    skillsChoose: number
    skillsFrom: number
    description: number
    progression: number
    features: number
    _all: number
  }


  export type ClassLongAvgAggregateInputType = {
    skillsChoose?: true
  }

  export type ClassLongSumAggregateInputType = {
    skillsChoose?: true
  }

  export type ClassLongMinAggregateInputType = {
    id?: true
    source?: true
    hitDice?: true
    image?: true
    skillsChoose?: true
    description?: true
  }

  export type ClassLongMaxAggregateInputType = {
    id?: true
    source?: true
    hitDice?: true
    image?: true
    skillsChoose?: true
    description?: true
  }

  export type ClassLongCountAggregateInputType = {
    id?: true
    source?: true
    hitDice?: true
    image?: true
    primaryAbility?: true
    savingThrows?: true
    skillsChoose?: true
    skillsFrom?: true
    description?: true
    progression?: true
    features?: true
    _all?: true
  }

  export type ClassLongAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassLong to aggregate.
     */
    where?: ClassLongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassLongs to fetch.
     */
    orderBy?: ClassLongOrderByWithRelationInput | ClassLongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassLongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassLongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassLongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClassLongs
    **/
    _count?: true | ClassLongCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassLongAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassLongSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassLongMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassLongMaxAggregateInputType
  }

  export type GetClassLongAggregateType<T extends ClassLongAggregateArgs> = {
        [P in keyof T & keyof AggregateClassLong]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassLong[P]>
      : GetScalarType<T[P], AggregateClassLong[P]>
  }




  export type ClassLongGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassLongWhereInput
    orderBy?: ClassLongOrderByWithAggregationInput | ClassLongOrderByWithAggregationInput[]
    by: ClassLongScalarFieldEnum[] | ClassLongScalarFieldEnum
    having?: ClassLongScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassLongCountAggregateInputType | true
    _avg?: ClassLongAvgAggregateInputType
    _sum?: ClassLongSumAggregateInputType
    _min?: ClassLongMinAggregateInputType
    _max?: ClassLongMaxAggregateInputType
  }

  export type ClassLongGroupByOutputType = {
    id: string
    source: string
    hitDice: string
    image: string | null
    primaryAbility: string[]
    savingThrows: string[]
    skillsChoose: number
    skillsFrom: string[]
    description: string
    progression: JsonValue
    features: JsonValue
    _count: ClassLongCountAggregateOutputType | null
    _avg: ClassLongAvgAggregateOutputType | null
    _sum: ClassLongSumAggregateOutputType | null
    _min: ClassLongMinAggregateOutputType | null
    _max: ClassLongMaxAggregateOutputType | null
  }

  type GetClassLongGroupByPayload<T extends ClassLongGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassLongGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassLongGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassLongGroupByOutputType[P]>
            : GetScalarType<T[P], ClassLongGroupByOutputType[P]>
        }
      >
    >


  export type ClassLongSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    hitDice?: boolean
    image?: boolean
    primaryAbility?: boolean
    savingThrows?: boolean
    skillsChoose?: boolean
    skillsFrom?: boolean
    description?: boolean
    progression?: boolean
    features?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classLong"]>

  export type ClassLongSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    hitDice?: boolean
    image?: boolean
    primaryAbility?: boolean
    savingThrows?: boolean
    skillsChoose?: boolean
    skillsFrom?: boolean
    description?: boolean
    progression?: boolean
    features?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classLong"]>

  export type ClassLongSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    hitDice?: boolean
    image?: boolean
    primaryAbility?: boolean
    savingThrows?: boolean
    skillsChoose?: boolean
    skillsFrom?: boolean
    description?: boolean
    progression?: boolean
    features?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classLong"]>

  export type ClassLongSelectScalar = {
    id?: boolean
    source?: boolean
    hitDice?: boolean
    image?: boolean
    primaryAbility?: boolean
    savingThrows?: boolean
    skillsChoose?: boolean
    skillsFrom?: boolean
    description?: boolean
    progression?: boolean
    features?: boolean
  }

  export type ClassLongOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "source" | "hitDice" | "image" | "primaryAbility" | "savingThrows" | "skillsChoose" | "skillsFrom" | "description" | "progression" | "features", ExtArgs["result"]["classLong"]>
  export type ClassLongInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }
  export type ClassLongIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }
  export type ClassLongIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }

  export type $ClassLongPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClassLong"
    objects: {
      class: Prisma.$ClassPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      source: string
      hitDice: string
      image: string | null
      primaryAbility: string[]
      savingThrows: string[]
      skillsChoose: number
      skillsFrom: string[]
      description: string
      progression: Prisma.JsonValue
      features: Prisma.JsonValue
    }, ExtArgs["result"]["classLong"]>
    composites: {}
  }

  type ClassLongGetPayload<S extends boolean | null | undefined | ClassLongDefaultArgs> = $Result.GetResult<Prisma.$ClassLongPayload, S>

  type ClassLongCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassLongFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassLongCountAggregateInputType | true
    }

  export interface ClassLongDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClassLong'], meta: { name: 'ClassLong' } }
    /**
     * Find zero or one ClassLong that matches the filter.
     * @param {ClassLongFindUniqueArgs} args - Arguments to find a ClassLong
     * @example
     * // Get one ClassLong
     * const classLong = await prisma.classLong.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassLongFindUniqueArgs>(args: SelectSubset<T, ClassLongFindUniqueArgs<ExtArgs>>): Prisma__ClassLongClient<$Result.GetResult<Prisma.$ClassLongPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClassLong that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassLongFindUniqueOrThrowArgs} args - Arguments to find a ClassLong
     * @example
     * // Get one ClassLong
     * const classLong = await prisma.classLong.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassLongFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassLongFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassLongClient<$Result.GetResult<Prisma.$ClassLongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassLong that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassLongFindFirstArgs} args - Arguments to find a ClassLong
     * @example
     * // Get one ClassLong
     * const classLong = await prisma.classLong.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassLongFindFirstArgs>(args?: SelectSubset<T, ClassLongFindFirstArgs<ExtArgs>>): Prisma__ClassLongClient<$Result.GetResult<Prisma.$ClassLongPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassLong that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassLongFindFirstOrThrowArgs} args - Arguments to find a ClassLong
     * @example
     * // Get one ClassLong
     * const classLong = await prisma.classLong.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassLongFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassLongFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassLongClient<$Result.GetResult<Prisma.$ClassLongPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClassLongs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassLongFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClassLongs
     * const classLongs = await prisma.classLong.findMany()
     * 
     * // Get first 10 ClassLongs
     * const classLongs = await prisma.classLong.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classLongWithIdOnly = await prisma.classLong.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassLongFindManyArgs>(args?: SelectSubset<T, ClassLongFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassLongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClassLong.
     * @param {ClassLongCreateArgs} args - Arguments to create a ClassLong.
     * @example
     * // Create one ClassLong
     * const ClassLong = await prisma.classLong.create({
     *   data: {
     *     // ... data to create a ClassLong
     *   }
     * })
     * 
     */
    create<T extends ClassLongCreateArgs>(args: SelectSubset<T, ClassLongCreateArgs<ExtArgs>>): Prisma__ClassLongClient<$Result.GetResult<Prisma.$ClassLongPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClassLongs.
     * @param {ClassLongCreateManyArgs} args - Arguments to create many ClassLongs.
     * @example
     * // Create many ClassLongs
     * const classLong = await prisma.classLong.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassLongCreateManyArgs>(args?: SelectSubset<T, ClassLongCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClassLongs and returns the data saved in the database.
     * @param {ClassLongCreateManyAndReturnArgs} args - Arguments to create many ClassLongs.
     * @example
     * // Create many ClassLongs
     * const classLong = await prisma.classLong.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClassLongs and only return the `id`
     * const classLongWithIdOnly = await prisma.classLong.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassLongCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassLongCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassLongPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClassLong.
     * @param {ClassLongDeleteArgs} args - Arguments to delete one ClassLong.
     * @example
     * // Delete one ClassLong
     * const ClassLong = await prisma.classLong.delete({
     *   where: {
     *     // ... filter to delete one ClassLong
     *   }
     * })
     * 
     */
    delete<T extends ClassLongDeleteArgs>(args: SelectSubset<T, ClassLongDeleteArgs<ExtArgs>>): Prisma__ClassLongClient<$Result.GetResult<Prisma.$ClassLongPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClassLong.
     * @param {ClassLongUpdateArgs} args - Arguments to update one ClassLong.
     * @example
     * // Update one ClassLong
     * const classLong = await prisma.classLong.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassLongUpdateArgs>(args: SelectSubset<T, ClassLongUpdateArgs<ExtArgs>>): Prisma__ClassLongClient<$Result.GetResult<Prisma.$ClassLongPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClassLongs.
     * @param {ClassLongDeleteManyArgs} args - Arguments to filter ClassLongs to delete.
     * @example
     * // Delete a few ClassLongs
     * const { count } = await prisma.classLong.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassLongDeleteManyArgs>(args?: SelectSubset<T, ClassLongDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassLongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassLongUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClassLongs
     * const classLong = await prisma.classLong.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassLongUpdateManyArgs>(args: SelectSubset<T, ClassLongUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassLongs and returns the data updated in the database.
     * @param {ClassLongUpdateManyAndReturnArgs} args - Arguments to update many ClassLongs.
     * @example
     * // Update many ClassLongs
     * const classLong = await prisma.classLong.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClassLongs and only return the `id`
     * const classLongWithIdOnly = await prisma.classLong.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClassLongUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassLongUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassLongPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClassLong.
     * @param {ClassLongUpsertArgs} args - Arguments to update or create a ClassLong.
     * @example
     * // Update or create a ClassLong
     * const classLong = await prisma.classLong.upsert({
     *   create: {
     *     // ... data to create a ClassLong
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClassLong we want to update
     *   }
     * })
     */
    upsert<T extends ClassLongUpsertArgs>(args: SelectSubset<T, ClassLongUpsertArgs<ExtArgs>>): Prisma__ClassLongClient<$Result.GetResult<Prisma.$ClassLongPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClassLongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassLongCountArgs} args - Arguments to filter ClassLongs to count.
     * @example
     * // Count the number of ClassLongs
     * const count = await prisma.classLong.count({
     *   where: {
     *     // ... the filter for the ClassLongs we want to count
     *   }
     * })
    **/
    count<T extends ClassLongCountArgs>(
      args?: Subset<T, ClassLongCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassLongCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClassLong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassLongAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassLongAggregateArgs>(args: Subset<T, ClassLongAggregateArgs>): Prisma.PrismaPromise<GetClassLongAggregateType<T>>

    /**
     * Group by ClassLong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassLongGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClassLongGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassLongGroupByArgs['orderBy'] }
        : { orderBy?: ClassLongGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClassLongGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassLongGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClassLong model
   */
  readonly fields: ClassLongFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClassLong.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassLongClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClassLong model
   */
  interface ClassLongFieldRefs {
    readonly id: FieldRef<"ClassLong", 'String'>
    readonly source: FieldRef<"ClassLong", 'String'>
    readonly hitDice: FieldRef<"ClassLong", 'String'>
    readonly image: FieldRef<"ClassLong", 'String'>
    readonly primaryAbility: FieldRef<"ClassLong", 'String[]'>
    readonly savingThrows: FieldRef<"ClassLong", 'String[]'>
    readonly skillsChoose: FieldRef<"ClassLong", 'Int'>
    readonly skillsFrom: FieldRef<"ClassLong", 'String[]'>
    readonly description: FieldRef<"ClassLong", 'String'>
    readonly progression: FieldRef<"ClassLong", 'Json'>
    readonly features: FieldRef<"ClassLong", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * ClassLong findUnique
   */
  export type ClassLongFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassLong
     */
    select?: ClassLongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassLong
     */
    omit?: ClassLongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassLongInclude<ExtArgs> | null
    /**
     * Filter, which ClassLong to fetch.
     */
    where: ClassLongWhereUniqueInput
  }

  /**
   * ClassLong findUniqueOrThrow
   */
  export type ClassLongFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassLong
     */
    select?: ClassLongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassLong
     */
    omit?: ClassLongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassLongInclude<ExtArgs> | null
    /**
     * Filter, which ClassLong to fetch.
     */
    where: ClassLongWhereUniqueInput
  }

  /**
   * ClassLong findFirst
   */
  export type ClassLongFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassLong
     */
    select?: ClassLongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassLong
     */
    omit?: ClassLongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassLongInclude<ExtArgs> | null
    /**
     * Filter, which ClassLong to fetch.
     */
    where?: ClassLongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassLongs to fetch.
     */
    orderBy?: ClassLongOrderByWithRelationInput | ClassLongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassLongs.
     */
    cursor?: ClassLongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassLongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassLongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassLongs.
     */
    distinct?: ClassLongScalarFieldEnum | ClassLongScalarFieldEnum[]
  }

  /**
   * ClassLong findFirstOrThrow
   */
  export type ClassLongFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassLong
     */
    select?: ClassLongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassLong
     */
    omit?: ClassLongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassLongInclude<ExtArgs> | null
    /**
     * Filter, which ClassLong to fetch.
     */
    where?: ClassLongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassLongs to fetch.
     */
    orderBy?: ClassLongOrderByWithRelationInput | ClassLongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassLongs.
     */
    cursor?: ClassLongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassLongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassLongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassLongs.
     */
    distinct?: ClassLongScalarFieldEnum | ClassLongScalarFieldEnum[]
  }

  /**
   * ClassLong findMany
   */
  export type ClassLongFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassLong
     */
    select?: ClassLongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassLong
     */
    omit?: ClassLongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassLongInclude<ExtArgs> | null
    /**
     * Filter, which ClassLongs to fetch.
     */
    where?: ClassLongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassLongs to fetch.
     */
    orderBy?: ClassLongOrderByWithRelationInput | ClassLongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClassLongs.
     */
    cursor?: ClassLongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassLongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassLongs.
     */
    skip?: number
    distinct?: ClassLongScalarFieldEnum | ClassLongScalarFieldEnum[]
  }

  /**
   * ClassLong create
   */
  export type ClassLongCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassLong
     */
    select?: ClassLongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassLong
     */
    omit?: ClassLongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassLongInclude<ExtArgs> | null
    /**
     * The data needed to create a ClassLong.
     */
    data: XOR<ClassLongCreateInput, ClassLongUncheckedCreateInput>
  }

  /**
   * ClassLong createMany
   */
  export type ClassLongCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClassLongs.
     */
    data: ClassLongCreateManyInput | ClassLongCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClassLong createManyAndReturn
   */
  export type ClassLongCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassLong
     */
    select?: ClassLongSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassLong
     */
    omit?: ClassLongOmit<ExtArgs> | null
    /**
     * The data used to create many ClassLongs.
     */
    data: ClassLongCreateManyInput | ClassLongCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassLongIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClassLong update
   */
  export type ClassLongUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassLong
     */
    select?: ClassLongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassLong
     */
    omit?: ClassLongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassLongInclude<ExtArgs> | null
    /**
     * The data needed to update a ClassLong.
     */
    data: XOR<ClassLongUpdateInput, ClassLongUncheckedUpdateInput>
    /**
     * Choose, which ClassLong to update.
     */
    where: ClassLongWhereUniqueInput
  }

  /**
   * ClassLong updateMany
   */
  export type ClassLongUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClassLongs.
     */
    data: XOR<ClassLongUpdateManyMutationInput, ClassLongUncheckedUpdateManyInput>
    /**
     * Filter which ClassLongs to update
     */
    where?: ClassLongWhereInput
    /**
     * Limit how many ClassLongs to update.
     */
    limit?: number
  }

  /**
   * ClassLong updateManyAndReturn
   */
  export type ClassLongUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassLong
     */
    select?: ClassLongSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassLong
     */
    omit?: ClassLongOmit<ExtArgs> | null
    /**
     * The data used to update ClassLongs.
     */
    data: XOR<ClassLongUpdateManyMutationInput, ClassLongUncheckedUpdateManyInput>
    /**
     * Filter which ClassLongs to update
     */
    where?: ClassLongWhereInput
    /**
     * Limit how many ClassLongs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassLongIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClassLong upsert
   */
  export type ClassLongUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassLong
     */
    select?: ClassLongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassLong
     */
    omit?: ClassLongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassLongInclude<ExtArgs> | null
    /**
     * The filter to search for the ClassLong to update in case it exists.
     */
    where: ClassLongWhereUniqueInput
    /**
     * In case the ClassLong found by the `where` argument doesn't exist, create a new ClassLong with this data.
     */
    create: XOR<ClassLongCreateInput, ClassLongUncheckedCreateInput>
    /**
     * In case the ClassLong was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassLongUpdateInput, ClassLongUncheckedUpdateInput>
  }

  /**
   * ClassLong delete
   */
  export type ClassLongDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassLong
     */
    select?: ClassLongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassLong
     */
    omit?: ClassLongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassLongInclude<ExtArgs> | null
    /**
     * Filter which ClassLong to delete.
     */
    where: ClassLongWhereUniqueInput
  }

  /**
   * ClassLong deleteMany
   */
  export type ClassLongDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassLongs to delete
     */
    where?: ClassLongWhereInput
    /**
     * Limit how many ClassLongs to delete.
     */
    limit?: number
  }

  /**
   * ClassLong without action
   */
  export type ClassLongDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassLong
     */
    select?: ClassLongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassLong
     */
    omit?: ClassLongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassLongInclude<ExtArgs> | null
  }


  /**
   * Model Race
   */

  export type AggregateRace = {
    _count: RaceCountAggregateOutputType | null
    _min: RaceMinAggregateOutputType | null
    _max: RaceMaxAggregateOutputType | null
  }

  export type RaceMinAggregateOutputType = {
    id: string | null
    name: string | null
    image: string | null
    source: string | null
    version: string | null
    size: string | null
    darkvision: string | null
  }

  export type RaceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    image: string | null
    source: string | null
    version: string | null
    size: string | null
    darkvision: string | null
  }

  export type RaceCountAggregateOutputType = {
    id: number
    name: number
    image: number
    source: number
    version: number
    size: number
    speed: number
    abilityBonuses: number
    languages: number
    darkvision: number
    _all: number
  }


  export type RaceMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
    source?: true
    version?: true
    size?: true
    darkvision?: true
  }

  export type RaceMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
    source?: true
    version?: true
    size?: true
    darkvision?: true
  }

  export type RaceCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    source?: true
    version?: true
    size?: true
    speed?: true
    abilityBonuses?: true
    languages?: true
    darkvision?: true
    _all?: true
  }

  export type RaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Race to aggregate.
     */
    where?: RaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Races
    **/
    _count?: true | RaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RaceMaxAggregateInputType
  }

  export type GetRaceAggregateType<T extends RaceAggregateArgs> = {
        [P in keyof T & keyof AggregateRace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRace[P]>
      : GetScalarType<T[P], AggregateRace[P]>
  }




  export type RaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceWhereInput
    orderBy?: RaceOrderByWithAggregationInput | RaceOrderByWithAggregationInput[]
    by: RaceScalarFieldEnum[] | RaceScalarFieldEnum
    having?: RaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RaceCountAggregateInputType | true
    _min?: RaceMinAggregateInputType
    _max?: RaceMaxAggregateInputType
  }

  export type RaceGroupByOutputType = {
    id: string
    name: string
    image: string | null
    source: string
    version: string
    size: string
    speed: string[]
    abilityBonuses: string[]
    languages: string[]
    darkvision: string | null
    _count: RaceCountAggregateOutputType | null
    _min: RaceMinAggregateOutputType | null
    _max: RaceMaxAggregateOutputType | null
  }

  type GetRaceGroupByPayload<T extends RaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RaceGroupByOutputType[P]>
            : GetScalarType<T[P], RaceGroupByOutputType[P]>
        }
      >
    >


  export type RaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    source?: boolean
    version?: boolean
    size?: boolean
    speed?: boolean
    abilityBonuses?: boolean
    languages?: boolean
    darkvision?: boolean
    traits?: boolean | Race$traitsArgs<ExtArgs>
    subraces?: boolean | Race$subracesArgs<ExtArgs>
    _count?: boolean | RaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["race"]>

  export type RaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    source?: boolean
    version?: boolean
    size?: boolean
    speed?: boolean
    abilityBonuses?: boolean
    languages?: boolean
    darkvision?: boolean
  }, ExtArgs["result"]["race"]>

  export type RaceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    source?: boolean
    version?: boolean
    size?: boolean
    speed?: boolean
    abilityBonuses?: boolean
    languages?: boolean
    darkvision?: boolean
  }, ExtArgs["result"]["race"]>

  export type RaceSelectScalar = {
    id?: boolean
    name?: boolean
    image?: boolean
    source?: boolean
    version?: boolean
    size?: boolean
    speed?: boolean
    abilityBonuses?: boolean
    languages?: boolean
    darkvision?: boolean
  }

  export type RaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "image" | "source" | "version" | "size" | "speed" | "abilityBonuses" | "languages" | "darkvision", ExtArgs["result"]["race"]>
  export type RaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    traits?: boolean | Race$traitsArgs<ExtArgs>
    subraces?: boolean | Race$subracesArgs<ExtArgs>
    _count?: boolean | RaceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RaceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Race"
    objects: {
      traits: Prisma.$TraitPayload<ExtArgs>[]
      subraces: Prisma.$SubRacePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      image: string | null
      source: string
      version: string
      size: string
      speed: string[]
      abilityBonuses: string[]
      languages: string[]
      darkvision: string | null
    }, ExtArgs["result"]["race"]>
    composites: {}
  }

  type RaceGetPayload<S extends boolean | null | undefined | RaceDefaultArgs> = $Result.GetResult<Prisma.$RacePayload, S>

  type RaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RaceCountAggregateInputType | true
    }

  export interface RaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Race'], meta: { name: 'Race' } }
    /**
     * Find zero or one Race that matches the filter.
     * @param {RaceFindUniqueArgs} args - Arguments to find a Race
     * @example
     * // Get one Race
     * const race = await prisma.race.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RaceFindUniqueArgs>(args: SelectSubset<T, RaceFindUniqueArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Race that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RaceFindUniqueOrThrowArgs} args - Arguments to find a Race
     * @example
     * // Get one Race
     * const race = await prisma.race.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RaceFindUniqueOrThrowArgs>(args: SelectSubset<T, RaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Race that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceFindFirstArgs} args - Arguments to find a Race
     * @example
     * // Get one Race
     * const race = await prisma.race.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RaceFindFirstArgs>(args?: SelectSubset<T, RaceFindFirstArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Race that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceFindFirstOrThrowArgs} args - Arguments to find a Race
     * @example
     * // Get one Race
     * const race = await prisma.race.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RaceFindFirstOrThrowArgs>(args?: SelectSubset<T, RaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Races that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Races
     * const races = await prisma.race.findMany()
     * 
     * // Get first 10 Races
     * const races = await prisma.race.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const raceWithIdOnly = await prisma.race.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RaceFindManyArgs>(args?: SelectSubset<T, RaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Race.
     * @param {RaceCreateArgs} args - Arguments to create a Race.
     * @example
     * // Create one Race
     * const Race = await prisma.race.create({
     *   data: {
     *     // ... data to create a Race
     *   }
     * })
     * 
     */
    create<T extends RaceCreateArgs>(args: SelectSubset<T, RaceCreateArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Races.
     * @param {RaceCreateManyArgs} args - Arguments to create many Races.
     * @example
     * // Create many Races
     * const race = await prisma.race.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RaceCreateManyArgs>(args?: SelectSubset<T, RaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Races and returns the data saved in the database.
     * @param {RaceCreateManyAndReturnArgs} args - Arguments to create many Races.
     * @example
     * // Create many Races
     * const race = await prisma.race.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Races and only return the `id`
     * const raceWithIdOnly = await prisma.race.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RaceCreateManyAndReturnArgs>(args?: SelectSubset<T, RaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Race.
     * @param {RaceDeleteArgs} args - Arguments to delete one Race.
     * @example
     * // Delete one Race
     * const Race = await prisma.race.delete({
     *   where: {
     *     // ... filter to delete one Race
     *   }
     * })
     * 
     */
    delete<T extends RaceDeleteArgs>(args: SelectSubset<T, RaceDeleteArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Race.
     * @param {RaceUpdateArgs} args - Arguments to update one Race.
     * @example
     * // Update one Race
     * const race = await prisma.race.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RaceUpdateArgs>(args: SelectSubset<T, RaceUpdateArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Races.
     * @param {RaceDeleteManyArgs} args - Arguments to filter Races to delete.
     * @example
     * // Delete a few Races
     * const { count } = await prisma.race.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RaceDeleteManyArgs>(args?: SelectSubset<T, RaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Races.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Races
     * const race = await prisma.race.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RaceUpdateManyArgs>(args: SelectSubset<T, RaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Races and returns the data updated in the database.
     * @param {RaceUpdateManyAndReturnArgs} args - Arguments to update many Races.
     * @example
     * // Update many Races
     * const race = await prisma.race.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Races and only return the `id`
     * const raceWithIdOnly = await prisma.race.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RaceUpdateManyAndReturnArgs>(args: SelectSubset<T, RaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Race.
     * @param {RaceUpsertArgs} args - Arguments to update or create a Race.
     * @example
     * // Update or create a Race
     * const race = await prisma.race.upsert({
     *   create: {
     *     // ... data to create a Race
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Race we want to update
     *   }
     * })
     */
    upsert<T extends RaceUpsertArgs>(args: SelectSubset<T, RaceUpsertArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Races.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceCountArgs} args - Arguments to filter Races to count.
     * @example
     * // Count the number of Races
     * const count = await prisma.race.count({
     *   where: {
     *     // ... the filter for the Races we want to count
     *   }
     * })
    **/
    count<T extends RaceCountArgs>(
      args?: Subset<T, RaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Race.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RaceAggregateArgs>(args: Subset<T, RaceAggregateArgs>): Prisma.PrismaPromise<GetRaceAggregateType<T>>

    /**
     * Group by Race.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RaceGroupByArgs['orderBy'] }
        : { orderBy?: RaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Race model
   */
  readonly fields: RaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Race.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    traits<T extends Race$traitsArgs<ExtArgs> = {}>(args?: Subset<T, Race$traitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TraitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subraces<T extends Race$subracesArgs<ExtArgs> = {}>(args?: Subset<T, Race$subracesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubRacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Race model
   */
  interface RaceFieldRefs {
    readonly id: FieldRef<"Race", 'String'>
    readonly name: FieldRef<"Race", 'String'>
    readonly image: FieldRef<"Race", 'String'>
    readonly source: FieldRef<"Race", 'String'>
    readonly version: FieldRef<"Race", 'String'>
    readonly size: FieldRef<"Race", 'String'>
    readonly speed: FieldRef<"Race", 'String[]'>
    readonly abilityBonuses: FieldRef<"Race", 'String[]'>
    readonly languages: FieldRef<"Race", 'String[]'>
    readonly darkvision: FieldRef<"Race", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Race findUnique
   */
  export type RaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Race to fetch.
     */
    where: RaceWhereUniqueInput
  }

  /**
   * Race findUniqueOrThrow
   */
  export type RaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Race to fetch.
     */
    where: RaceWhereUniqueInput
  }

  /**
   * Race findFirst
   */
  export type RaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Race to fetch.
     */
    where?: RaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Races.
     */
    cursor?: RaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Races.
     */
    distinct?: RaceScalarFieldEnum | RaceScalarFieldEnum[]
  }

  /**
   * Race findFirstOrThrow
   */
  export type RaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Race to fetch.
     */
    where?: RaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Races.
     */
    cursor?: RaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Races.
     */
    distinct?: RaceScalarFieldEnum | RaceScalarFieldEnum[]
  }

  /**
   * Race findMany
   */
  export type RaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Races to fetch.
     */
    where?: RaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Races.
     */
    cursor?: RaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    distinct?: RaceScalarFieldEnum | RaceScalarFieldEnum[]
  }

  /**
   * Race create
   */
  export type RaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * The data needed to create a Race.
     */
    data: XOR<RaceCreateInput, RaceUncheckedCreateInput>
  }

  /**
   * Race createMany
   */
  export type RaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Races.
     */
    data: RaceCreateManyInput | RaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Race createManyAndReturn
   */
  export type RaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * The data used to create many Races.
     */
    data: RaceCreateManyInput | RaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Race update
   */
  export type RaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * The data needed to update a Race.
     */
    data: XOR<RaceUpdateInput, RaceUncheckedUpdateInput>
    /**
     * Choose, which Race to update.
     */
    where: RaceWhereUniqueInput
  }

  /**
   * Race updateMany
   */
  export type RaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Races.
     */
    data: XOR<RaceUpdateManyMutationInput, RaceUncheckedUpdateManyInput>
    /**
     * Filter which Races to update
     */
    where?: RaceWhereInput
    /**
     * Limit how many Races to update.
     */
    limit?: number
  }

  /**
   * Race updateManyAndReturn
   */
  export type RaceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * The data used to update Races.
     */
    data: XOR<RaceUpdateManyMutationInput, RaceUncheckedUpdateManyInput>
    /**
     * Filter which Races to update
     */
    where?: RaceWhereInput
    /**
     * Limit how many Races to update.
     */
    limit?: number
  }

  /**
   * Race upsert
   */
  export type RaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * The filter to search for the Race to update in case it exists.
     */
    where: RaceWhereUniqueInput
    /**
     * In case the Race found by the `where` argument doesn't exist, create a new Race with this data.
     */
    create: XOR<RaceCreateInput, RaceUncheckedCreateInput>
    /**
     * In case the Race was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RaceUpdateInput, RaceUncheckedUpdateInput>
  }

  /**
   * Race delete
   */
  export type RaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter which Race to delete.
     */
    where: RaceWhereUniqueInput
  }

  /**
   * Race deleteMany
   */
  export type RaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Races to delete
     */
    where?: RaceWhereInput
    /**
     * Limit how many Races to delete.
     */
    limit?: number
  }

  /**
   * Race.traits
   */
  export type Race$traitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trait
     */
    select?: TraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trait
     */
    omit?: TraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraitInclude<ExtArgs> | null
    where?: TraitWhereInput
    orderBy?: TraitOrderByWithRelationInput | TraitOrderByWithRelationInput[]
    cursor?: TraitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TraitScalarFieldEnum | TraitScalarFieldEnum[]
  }

  /**
   * Race.subraces
   */
  export type Race$subracesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubRace
     */
    select?: SubRaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubRace
     */
    omit?: SubRaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubRaceInclude<ExtArgs> | null
    where?: SubRaceWhereInput
    orderBy?: SubRaceOrderByWithRelationInput | SubRaceOrderByWithRelationInput[]
    cursor?: SubRaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubRaceScalarFieldEnum | SubRaceScalarFieldEnum[]
  }

  /**
   * Race without action
   */
  export type RaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
  }


  /**
   * Model Trait
   */

  export type AggregateTrait = {
    _count: TraitCountAggregateOutputType | null
    _avg: TraitAvgAggregateOutputType | null
    _sum: TraitSumAggregateOutputType | null
    _min: TraitMinAggregateOutputType | null
    _max: TraitMaxAggregateOutputType | null
  }

  export type TraitAvgAggregateOutputType = {
    id: number | null
  }

  export type TraitSumAggregateOutputType = {
    id: number | null
  }

  export type TraitMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    raceId: string | null
  }

  export type TraitMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    raceId: string | null
  }

  export type TraitCountAggregateOutputType = {
    id: number
    name: number
    description: number
    raceId: number
    _all: number
  }


  export type TraitAvgAggregateInputType = {
    id?: true
  }

  export type TraitSumAggregateInputType = {
    id?: true
  }

  export type TraitMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    raceId?: true
  }

  export type TraitMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    raceId?: true
  }

  export type TraitCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    raceId?: true
    _all?: true
  }

  export type TraitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trait to aggregate.
     */
    where?: TraitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Traits to fetch.
     */
    orderBy?: TraitOrderByWithRelationInput | TraitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TraitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Traits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Traits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Traits
    **/
    _count?: true | TraitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TraitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TraitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TraitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TraitMaxAggregateInputType
  }

  export type GetTraitAggregateType<T extends TraitAggregateArgs> = {
        [P in keyof T & keyof AggregateTrait]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrait[P]>
      : GetScalarType<T[P], AggregateTrait[P]>
  }




  export type TraitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TraitWhereInput
    orderBy?: TraitOrderByWithAggregationInput | TraitOrderByWithAggregationInput[]
    by: TraitScalarFieldEnum[] | TraitScalarFieldEnum
    having?: TraitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TraitCountAggregateInputType | true
    _avg?: TraitAvgAggregateInputType
    _sum?: TraitSumAggregateInputType
    _min?: TraitMinAggregateInputType
    _max?: TraitMaxAggregateInputType
  }

  export type TraitGroupByOutputType = {
    id: number
    name: string
    description: string
    raceId: string | null
    _count: TraitCountAggregateOutputType | null
    _avg: TraitAvgAggregateOutputType | null
    _sum: TraitSumAggregateOutputType | null
    _min: TraitMinAggregateOutputType | null
    _max: TraitMaxAggregateOutputType | null
  }

  type GetTraitGroupByPayload<T extends TraitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TraitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TraitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TraitGroupByOutputType[P]>
            : GetScalarType<T[P], TraitGroupByOutputType[P]>
        }
      >
    >


  export type TraitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    raceId?: boolean
    race?: boolean | Trait$raceArgs<ExtArgs>
  }, ExtArgs["result"]["trait"]>

  export type TraitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    raceId?: boolean
    race?: boolean | Trait$raceArgs<ExtArgs>
  }, ExtArgs["result"]["trait"]>

  export type TraitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    raceId?: boolean
    race?: boolean | Trait$raceArgs<ExtArgs>
  }, ExtArgs["result"]["trait"]>

  export type TraitSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    raceId?: boolean
  }

  export type TraitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "raceId", ExtArgs["result"]["trait"]>
  export type TraitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    race?: boolean | Trait$raceArgs<ExtArgs>
  }
  export type TraitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    race?: boolean | Trait$raceArgs<ExtArgs>
  }
  export type TraitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    race?: boolean | Trait$raceArgs<ExtArgs>
  }

  export type $TraitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trait"
    objects: {
      race: Prisma.$RacePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      raceId: string | null
    }, ExtArgs["result"]["trait"]>
    composites: {}
  }

  type TraitGetPayload<S extends boolean | null | undefined | TraitDefaultArgs> = $Result.GetResult<Prisma.$TraitPayload, S>

  type TraitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TraitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TraitCountAggregateInputType | true
    }

  export interface TraitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trait'], meta: { name: 'Trait' } }
    /**
     * Find zero or one Trait that matches the filter.
     * @param {TraitFindUniqueArgs} args - Arguments to find a Trait
     * @example
     * // Get one Trait
     * const trait = await prisma.trait.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TraitFindUniqueArgs>(args: SelectSubset<T, TraitFindUniqueArgs<ExtArgs>>): Prisma__TraitClient<$Result.GetResult<Prisma.$TraitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trait that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TraitFindUniqueOrThrowArgs} args - Arguments to find a Trait
     * @example
     * // Get one Trait
     * const trait = await prisma.trait.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TraitFindUniqueOrThrowArgs>(args: SelectSubset<T, TraitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TraitClient<$Result.GetResult<Prisma.$TraitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trait that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraitFindFirstArgs} args - Arguments to find a Trait
     * @example
     * // Get one Trait
     * const trait = await prisma.trait.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TraitFindFirstArgs>(args?: SelectSubset<T, TraitFindFirstArgs<ExtArgs>>): Prisma__TraitClient<$Result.GetResult<Prisma.$TraitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trait that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraitFindFirstOrThrowArgs} args - Arguments to find a Trait
     * @example
     * // Get one Trait
     * const trait = await prisma.trait.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TraitFindFirstOrThrowArgs>(args?: SelectSubset<T, TraitFindFirstOrThrowArgs<ExtArgs>>): Prisma__TraitClient<$Result.GetResult<Prisma.$TraitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Traits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Traits
     * const traits = await prisma.trait.findMany()
     * 
     * // Get first 10 Traits
     * const traits = await prisma.trait.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const traitWithIdOnly = await prisma.trait.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TraitFindManyArgs>(args?: SelectSubset<T, TraitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TraitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trait.
     * @param {TraitCreateArgs} args - Arguments to create a Trait.
     * @example
     * // Create one Trait
     * const Trait = await prisma.trait.create({
     *   data: {
     *     // ... data to create a Trait
     *   }
     * })
     * 
     */
    create<T extends TraitCreateArgs>(args: SelectSubset<T, TraitCreateArgs<ExtArgs>>): Prisma__TraitClient<$Result.GetResult<Prisma.$TraitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Traits.
     * @param {TraitCreateManyArgs} args - Arguments to create many Traits.
     * @example
     * // Create many Traits
     * const trait = await prisma.trait.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TraitCreateManyArgs>(args?: SelectSubset<T, TraitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Traits and returns the data saved in the database.
     * @param {TraitCreateManyAndReturnArgs} args - Arguments to create many Traits.
     * @example
     * // Create many Traits
     * const trait = await prisma.trait.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Traits and only return the `id`
     * const traitWithIdOnly = await prisma.trait.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TraitCreateManyAndReturnArgs>(args?: SelectSubset<T, TraitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TraitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trait.
     * @param {TraitDeleteArgs} args - Arguments to delete one Trait.
     * @example
     * // Delete one Trait
     * const Trait = await prisma.trait.delete({
     *   where: {
     *     // ... filter to delete one Trait
     *   }
     * })
     * 
     */
    delete<T extends TraitDeleteArgs>(args: SelectSubset<T, TraitDeleteArgs<ExtArgs>>): Prisma__TraitClient<$Result.GetResult<Prisma.$TraitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trait.
     * @param {TraitUpdateArgs} args - Arguments to update one Trait.
     * @example
     * // Update one Trait
     * const trait = await prisma.trait.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TraitUpdateArgs>(args: SelectSubset<T, TraitUpdateArgs<ExtArgs>>): Prisma__TraitClient<$Result.GetResult<Prisma.$TraitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Traits.
     * @param {TraitDeleteManyArgs} args - Arguments to filter Traits to delete.
     * @example
     * // Delete a few Traits
     * const { count } = await prisma.trait.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TraitDeleteManyArgs>(args?: SelectSubset<T, TraitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Traits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Traits
     * const trait = await prisma.trait.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TraitUpdateManyArgs>(args: SelectSubset<T, TraitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Traits and returns the data updated in the database.
     * @param {TraitUpdateManyAndReturnArgs} args - Arguments to update many Traits.
     * @example
     * // Update many Traits
     * const trait = await prisma.trait.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Traits and only return the `id`
     * const traitWithIdOnly = await prisma.trait.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TraitUpdateManyAndReturnArgs>(args: SelectSubset<T, TraitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TraitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trait.
     * @param {TraitUpsertArgs} args - Arguments to update or create a Trait.
     * @example
     * // Update or create a Trait
     * const trait = await prisma.trait.upsert({
     *   create: {
     *     // ... data to create a Trait
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trait we want to update
     *   }
     * })
     */
    upsert<T extends TraitUpsertArgs>(args: SelectSubset<T, TraitUpsertArgs<ExtArgs>>): Prisma__TraitClient<$Result.GetResult<Prisma.$TraitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Traits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraitCountArgs} args - Arguments to filter Traits to count.
     * @example
     * // Count the number of Traits
     * const count = await prisma.trait.count({
     *   where: {
     *     // ... the filter for the Traits we want to count
     *   }
     * })
    **/
    count<T extends TraitCountArgs>(
      args?: Subset<T, TraitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TraitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trait.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TraitAggregateArgs>(args: Subset<T, TraitAggregateArgs>): Prisma.PrismaPromise<GetTraitAggregateType<T>>

    /**
     * Group by Trait.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TraitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TraitGroupByArgs['orderBy'] }
        : { orderBy?: TraitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TraitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTraitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trait model
   */
  readonly fields: TraitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trait.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TraitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    race<T extends Trait$raceArgs<ExtArgs> = {}>(args?: Subset<T, Trait$raceArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trait model
   */
  interface TraitFieldRefs {
    readonly id: FieldRef<"Trait", 'Int'>
    readonly name: FieldRef<"Trait", 'String'>
    readonly description: FieldRef<"Trait", 'String'>
    readonly raceId: FieldRef<"Trait", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Trait findUnique
   */
  export type TraitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trait
     */
    select?: TraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trait
     */
    omit?: TraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraitInclude<ExtArgs> | null
    /**
     * Filter, which Trait to fetch.
     */
    where: TraitWhereUniqueInput
  }

  /**
   * Trait findUniqueOrThrow
   */
  export type TraitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trait
     */
    select?: TraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trait
     */
    omit?: TraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraitInclude<ExtArgs> | null
    /**
     * Filter, which Trait to fetch.
     */
    where: TraitWhereUniqueInput
  }

  /**
   * Trait findFirst
   */
  export type TraitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trait
     */
    select?: TraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trait
     */
    omit?: TraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraitInclude<ExtArgs> | null
    /**
     * Filter, which Trait to fetch.
     */
    where?: TraitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Traits to fetch.
     */
    orderBy?: TraitOrderByWithRelationInput | TraitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Traits.
     */
    cursor?: TraitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Traits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Traits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Traits.
     */
    distinct?: TraitScalarFieldEnum | TraitScalarFieldEnum[]
  }

  /**
   * Trait findFirstOrThrow
   */
  export type TraitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trait
     */
    select?: TraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trait
     */
    omit?: TraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraitInclude<ExtArgs> | null
    /**
     * Filter, which Trait to fetch.
     */
    where?: TraitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Traits to fetch.
     */
    orderBy?: TraitOrderByWithRelationInput | TraitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Traits.
     */
    cursor?: TraitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Traits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Traits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Traits.
     */
    distinct?: TraitScalarFieldEnum | TraitScalarFieldEnum[]
  }

  /**
   * Trait findMany
   */
  export type TraitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trait
     */
    select?: TraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trait
     */
    omit?: TraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraitInclude<ExtArgs> | null
    /**
     * Filter, which Traits to fetch.
     */
    where?: TraitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Traits to fetch.
     */
    orderBy?: TraitOrderByWithRelationInput | TraitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Traits.
     */
    cursor?: TraitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Traits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Traits.
     */
    skip?: number
    distinct?: TraitScalarFieldEnum | TraitScalarFieldEnum[]
  }

  /**
   * Trait create
   */
  export type TraitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trait
     */
    select?: TraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trait
     */
    omit?: TraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraitInclude<ExtArgs> | null
    /**
     * The data needed to create a Trait.
     */
    data: XOR<TraitCreateInput, TraitUncheckedCreateInput>
  }

  /**
   * Trait createMany
   */
  export type TraitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Traits.
     */
    data: TraitCreateManyInput | TraitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trait createManyAndReturn
   */
  export type TraitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trait
     */
    select?: TraitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trait
     */
    omit?: TraitOmit<ExtArgs> | null
    /**
     * The data used to create many Traits.
     */
    data: TraitCreateManyInput | TraitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trait update
   */
  export type TraitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trait
     */
    select?: TraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trait
     */
    omit?: TraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraitInclude<ExtArgs> | null
    /**
     * The data needed to update a Trait.
     */
    data: XOR<TraitUpdateInput, TraitUncheckedUpdateInput>
    /**
     * Choose, which Trait to update.
     */
    where: TraitWhereUniqueInput
  }

  /**
   * Trait updateMany
   */
  export type TraitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Traits.
     */
    data: XOR<TraitUpdateManyMutationInput, TraitUncheckedUpdateManyInput>
    /**
     * Filter which Traits to update
     */
    where?: TraitWhereInput
    /**
     * Limit how many Traits to update.
     */
    limit?: number
  }

  /**
   * Trait updateManyAndReturn
   */
  export type TraitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trait
     */
    select?: TraitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trait
     */
    omit?: TraitOmit<ExtArgs> | null
    /**
     * The data used to update Traits.
     */
    data: XOR<TraitUpdateManyMutationInput, TraitUncheckedUpdateManyInput>
    /**
     * Filter which Traits to update
     */
    where?: TraitWhereInput
    /**
     * Limit how many Traits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trait upsert
   */
  export type TraitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trait
     */
    select?: TraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trait
     */
    omit?: TraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraitInclude<ExtArgs> | null
    /**
     * The filter to search for the Trait to update in case it exists.
     */
    where: TraitWhereUniqueInput
    /**
     * In case the Trait found by the `where` argument doesn't exist, create a new Trait with this data.
     */
    create: XOR<TraitCreateInput, TraitUncheckedCreateInput>
    /**
     * In case the Trait was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TraitUpdateInput, TraitUncheckedUpdateInput>
  }

  /**
   * Trait delete
   */
  export type TraitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trait
     */
    select?: TraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trait
     */
    omit?: TraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraitInclude<ExtArgs> | null
    /**
     * Filter which Trait to delete.
     */
    where: TraitWhereUniqueInput
  }

  /**
   * Trait deleteMany
   */
  export type TraitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Traits to delete
     */
    where?: TraitWhereInput
    /**
     * Limit how many Traits to delete.
     */
    limit?: number
  }

  /**
   * Trait.race
   */
  export type Trait$raceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    where?: RaceWhereInput
  }

  /**
   * Trait without action
   */
  export type TraitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trait
     */
    select?: TraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trait
     */
    omit?: TraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraitInclude<ExtArgs> | null
  }


  /**
   * Model SubRace
   */

  export type AggregateSubRace = {
    _count: SubRaceCountAggregateOutputType | null
    _min: SubRaceMinAggregateOutputType | null
    _max: SubRaceMaxAggregateOutputType | null
  }

  export type SubRaceMinAggregateOutputType = {
    id: string | null
    name: string | null
    image: string | null
    abilityBonuses: string | null
    raceId: string | null
  }

  export type SubRaceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    image: string | null
    abilityBonuses: string | null
    raceId: string | null
  }

  export type SubRaceCountAggregateOutputType = {
    id: number
    name: number
    image: number
    abilityBonuses: number
    traits: number
    raceId: number
    _all: number
  }


  export type SubRaceMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
    abilityBonuses?: true
    raceId?: true
  }

  export type SubRaceMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
    abilityBonuses?: true
    raceId?: true
  }

  export type SubRaceCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    abilityBonuses?: true
    traits?: true
    raceId?: true
    _all?: true
  }

  export type SubRaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubRace to aggregate.
     */
    where?: SubRaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubRaces to fetch.
     */
    orderBy?: SubRaceOrderByWithRelationInput | SubRaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubRaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubRaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubRaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubRaces
    **/
    _count?: true | SubRaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubRaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubRaceMaxAggregateInputType
  }

  export type GetSubRaceAggregateType<T extends SubRaceAggregateArgs> = {
        [P in keyof T & keyof AggregateSubRace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubRace[P]>
      : GetScalarType<T[P], AggregateSubRace[P]>
  }




  export type SubRaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubRaceWhereInput
    orderBy?: SubRaceOrderByWithAggregationInput | SubRaceOrderByWithAggregationInput[]
    by: SubRaceScalarFieldEnum[] | SubRaceScalarFieldEnum
    having?: SubRaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubRaceCountAggregateInputType | true
    _min?: SubRaceMinAggregateInputType
    _max?: SubRaceMaxAggregateInputType
  }

  export type SubRaceGroupByOutputType = {
    id: string
    name: string
    image: string | null
    abilityBonuses: string | null
    traits: JsonValue
    raceId: string | null
    _count: SubRaceCountAggregateOutputType | null
    _min: SubRaceMinAggregateOutputType | null
    _max: SubRaceMaxAggregateOutputType | null
  }

  type GetSubRaceGroupByPayload<T extends SubRaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubRaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubRaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubRaceGroupByOutputType[P]>
            : GetScalarType<T[P], SubRaceGroupByOutputType[P]>
        }
      >
    >


  export type SubRaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    abilityBonuses?: boolean
    traits?: boolean
    raceId?: boolean
    race?: boolean | SubRace$raceArgs<ExtArgs>
  }, ExtArgs["result"]["subRace"]>

  export type SubRaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    abilityBonuses?: boolean
    traits?: boolean
    raceId?: boolean
    race?: boolean | SubRace$raceArgs<ExtArgs>
  }, ExtArgs["result"]["subRace"]>

  export type SubRaceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    abilityBonuses?: boolean
    traits?: boolean
    raceId?: boolean
    race?: boolean | SubRace$raceArgs<ExtArgs>
  }, ExtArgs["result"]["subRace"]>

  export type SubRaceSelectScalar = {
    id?: boolean
    name?: boolean
    image?: boolean
    abilityBonuses?: boolean
    traits?: boolean
    raceId?: boolean
  }

  export type SubRaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "image" | "abilityBonuses" | "traits" | "raceId", ExtArgs["result"]["subRace"]>
  export type SubRaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    race?: boolean | SubRace$raceArgs<ExtArgs>
  }
  export type SubRaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    race?: boolean | SubRace$raceArgs<ExtArgs>
  }
  export type SubRaceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    race?: boolean | SubRace$raceArgs<ExtArgs>
  }

  export type $SubRacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubRace"
    objects: {
      race: Prisma.$RacePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      image: string | null
      abilityBonuses: string | null
      traits: Prisma.JsonValue
      raceId: string | null
    }, ExtArgs["result"]["subRace"]>
    composites: {}
  }

  type SubRaceGetPayload<S extends boolean | null | undefined | SubRaceDefaultArgs> = $Result.GetResult<Prisma.$SubRacePayload, S>

  type SubRaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubRaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubRaceCountAggregateInputType | true
    }

  export interface SubRaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubRace'], meta: { name: 'SubRace' } }
    /**
     * Find zero or one SubRace that matches the filter.
     * @param {SubRaceFindUniqueArgs} args - Arguments to find a SubRace
     * @example
     * // Get one SubRace
     * const subRace = await prisma.subRace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubRaceFindUniqueArgs>(args: SelectSubset<T, SubRaceFindUniqueArgs<ExtArgs>>): Prisma__SubRaceClient<$Result.GetResult<Prisma.$SubRacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubRace that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubRaceFindUniqueOrThrowArgs} args - Arguments to find a SubRace
     * @example
     * // Get one SubRace
     * const subRace = await prisma.subRace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubRaceFindUniqueOrThrowArgs>(args: SelectSubset<T, SubRaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubRaceClient<$Result.GetResult<Prisma.$SubRacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubRace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubRaceFindFirstArgs} args - Arguments to find a SubRace
     * @example
     * // Get one SubRace
     * const subRace = await prisma.subRace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubRaceFindFirstArgs>(args?: SelectSubset<T, SubRaceFindFirstArgs<ExtArgs>>): Prisma__SubRaceClient<$Result.GetResult<Prisma.$SubRacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubRace that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubRaceFindFirstOrThrowArgs} args - Arguments to find a SubRace
     * @example
     * // Get one SubRace
     * const subRace = await prisma.subRace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubRaceFindFirstOrThrowArgs>(args?: SelectSubset<T, SubRaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubRaceClient<$Result.GetResult<Prisma.$SubRacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubRaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubRaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubRaces
     * const subRaces = await prisma.subRace.findMany()
     * 
     * // Get first 10 SubRaces
     * const subRaces = await prisma.subRace.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subRaceWithIdOnly = await prisma.subRace.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubRaceFindManyArgs>(args?: SelectSubset<T, SubRaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubRacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubRace.
     * @param {SubRaceCreateArgs} args - Arguments to create a SubRace.
     * @example
     * // Create one SubRace
     * const SubRace = await prisma.subRace.create({
     *   data: {
     *     // ... data to create a SubRace
     *   }
     * })
     * 
     */
    create<T extends SubRaceCreateArgs>(args: SelectSubset<T, SubRaceCreateArgs<ExtArgs>>): Prisma__SubRaceClient<$Result.GetResult<Prisma.$SubRacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubRaces.
     * @param {SubRaceCreateManyArgs} args - Arguments to create many SubRaces.
     * @example
     * // Create many SubRaces
     * const subRace = await prisma.subRace.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubRaceCreateManyArgs>(args?: SelectSubset<T, SubRaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubRaces and returns the data saved in the database.
     * @param {SubRaceCreateManyAndReturnArgs} args - Arguments to create many SubRaces.
     * @example
     * // Create many SubRaces
     * const subRace = await prisma.subRace.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubRaces and only return the `id`
     * const subRaceWithIdOnly = await prisma.subRace.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubRaceCreateManyAndReturnArgs>(args?: SelectSubset<T, SubRaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubRacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubRace.
     * @param {SubRaceDeleteArgs} args - Arguments to delete one SubRace.
     * @example
     * // Delete one SubRace
     * const SubRace = await prisma.subRace.delete({
     *   where: {
     *     // ... filter to delete one SubRace
     *   }
     * })
     * 
     */
    delete<T extends SubRaceDeleteArgs>(args: SelectSubset<T, SubRaceDeleteArgs<ExtArgs>>): Prisma__SubRaceClient<$Result.GetResult<Prisma.$SubRacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubRace.
     * @param {SubRaceUpdateArgs} args - Arguments to update one SubRace.
     * @example
     * // Update one SubRace
     * const subRace = await prisma.subRace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubRaceUpdateArgs>(args: SelectSubset<T, SubRaceUpdateArgs<ExtArgs>>): Prisma__SubRaceClient<$Result.GetResult<Prisma.$SubRacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubRaces.
     * @param {SubRaceDeleteManyArgs} args - Arguments to filter SubRaces to delete.
     * @example
     * // Delete a few SubRaces
     * const { count } = await prisma.subRace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubRaceDeleteManyArgs>(args?: SelectSubset<T, SubRaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubRaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubRaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubRaces
     * const subRace = await prisma.subRace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubRaceUpdateManyArgs>(args: SelectSubset<T, SubRaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubRaces and returns the data updated in the database.
     * @param {SubRaceUpdateManyAndReturnArgs} args - Arguments to update many SubRaces.
     * @example
     * // Update many SubRaces
     * const subRace = await prisma.subRace.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubRaces and only return the `id`
     * const subRaceWithIdOnly = await prisma.subRace.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubRaceUpdateManyAndReturnArgs>(args: SelectSubset<T, SubRaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubRacePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubRace.
     * @param {SubRaceUpsertArgs} args - Arguments to update or create a SubRace.
     * @example
     * // Update or create a SubRace
     * const subRace = await prisma.subRace.upsert({
     *   create: {
     *     // ... data to create a SubRace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubRace we want to update
     *   }
     * })
     */
    upsert<T extends SubRaceUpsertArgs>(args: SelectSubset<T, SubRaceUpsertArgs<ExtArgs>>): Prisma__SubRaceClient<$Result.GetResult<Prisma.$SubRacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubRaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubRaceCountArgs} args - Arguments to filter SubRaces to count.
     * @example
     * // Count the number of SubRaces
     * const count = await prisma.subRace.count({
     *   where: {
     *     // ... the filter for the SubRaces we want to count
     *   }
     * })
    **/
    count<T extends SubRaceCountArgs>(
      args?: Subset<T, SubRaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubRaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubRace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubRaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubRaceAggregateArgs>(args: Subset<T, SubRaceAggregateArgs>): Prisma.PrismaPromise<GetSubRaceAggregateType<T>>

    /**
     * Group by SubRace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubRaceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubRaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubRaceGroupByArgs['orderBy'] }
        : { orderBy?: SubRaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubRaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubRaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubRace model
   */
  readonly fields: SubRaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubRace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubRaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    race<T extends SubRace$raceArgs<ExtArgs> = {}>(args?: Subset<T, SubRace$raceArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SubRace model
   */
  interface SubRaceFieldRefs {
    readonly id: FieldRef<"SubRace", 'String'>
    readonly name: FieldRef<"SubRace", 'String'>
    readonly image: FieldRef<"SubRace", 'String'>
    readonly abilityBonuses: FieldRef<"SubRace", 'String'>
    readonly traits: FieldRef<"SubRace", 'Json'>
    readonly raceId: FieldRef<"SubRace", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SubRace findUnique
   */
  export type SubRaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubRace
     */
    select?: SubRaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubRace
     */
    omit?: SubRaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubRaceInclude<ExtArgs> | null
    /**
     * Filter, which SubRace to fetch.
     */
    where: SubRaceWhereUniqueInput
  }

  /**
   * SubRace findUniqueOrThrow
   */
  export type SubRaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubRace
     */
    select?: SubRaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubRace
     */
    omit?: SubRaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubRaceInclude<ExtArgs> | null
    /**
     * Filter, which SubRace to fetch.
     */
    where: SubRaceWhereUniqueInput
  }

  /**
   * SubRace findFirst
   */
  export type SubRaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubRace
     */
    select?: SubRaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubRace
     */
    omit?: SubRaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubRaceInclude<ExtArgs> | null
    /**
     * Filter, which SubRace to fetch.
     */
    where?: SubRaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubRaces to fetch.
     */
    orderBy?: SubRaceOrderByWithRelationInput | SubRaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubRaces.
     */
    cursor?: SubRaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubRaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubRaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubRaces.
     */
    distinct?: SubRaceScalarFieldEnum | SubRaceScalarFieldEnum[]
  }

  /**
   * SubRace findFirstOrThrow
   */
  export type SubRaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubRace
     */
    select?: SubRaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubRace
     */
    omit?: SubRaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubRaceInclude<ExtArgs> | null
    /**
     * Filter, which SubRace to fetch.
     */
    where?: SubRaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubRaces to fetch.
     */
    orderBy?: SubRaceOrderByWithRelationInput | SubRaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubRaces.
     */
    cursor?: SubRaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubRaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubRaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubRaces.
     */
    distinct?: SubRaceScalarFieldEnum | SubRaceScalarFieldEnum[]
  }

  /**
   * SubRace findMany
   */
  export type SubRaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubRace
     */
    select?: SubRaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubRace
     */
    omit?: SubRaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubRaceInclude<ExtArgs> | null
    /**
     * Filter, which SubRaces to fetch.
     */
    where?: SubRaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubRaces to fetch.
     */
    orderBy?: SubRaceOrderByWithRelationInput | SubRaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubRaces.
     */
    cursor?: SubRaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubRaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubRaces.
     */
    skip?: number
    distinct?: SubRaceScalarFieldEnum | SubRaceScalarFieldEnum[]
  }

  /**
   * SubRace create
   */
  export type SubRaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubRace
     */
    select?: SubRaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubRace
     */
    omit?: SubRaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubRaceInclude<ExtArgs> | null
    /**
     * The data needed to create a SubRace.
     */
    data: XOR<SubRaceCreateInput, SubRaceUncheckedCreateInput>
  }

  /**
   * SubRace createMany
   */
  export type SubRaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubRaces.
     */
    data: SubRaceCreateManyInput | SubRaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubRace createManyAndReturn
   */
  export type SubRaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubRace
     */
    select?: SubRaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubRace
     */
    omit?: SubRaceOmit<ExtArgs> | null
    /**
     * The data used to create many SubRaces.
     */
    data: SubRaceCreateManyInput | SubRaceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubRaceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubRace update
   */
  export type SubRaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubRace
     */
    select?: SubRaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubRace
     */
    omit?: SubRaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubRaceInclude<ExtArgs> | null
    /**
     * The data needed to update a SubRace.
     */
    data: XOR<SubRaceUpdateInput, SubRaceUncheckedUpdateInput>
    /**
     * Choose, which SubRace to update.
     */
    where: SubRaceWhereUniqueInput
  }

  /**
   * SubRace updateMany
   */
  export type SubRaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubRaces.
     */
    data: XOR<SubRaceUpdateManyMutationInput, SubRaceUncheckedUpdateManyInput>
    /**
     * Filter which SubRaces to update
     */
    where?: SubRaceWhereInput
    /**
     * Limit how many SubRaces to update.
     */
    limit?: number
  }

  /**
   * SubRace updateManyAndReturn
   */
  export type SubRaceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubRace
     */
    select?: SubRaceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubRace
     */
    omit?: SubRaceOmit<ExtArgs> | null
    /**
     * The data used to update SubRaces.
     */
    data: XOR<SubRaceUpdateManyMutationInput, SubRaceUncheckedUpdateManyInput>
    /**
     * Filter which SubRaces to update
     */
    where?: SubRaceWhereInput
    /**
     * Limit how many SubRaces to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubRaceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubRace upsert
   */
  export type SubRaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubRace
     */
    select?: SubRaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubRace
     */
    omit?: SubRaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubRaceInclude<ExtArgs> | null
    /**
     * The filter to search for the SubRace to update in case it exists.
     */
    where: SubRaceWhereUniqueInput
    /**
     * In case the SubRace found by the `where` argument doesn't exist, create a new SubRace with this data.
     */
    create: XOR<SubRaceCreateInput, SubRaceUncheckedCreateInput>
    /**
     * In case the SubRace was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubRaceUpdateInput, SubRaceUncheckedUpdateInput>
  }

  /**
   * SubRace delete
   */
  export type SubRaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubRace
     */
    select?: SubRaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubRace
     */
    omit?: SubRaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubRaceInclude<ExtArgs> | null
    /**
     * Filter which SubRace to delete.
     */
    where: SubRaceWhereUniqueInput
  }

  /**
   * SubRace deleteMany
   */
  export type SubRaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubRaces to delete
     */
    where?: SubRaceWhereInput
    /**
     * Limit how many SubRaces to delete.
     */
    limit?: number
  }

  /**
   * SubRace.race
   */
  export type SubRace$raceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    where?: RaceWhereInput
  }

  /**
   * SubRace without action
   */
  export type SubRaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubRace
     */
    select?: SubRaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubRace
     */
    omit?: SubRaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubRaceInclude<ExtArgs> | null
  }


  /**
   * Model Spell
   */

  export type AggregateSpell = {
    _count: SpellCountAggregateOutputType | null
    _avg: SpellAvgAggregateOutputType | null
    _sum: SpellSumAggregateOutputType | null
    _min: SpellMinAggregateOutputType | null
    _max: SpellMaxAggregateOutputType | null
  }

  export type SpellAvgAggregateOutputType = {
    id: number | null
    level: number | null
  }

  export type SpellSumAggregateOutputType = {
    id: number | null
    level: number | null
  }

  export type SpellMinAggregateOutputType = {
    id: number | null
    nameUa: string | null
    nameEn: string | null
    school: string | null
    level: number | null
    castingTime: string | null
    range: string | null
    components: string | null
    duration: string | null
    description: string | null
  }

  export type SpellMaxAggregateOutputType = {
    id: number | null
    nameUa: string | null
    nameEn: string | null
    school: string | null
    level: number | null
    castingTime: string | null
    range: string | null
    components: string | null
    duration: string | null
    description: string | null
  }

  export type SpellCountAggregateOutputType = {
    id: number
    nameUa: number
    nameEn: number
    school: number
    level: number
    castingTime: number
    range: number
    components: number
    duration: number
    description: number
    damage: number
    _all: number
  }


  export type SpellAvgAggregateInputType = {
    id?: true
    level?: true
  }

  export type SpellSumAggregateInputType = {
    id?: true
    level?: true
  }

  export type SpellMinAggregateInputType = {
    id?: true
    nameUa?: true
    nameEn?: true
    school?: true
    level?: true
    castingTime?: true
    range?: true
    components?: true
    duration?: true
    description?: true
  }

  export type SpellMaxAggregateInputType = {
    id?: true
    nameUa?: true
    nameEn?: true
    school?: true
    level?: true
    castingTime?: true
    range?: true
    components?: true
    duration?: true
    description?: true
  }

  export type SpellCountAggregateInputType = {
    id?: true
    nameUa?: true
    nameEn?: true
    school?: true
    level?: true
    castingTime?: true
    range?: true
    components?: true
    duration?: true
    description?: true
    damage?: true
    _all?: true
  }

  export type SpellAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Spell to aggregate.
     */
    where?: SpellWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spells to fetch.
     */
    orderBy?: SpellOrderByWithRelationInput | SpellOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpellWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spells from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spells.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Spells
    **/
    _count?: true | SpellCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpellAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpellSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpellMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpellMaxAggregateInputType
  }

  export type GetSpellAggregateType<T extends SpellAggregateArgs> = {
        [P in keyof T & keyof AggregateSpell]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpell[P]>
      : GetScalarType<T[P], AggregateSpell[P]>
  }




  export type SpellGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpellWhereInput
    orderBy?: SpellOrderByWithAggregationInput | SpellOrderByWithAggregationInput[]
    by: SpellScalarFieldEnum[] | SpellScalarFieldEnum
    having?: SpellScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpellCountAggregateInputType | true
    _avg?: SpellAvgAggregateInputType
    _sum?: SpellSumAggregateInputType
    _min?: SpellMinAggregateInputType
    _max?: SpellMaxAggregateInputType
  }

  export type SpellGroupByOutputType = {
    id: number
    nameUa: string
    nameEn: string
    school: string
    level: number
    castingTime: string
    range: string
    components: string
    duration: string
    description: string
    damage: JsonValue | null
    _count: SpellCountAggregateOutputType | null
    _avg: SpellAvgAggregateOutputType | null
    _sum: SpellSumAggregateOutputType | null
    _min: SpellMinAggregateOutputType | null
    _max: SpellMaxAggregateOutputType | null
  }

  type GetSpellGroupByPayload<T extends SpellGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpellGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpellGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpellGroupByOutputType[P]>
            : GetScalarType<T[P], SpellGroupByOutputType[P]>
        }
      >
    >


  export type SpellSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameUa?: boolean
    nameEn?: boolean
    school?: boolean
    level?: boolean
    castingTime?: boolean
    range?: boolean
    components?: boolean
    duration?: boolean
    description?: boolean
    damage?: boolean
    classes?: boolean | Spell$classesArgs<ExtArgs>
    _count?: boolean | SpellCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spell"]>

  export type SpellSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameUa?: boolean
    nameEn?: boolean
    school?: boolean
    level?: boolean
    castingTime?: boolean
    range?: boolean
    components?: boolean
    duration?: boolean
    description?: boolean
    damage?: boolean
  }, ExtArgs["result"]["spell"]>

  export type SpellSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameUa?: boolean
    nameEn?: boolean
    school?: boolean
    level?: boolean
    castingTime?: boolean
    range?: boolean
    components?: boolean
    duration?: boolean
    description?: boolean
    damage?: boolean
  }, ExtArgs["result"]["spell"]>

  export type SpellSelectScalar = {
    id?: boolean
    nameUa?: boolean
    nameEn?: boolean
    school?: boolean
    level?: boolean
    castingTime?: boolean
    range?: boolean
    components?: boolean
    duration?: boolean
    description?: boolean
    damage?: boolean
  }

  export type SpellOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nameUa" | "nameEn" | "school" | "level" | "castingTime" | "range" | "components" | "duration" | "description" | "damage", ExtArgs["result"]["spell"]>
  export type SpellInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | Spell$classesArgs<ExtArgs>
    _count?: boolean | SpellCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SpellIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SpellIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SpellPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Spell"
    objects: {
      classes: Prisma.$ClassPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nameUa: string
      nameEn: string
      school: string
      level: number
      castingTime: string
      range: string
      components: string
      duration: string
      description: string
      damage: Prisma.JsonValue | null
    }, ExtArgs["result"]["spell"]>
    composites: {}
  }

  type SpellGetPayload<S extends boolean | null | undefined | SpellDefaultArgs> = $Result.GetResult<Prisma.$SpellPayload, S>

  type SpellCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpellFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpellCountAggregateInputType | true
    }

  export interface SpellDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Spell'], meta: { name: 'Spell' } }
    /**
     * Find zero or one Spell that matches the filter.
     * @param {SpellFindUniqueArgs} args - Arguments to find a Spell
     * @example
     * // Get one Spell
     * const spell = await prisma.spell.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpellFindUniqueArgs>(args: SelectSubset<T, SpellFindUniqueArgs<ExtArgs>>): Prisma__SpellClient<$Result.GetResult<Prisma.$SpellPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Spell that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpellFindUniqueOrThrowArgs} args - Arguments to find a Spell
     * @example
     * // Get one Spell
     * const spell = await prisma.spell.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpellFindUniqueOrThrowArgs>(args: SelectSubset<T, SpellFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpellClient<$Result.GetResult<Prisma.$SpellPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Spell that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpellFindFirstArgs} args - Arguments to find a Spell
     * @example
     * // Get one Spell
     * const spell = await prisma.spell.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpellFindFirstArgs>(args?: SelectSubset<T, SpellFindFirstArgs<ExtArgs>>): Prisma__SpellClient<$Result.GetResult<Prisma.$SpellPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Spell that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpellFindFirstOrThrowArgs} args - Arguments to find a Spell
     * @example
     * // Get one Spell
     * const spell = await prisma.spell.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpellFindFirstOrThrowArgs>(args?: SelectSubset<T, SpellFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpellClient<$Result.GetResult<Prisma.$SpellPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Spells that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpellFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Spells
     * const spells = await prisma.spell.findMany()
     * 
     * // Get first 10 Spells
     * const spells = await prisma.spell.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const spellWithIdOnly = await prisma.spell.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpellFindManyArgs>(args?: SelectSubset<T, SpellFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpellPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Spell.
     * @param {SpellCreateArgs} args - Arguments to create a Spell.
     * @example
     * // Create one Spell
     * const Spell = await prisma.spell.create({
     *   data: {
     *     // ... data to create a Spell
     *   }
     * })
     * 
     */
    create<T extends SpellCreateArgs>(args: SelectSubset<T, SpellCreateArgs<ExtArgs>>): Prisma__SpellClient<$Result.GetResult<Prisma.$SpellPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Spells.
     * @param {SpellCreateManyArgs} args - Arguments to create many Spells.
     * @example
     * // Create many Spells
     * const spell = await prisma.spell.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpellCreateManyArgs>(args?: SelectSubset<T, SpellCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Spells and returns the data saved in the database.
     * @param {SpellCreateManyAndReturnArgs} args - Arguments to create many Spells.
     * @example
     * // Create many Spells
     * const spell = await prisma.spell.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Spells and only return the `id`
     * const spellWithIdOnly = await prisma.spell.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpellCreateManyAndReturnArgs>(args?: SelectSubset<T, SpellCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpellPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Spell.
     * @param {SpellDeleteArgs} args - Arguments to delete one Spell.
     * @example
     * // Delete one Spell
     * const Spell = await prisma.spell.delete({
     *   where: {
     *     // ... filter to delete one Spell
     *   }
     * })
     * 
     */
    delete<T extends SpellDeleteArgs>(args: SelectSubset<T, SpellDeleteArgs<ExtArgs>>): Prisma__SpellClient<$Result.GetResult<Prisma.$SpellPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Spell.
     * @param {SpellUpdateArgs} args - Arguments to update one Spell.
     * @example
     * // Update one Spell
     * const spell = await prisma.spell.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpellUpdateArgs>(args: SelectSubset<T, SpellUpdateArgs<ExtArgs>>): Prisma__SpellClient<$Result.GetResult<Prisma.$SpellPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Spells.
     * @param {SpellDeleteManyArgs} args - Arguments to filter Spells to delete.
     * @example
     * // Delete a few Spells
     * const { count } = await prisma.spell.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpellDeleteManyArgs>(args?: SelectSubset<T, SpellDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spells.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpellUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Spells
     * const spell = await prisma.spell.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpellUpdateManyArgs>(args: SelectSubset<T, SpellUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spells and returns the data updated in the database.
     * @param {SpellUpdateManyAndReturnArgs} args - Arguments to update many Spells.
     * @example
     * // Update many Spells
     * const spell = await prisma.spell.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Spells and only return the `id`
     * const spellWithIdOnly = await prisma.spell.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SpellUpdateManyAndReturnArgs>(args: SelectSubset<T, SpellUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpellPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Spell.
     * @param {SpellUpsertArgs} args - Arguments to update or create a Spell.
     * @example
     * // Update or create a Spell
     * const spell = await prisma.spell.upsert({
     *   create: {
     *     // ... data to create a Spell
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Spell we want to update
     *   }
     * })
     */
    upsert<T extends SpellUpsertArgs>(args: SelectSubset<T, SpellUpsertArgs<ExtArgs>>): Prisma__SpellClient<$Result.GetResult<Prisma.$SpellPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Spells.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpellCountArgs} args - Arguments to filter Spells to count.
     * @example
     * // Count the number of Spells
     * const count = await prisma.spell.count({
     *   where: {
     *     // ... the filter for the Spells we want to count
     *   }
     * })
    **/
    count<T extends SpellCountArgs>(
      args?: Subset<T, SpellCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpellCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Spell.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpellAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpellAggregateArgs>(args: Subset<T, SpellAggregateArgs>): Prisma.PrismaPromise<GetSpellAggregateType<T>>

    /**
     * Group by Spell.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpellGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SpellGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpellGroupByArgs['orderBy'] }
        : { orderBy?: SpellGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SpellGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpellGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Spell model
   */
  readonly fields: SpellFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Spell.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpellClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    classes<T extends Spell$classesArgs<ExtArgs> = {}>(args?: Subset<T, Spell$classesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Spell model
   */
  interface SpellFieldRefs {
    readonly id: FieldRef<"Spell", 'Int'>
    readonly nameUa: FieldRef<"Spell", 'String'>
    readonly nameEn: FieldRef<"Spell", 'String'>
    readonly school: FieldRef<"Spell", 'String'>
    readonly level: FieldRef<"Spell", 'Int'>
    readonly castingTime: FieldRef<"Spell", 'String'>
    readonly range: FieldRef<"Spell", 'String'>
    readonly components: FieldRef<"Spell", 'String'>
    readonly duration: FieldRef<"Spell", 'String'>
    readonly description: FieldRef<"Spell", 'String'>
    readonly damage: FieldRef<"Spell", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Spell findUnique
   */
  export type SpellFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spell
     */
    select?: SpellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spell
     */
    omit?: SpellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpellInclude<ExtArgs> | null
    /**
     * Filter, which Spell to fetch.
     */
    where: SpellWhereUniqueInput
  }

  /**
   * Spell findUniqueOrThrow
   */
  export type SpellFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spell
     */
    select?: SpellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spell
     */
    omit?: SpellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpellInclude<ExtArgs> | null
    /**
     * Filter, which Spell to fetch.
     */
    where: SpellWhereUniqueInput
  }

  /**
   * Spell findFirst
   */
  export type SpellFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spell
     */
    select?: SpellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spell
     */
    omit?: SpellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpellInclude<ExtArgs> | null
    /**
     * Filter, which Spell to fetch.
     */
    where?: SpellWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spells to fetch.
     */
    orderBy?: SpellOrderByWithRelationInput | SpellOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Spells.
     */
    cursor?: SpellWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spells from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spells.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Spells.
     */
    distinct?: SpellScalarFieldEnum | SpellScalarFieldEnum[]
  }

  /**
   * Spell findFirstOrThrow
   */
  export type SpellFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spell
     */
    select?: SpellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spell
     */
    omit?: SpellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpellInclude<ExtArgs> | null
    /**
     * Filter, which Spell to fetch.
     */
    where?: SpellWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spells to fetch.
     */
    orderBy?: SpellOrderByWithRelationInput | SpellOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Spells.
     */
    cursor?: SpellWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spells from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spells.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Spells.
     */
    distinct?: SpellScalarFieldEnum | SpellScalarFieldEnum[]
  }

  /**
   * Spell findMany
   */
  export type SpellFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spell
     */
    select?: SpellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spell
     */
    omit?: SpellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpellInclude<ExtArgs> | null
    /**
     * Filter, which Spells to fetch.
     */
    where?: SpellWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spells to fetch.
     */
    orderBy?: SpellOrderByWithRelationInput | SpellOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Spells.
     */
    cursor?: SpellWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spells from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spells.
     */
    skip?: number
    distinct?: SpellScalarFieldEnum | SpellScalarFieldEnum[]
  }

  /**
   * Spell create
   */
  export type SpellCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spell
     */
    select?: SpellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spell
     */
    omit?: SpellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpellInclude<ExtArgs> | null
    /**
     * The data needed to create a Spell.
     */
    data: XOR<SpellCreateInput, SpellUncheckedCreateInput>
  }

  /**
   * Spell createMany
   */
  export type SpellCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Spells.
     */
    data: SpellCreateManyInput | SpellCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Spell createManyAndReturn
   */
  export type SpellCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spell
     */
    select?: SpellSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Spell
     */
    omit?: SpellOmit<ExtArgs> | null
    /**
     * The data used to create many Spells.
     */
    data: SpellCreateManyInput | SpellCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Spell update
   */
  export type SpellUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spell
     */
    select?: SpellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spell
     */
    omit?: SpellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpellInclude<ExtArgs> | null
    /**
     * The data needed to update a Spell.
     */
    data: XOR<SpellUpdateInput, SpellUncheckedUpdateInput>
    /**
     * Choose, which Spell to update.
     */
    where: SpellWhereUniqueInput
  }

  /**
   * Spell updateMany
   */
  export type SpellUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Spells.
     */
    data: XOR<SpellUpdateManyMutationInput, SpellUncheckedUpdateManyInput>
    /**
     * Filter which Spells to update
     */
    where?: SpellWhereInput
    /**
     * Limit how many Spells to update.
     */
    limit?: number
  }

  /**
   * Spell updateManyAndReturn
   */
  export type SpellUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spell
     */
    select?: SpellSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Spell
     */
    omit?: SpellOmit<ExtArgs> | null
    /**
     * The data used to update Spells.
     */
    data: XOR<SpellUpdateManyMutationInput, SpellUncheckedUpdateManyInput>
    /**
     * Filter which Spells to update
     */
    where?: SpellWhereInput
    /**
     * Limit how many Spells to update.
     */
    limit?: number
  }

  /**
   * Spell upsert
   */
  export type SpellUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spell
     */
    select?: SpellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spell
     */
    omit?: SpellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpellInclude<ExtArgs> | null
    /**
     * The filter to search for the Spell to update in case it exists.
     */
    where: SpellWhereUniqueInput
    /**
     * In case the Spell found by the `where` argument doesn't exist, create a new Spell with this data.
     */
    create: XOR<SpellCreateInput, SpellUncheckedCreateInput>
    /**
     * In case the Spell was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpellUpdateInput, SpellUncheckedUpdateInput>
  }

  /**
   * Spell delete
   */
  export type SpellDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spell
     */
    select?: SpellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spell
     */
    omit?: SpellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpellInclude<ExtArgs> | null
    /**
     * Filter which Spell to delete.
     */
    where: SpellWhereUniqueInput
  }

  /**
   * Spell deleteMany
   */
  export type SpellDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Spells to delete
     */
    where?: SpellWhereInput
    /**
     * Limit how many Spells to delete.
     */
    limit?: number
  }

  /**
   * Spell.classes
   */
  export type Spell$classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    cursor?: ClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Spell without action
   */
  export type SpellDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spell
     */
    select?: SpellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spell
     */
    omit?: SpellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpellInclude<ExtArgs> | null
  }


  /**
   * Model Subclass
   */

  export type AggregateSubclass = {
    _count: SubclassCountAggregateOutputType | null
    _min: SubclassMinAggregateOutputType | null
    _max: SubclassMaxAggregateOutputType | null
  }

  export type SubclassMinAggregateOutputType = {
    id: string | null
    nameEn: string | null
    nameUk: string | null
    description: string | null
  }

  export type SubclassMaxAggregateOutputType = {
    id: string | null
    nameEn: string | null
    nameUk: string | null
    description: string | null
  }

  export type SubclassCountAggregateOutputType = {
    id: number
    nameEn: number
    nameUk: number
    description: number
    features: number
    _all: number
  }


  export type SubclassMinAggregateInputType = {
    id?: true
    nameEn?: true
    nameUk?: true
    description?: true
  }

  export type SubclassMaxAggregateInputType = {
    id?: true
    nameEn?: true
    nameUk?: true
    description?: true
  }

  export type SubclassCountAggregateInputType = {
    id?: true
    nameEn?: true
    nameUk?: true
    description?: true
    features?: true
    _all?: true
  }

  export type SubclassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subclass to aggregate.
     */
    where?: SubclassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subclasses to fetch.
     */
    orderBy?: SubclassOrderByWithRelationInput | SubclassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubclassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subclasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subclasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subclasses
    **/
    _count?: true | SubclassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubclassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubclassMaxAggregateInputType
  }

  export type GetSubclassAggregateType<T extends SubclassAggregateArgs> = {
        [P in keyof T & keyof AggregateSubclass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubclass[P]>
      : GetScalarType<T[P], AggregateSubclass[P]>
  }




  export type SubclassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubclassWhereInput
    orderBy?: SubclassOrderByWithAggregationInput | SubclassOrderByWithAggregationInput[]
    by: SubclassScalarFieldEnum[] | SubclassScalarFieldEnum
    having?: SubclassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubclassCountAggregateInputType | true
    _min?: SubclassMinAggregateInputType
    _max?: SubclassMaxAggregateInputType
  }

  export type SubclassGroupByOutputType = {
    id: string
    nameEn: string
    nameUk: string
    description: string
    features: JsonValue
    _count: SubclassCountAggregateOutputType | null
    _min: SubclassMinAggregateOutputType | null
    _max: SubclassMaxAggregateOutputType | null
  }

  type GetSubclassGroupByPayload<T extends SubclassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubclassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubclassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubclassGroupByOutputType[P]>
            : GetScalarType<T[P], SubclassGroupByOutputType[P]>
        }
      >
    >


  export type SubclassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameEn?: boolean
    nameUk?: boolean
    description?: boolean
    features?: boolean
  }, ExtArgs["result"]["subclass"]>

  export type SubclassSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameEn?: boolean
    nameUk?: boolean
    description?: boolean
    features?: boolean
  }, ExtArgs["result"]["subclass"]>

  export type SubclassSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameEn?: boolean
    nameUk?: boolean
    description?: boolean
    features?: boolean
  }, ExtArgs["result"]["subclass"]>

  export type SubclassSelectScalar = {
    id?: boolean
    nameEn?: boolean
    nameUk?: boolean
    description?: boolean
    features?: boolean
  }

  export type SubclassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nameEn" | "nameUk" | "description" | "features", ExtArgs["result"]["subclass"]>

  export type $SubclassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subclass"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nameEn: string
      nameUk: string
      description: string
      features: Prisma.JsonValue
    }, ExtArgs["result"]["subclass"]>
    composites: {}
  }

  type SubclassGetPayload<S extends boolean | null | undefined | SubclassDefaultArgs> = $Result.GetResult<Prisma.$SubclassPayload, S>

  type SubclassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubclassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubclassCountAggregateInputType | true
    }

  export interface SubclassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subclass'], meta: { name: 'Subclass' } }
    /**
     * Find zero or one Subclass that matches the filter.
     * @param {SubclassFindUniqueArgs} args - Arguments to find a Subclass
     * @example
     * // Get one Subclass
     * const subclass = await prisma.subclass.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubclassFindUniqueArgs>(args: SelectSubset<T, SubclassFindUniqueArgs<ExtArgs>>): Prisma__SubclassClient<$Result.GetResult<Prisma.$SubclassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subclass that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubclassFindUniqueOrThrowArgs} args - Arguments to find a Subclass
     * @example
     * // Get one Subclass
     * const subclass = await prisma.subclass.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubclassFindUniqueOrThrowArgs>(args: SelectSubset<T, SubclassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubclassClient<$Result.GetResult<Prisma.$SubclassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subclass that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubclassFindFirstArgs} args - Arguments to find a Subclass
     * @example
     * // Get one Subclass
     * const subclass = await prisma.subclass.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubclassFindFirstArgs>(args?: SelectSubset<T, SubclassFindFirstArgs<ExtArgs>>): Prisma__SubclassClient<$Result.GetResult<Prisma.$SubclassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subclass that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubclassFindFirstOrThrowArgs} args - Arguments to find a Subclass
     * @example
     * // Get one Subclass
     * const subclass = await prisma.subclass.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubclassFindFirstOrThrowArgs>(args?: SelectSubset<T, SubclassFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubclassClient<$Result.GetResult<Prisma.$SubclassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subclasses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubclassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subclasses
     * const subclasses = await prisma.subclass.findMany()
     * 
     * // Get first 10 Subclasses
     * const subclasses = await prisma.subclass.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subclassWithIdOnly = await prisma.subclass.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubclassFindManyArgs>(args?: SelectSubset<T, SubclassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubclassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subclass.
     * @param {SubclassCreateArgs} args - Arguments to create a Subclass.
     * @example
     * // Create one Subclass
     * const Subclass = await prisma.subclass.create({
     *   data: {
     *     // ... data to create a Subclass
     *   }
     * })
     * 
     */
    create<T extends SubclassCreateArgs>(args: SelectSubset<T, SubclassCreateArgs<ExtArgs>>): Prisma__SubclassClient<$Result.GetResult<Prisma.$SubclassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subclasses.
     * @param {SubclassCreateManyArgs} args - Arguments to create many Subclasses.
     * @example
     * // Create many Subclasses
     * const subclass = await prisma.subclass.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubclassCreateManyArgs>(args?: SelectSubset<T, SubclassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subclasses and returns the data saved in the database.
     * @param {SubclassCreateManyAndReturnArgs} args - Arguments to create many Subclasses.
     * @example
     * // Create many Subclasses
     * const subclass = await prisma.subclass.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subclasses and only return the `id`
     * const subclassWithIdOnly = await prisma.subclass.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubclassCreateManyAndReturnArgs>(args?: SelectSubset<T, SubclassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubclassPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subclass.
     * @param {SubclassDeleteArgs} args - Arguments to delete one Subclass.
     * @example
     * // Delete one Subclass
     * const Subclass = await prisma.subclass.delete({
     *   where: {
     *     // ... filter to delete one Subclass
     *   }
     * })
     * 
     */
    delete<T extends SubclassDeleteArgs>(args: SelectSubset<T, SubclassDeleteArgs<ExtArgs>>): Prisma__SubclassClient<$Result.GetResult<Prisma.$SubclassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subclass.
     * @param {SubclassUpdateArgs} args - Arguments to update one Subclass.
     * @example
     * // Update one Subclass
     * const subclass = await prisma.subclass.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubclassUpdateArgs>(args: SelectSubset<T, SubclassUpdateArgs<ExtArgs>>): Prisma__SubclassClient<$Result.GetResult<Prisma.$SubclassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subclasses.
     * @param {SubclassDeleteManyArgs} args - Arguments to filter Subclasses to delete.
     * @example
     * // Delete a few Subclasses
     * const { count } = await prisma.subclass.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubclassDeleteManyArgs>(args?: SelectSubset<T, SubclassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subclasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubclassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subclasses
     * const subclass = await prisma.subclass.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubclassUpdateManyArgs>(args: SelectSubset<T, SubclassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subclasses and returns the data updated in the database.
     * @param {SubclassUpdateManyAndReturnArgs} args - Arguments to update many Subclasses.
     * @example
     * // Update many Subclasses
     * const subclass = await prisma.subclass.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subclasses and only return the `id`
     * const subclassWithIdOnly = await prisma.subclass.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubclassUpdateManyAndReturnArgs>(args: SelectSubset<T, SubclassUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubclassPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subclass.
     * @param {SubclassUpsertArgs} args - Arguments to update or create a Subclass.
     * @example
     * // Update or create a Subclass
     * const subclass = await prisma.subclass.upsert({
     *   create: {
     *     // ... data to create a Subclass
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subclass we want to update
     *   }
     * })
     */
    upsert<T extends SubclassUpsertArgs>(args: SelectSubset<T, SubclassUpsertArgs<ExtArgs>>): Prisma__SubclassClient<$Result.GetResult<Prisma.$SubclassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subclasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubclassCountArgs} args - Arguments to filter Subclasses to count.
     * @example
     * // Count the number of Subclasses
     * const count = await prisma.subclass.count({
     *   where: {
     *     // ... the filter for the Subclasses we want to count
     *   }
     * })
    **/
    count<T extends SubclassCountArgs>(
      args?: Subset<T, SubclassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubclassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subclass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubclassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubclassAggregateArgs>(args: Subset<T, SubclassAggregateArgs>): Prisma.PrismaPromise<GetSubclassAggregateType<T>>

    /**
     * Group by Subclass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubclassGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubclassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubclassGroupByArgs['orderBy'] }
        : { orderBy?: SubclassGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubclassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubclassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subclass model
   */
  readonly fields: SubclassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subclass.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubclassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subclass model
   */
  interface SubclassFieldRefs {
    readonly id: FieldRef<"Subclass", 'String'>
    readonly nameEn: FieldRef<"Subclass", 'String'>
    readonly nameUk: FieldRef<"Subclass", 'String'>
    readonly description: FieldRef<"Subclass", 'String'>
    readonly features: FieldRef<"Subclass", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Subclass findUnique
   */
  export type SubclassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subclass
     */
    select?: SubclassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subclass
     */
    omit?: SubclassOmit<ExtArgs> | null
    /**
     * Filter, which Subclass to fetch.
     */
    where: SubclassWhereUniqueInput
  }

  /**
   * Subclass findUniqueOrThrow
   */
  export type SubclassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subclass
     */
    select?: SubclassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subclass
     */
    omit?: SubclassOmit<ExtArgs> | null
    /**
     * Filter, which Subclass to fetch.
     */
    where: SubclassWhereUniqueInput
  }

  /**
   * Subclass findFirst
   */
  export type SubclassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subclass
     */
    select?: SubclassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subclass
     */
    omit?: SubclassOmit<ExtArgs> | null
    /**
     * Filter, which Subclass to fetch.
     */
    where?: SubclassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subclasses to fetch.
     */
    orderBy?: SubclassOrderByWithRelationInput | SubclassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subclasses.
     */
    cursor?: SubclassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subclasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subclasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subclasses.
     */
    distinct?: SubclassScalarFieldEnum | SubclassScalarFieldEnum[]
  }

  /**
   * Subclass findFirstOrThrow
   */
  export type SubclassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subclass
     */
    select?: SubclassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subclass
     */
    omit?: SubclassOmit<ExtArgs> | null
    /**
     * Filter, which Subclass to fetch.
     */
    where?: SubclassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subclasses to fetch.
     */
    orderBy?: SubclassOrderByWithRelationInput | SubclassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subclasses.
     */
    cursor?: SubclassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subclasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subclasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subclasses.
     */
    distinct?: SubclassScalarFieldEnum | SubclassScalarFieldEnum[]
  }

  /**
   * Subclass findMany
   */
  export type SubclassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subclass
     */
    select?: SubclassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subclass
     */
    omit?: SubclassOmit<ExtArgs> | null
    /**
     * Filter, which Subclasses to fetch.
     */
    where?: SubclassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subclasses to fetch.
     */
    orderBy?: SubclassOrderByWithRelationInput | SubclassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subclasses.
     */
    cursor?: SubclassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subclasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subclasses.
     */
    skip?: number
    distinct?: SubclassScalarFieldEnum | SubclassScalarFieldEnum[]
  }

  /**
   * Subclass create
   */
  export type SubclassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subclass
     */
    select?: SubclassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subclass
     */
    omit?: SubclassOmit<ExtArgs> | null
    /**
     * The data needed to create a Subclass.
     */
    data: XOR<SubclassCreateInput, SubclassUncheckedCreateInput>
  }

  /**
   * Subclass createMany
   */
  export type SubclassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subclasses.
     */
    data: SubclassCreateManyInput | SubclassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subclass createManyAndReturn
   */
  export type SubclassCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subclass
     */
    select?: SubclassSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subclass
     */
    omit?: SubclassOmit<ExtArgs> | null
    /**
     * The data used to create many Subclasses.
     */
    data: SubclassCreateManyInput | SubclassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subclass update
   */
  export type SubclassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subclass
     */
    select?: SubclassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subclass
     */
    omit?: SubclassOmit<ExtArgs> | null
    /**
     * The data needed to update a Subclass.
     */
    data: XOR<SubclassUpdateInput, SubclassUncheckedUpdateInput>
    /**
     * Choose, which Subclass to update.
     */
    where: SubclassWhereUniqueInput
  }

  /**
   * Subclass updateMany
   */
  export type SubclassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subclasses.
     */
    data: XOR<SubclassUpdateManyMutationInput, SubclassUncheckedUpdateManyInput>
    /**
     * Filter which Subclasses to update
     */
    where?: SubclassWhereInput
    /**
     * Limit how many Subclasses to update.
     */
    limit?: number
  }

  /**
   * Subclass updateManyAndReturn
   */
  export type SubclassUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subclass
     */
    select?: SubclassSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subclass
     */
    omit?: SubclassOmit<ExtArgs> | null
    /**
     * The data used to update Subclasses.
     */
    data: XOR<SubclassUpdateManyMutationInput, SubclassUncheckedUpdateManyInput>
    /**
     * Filter which Subclasses to update
     */
    where?: SubclassWhereInput
    /**
     * Limit how many Subclasses to update.
     */
    limit?: number
  }

  /**
   * Subclass upsert
   */
  export type SubclassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subclass
     */
    select?: SubclassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subclass
     */
    omit?: SubclassOmit<ExtArgs> | null
    /**
     * The filter to search for the Subclass to update in case it exists.
     */
    where: SubclassWhereUniqueInput
    /**
     * In case the Subclass found by the `where` argument doesn't exist, create a new Subclass with this data.
     */
    create: XOR<SubclassCreateInput, SubclassUncheckedCreateInput>
    /**
     * In case the Subclass was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubclassUpdateInput, SubclassUncheckedUpdateInput>
  }

  /**
   * Subclass delete
   */
  export type SubclassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subclass
     */
    select?: SubclassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subclass
     */
    omit?: SubclassOmit<ExtArgs> | null
    /**
     * Filter which Subclass to delete.
     */
    where: SubclassWhereUniqueInput
  }

  /**
   * Subclass deleteMany
   */
  export type SubclassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subclasses to delete
     */
    where?: SubclassWhereInput
    /**
     * Limit how many Subclasses to delete.
     */
    limit?: number
  }

  /**
   * Subclass without action
   */
  export type SubclassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subclass
     */
    select?: SubclassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subclass
     */
    omit?: SubclassOmit<ExtArgs> | null
  }


  /**
   * Model MagicItem
   */

  export type AggregateMagicItem = {
    _count: MagicItemCountAggregateOutputType | null
    _avg: MagicItemAvgAggregateOutputType | null
    _sum: MagicItemSumAggregateOutputType | null
    _min: MagicItemMinAggregateOutputType | null
    _max: MagicItemMaxAggregateOutputType | null
  }

  export type MagicItemAvgAggregateOutputType = {
    id: number | null
  }

  export type MagicItemSumAggregateOutputType = {
    id: number | null
  }

  export type MagicItemMinAggregateOutputType = {
    id: number | null
    name: string | null
    rarity: string | null
    type: string | null
    attunement: boolean | null
    description: string | null
  }

  export type MagicItemMaxAggregateOutputType = {
    id: number | null
    name: string | null
    rarity: string | null
    type: string | null
    attunement: boolean | null
    description: string | null
  }

  export type MagicItemCountAggregateOutputType = {
    id: number
    name: number
    rarity: number
    type: number
    attunement: number
    description: number
    effects: number
    _all: number
  }


  export type MagicItemAvgAggregateInputType = {
    id?: true
  }

  export type MagicItemSumAggregateInputType = {
    id?: true
  }

  export type MagicItemMinAggregateInputType = {
    id?: true
    name?: true
    rarity?: true
    type?: true
    attunement?: true
    description?: true
  }

  export type MagicItemMaxAggregateInputType = {
    id?: true
    name?: true
    rarity?: true
    type?: true
    attunement?: true
    description?: true
  }

  export type MagicItemCountAggregateInputType = {
    id?: true
    name?: true
    rarity?: true
    type?: true
    attunement?: true
    description?: true
    effects?: true
    _all?: true
  }

  export type MagicItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MagicItem to aggregate.
     */
    where?: MagicItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MagicItems to fetch.
     */
    orderBy?: MagicItemOrderByWithRelationInput | MagicItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MagicItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MagicItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MagicItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MagicItems
    **/
    _count?: true | MagicItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MagicItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MagicItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MagicItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MagicItemMaxAggregateInputType
  }

  export type GetMagicItemAggregateType<T extends MagicItemAggregateArgs> = {
        [P in keyof T & keyof AggregateMagicItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMagicItem[P]>
      : GetScalarType<T[P], AggregateMagicItem[P]>
  }




  export type MagicItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MagicItemWhereInput
    orderBy?: MagicItemOrderByWithAggregationInput | MagicItemOrderByWithAggregationInput[]
    by: MagicItemScalarFieldEnum[] | MagicItemScalarFieldEnum
    having?: MagicItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MagicItemCountAggregateInputType | true
    _avg?: MagicItemAvgAggregateInputType
    _sum?: MagicItemSumAggregateInputType
    _min?: MagicItemMinAggregateInputType
    _max?: MagicItemMaxAggregateInputType
  }

  export type MagicItemGroupByOutputType = {
    id: number
    name: string
    rarity: string
    type: string
    attunement: boolean
    description: string
    effects: JsonValue
    _count: MagicItemCountAggregateOutputType | null
    _avg: MagicItemAvgAggregateOutputType | null
    _sum: MagicItemSumAggregateOutputType | null
    _min: MagicItemMinAggregateOutputType | null
    _max: MagicItemMaxAggregateOutputType | null
  }

  type GetMagicItemGroupByPayload<T extends MagicItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MagicItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MagicItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MagicItemGroupByOutputType[P]>
            : GetScalarType<T[P], MagicItemGroupByOutputType[P]>
        }
      >
    >


  export type MagicItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rarity?: boolean
    type?: boolean
    attunement?: boolean
    description?: boolean
    effects?: boolean
  }, ExtArgs["result"]["magicItem"]>

  export type MagicItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rarity?: boolean
    type?: boolean
    attunement?: boolean
    description?: boolean
    effects?: boolean
  }, ExtArgs["result"]["magicItem"]>

  export type MagicItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rarity?: boolean
    type?: boolean
    attunement?: boolean
    description?: boolean
    effects?: boolean
  }, ExtArgs["result"]["magicItem"]>

  export type MagicItemSelectScalar = {
    id?: boolean
    name?: boolean
    rarity?: boolean
    type?: boolean
    attunement?: boolean
    description?: boolean
    effects?: boolean
  }

  export type MagicItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "rarity" | "type" | "attunement" | "description" | "effects", ExtArgs["result"]["magicItem"]>

  export type $MagicItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MagicItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      rarity: string
      type: string
      attunement: boolean
      description: string
      effects: Prisma.JsonValue
    }, ExtArgs["result"]["magicItem"]>
    composites: {}
  }

  type MagicItemGetPayload<S extends boolean | null | undefined | MagicItemDefaultArgs> = $Result.GetResult<Prisma.$MagicItemPayload, S>

  type MagicItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MagicItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MagicItemCountAggregateInputType | true
    }

  export interface MagicItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MagicItem'], meta: { name: 'MagicItem' } }
    /**
     * Find zero or one MagicItem that matches the filter.
     * @param {MagicItemFindUniqueArgs} args - Arguments to find a MagicItem
     * @example
     * // Get one MagicItem
     * const magicItem = await prisma.magicItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MagicItemFindUniqueArgs>(args: SelectSubset<T, MagicItemFindUniqueArgs<ExtArgs>>): Prisma__MagicItemClient<$Result.GetResult<Prisma.$MagicItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MagicItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MagicItemFindUniqueOrThrowArgs} args - Arguments to find a MagicItem
     * @example
     * // Get one MagicItem
     * const magicItem = await prisma.magicItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MagicItemFindUniqueOrThrowArgs>(args: SelectSubset<T, MagicItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MagicItemClient<$Result.GetResult<Prisma.$MagicItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MagicItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MagicItemFindFirstArgs} args - Arguments to find a MagicItem
     * @example
     * // Get one MagicItem
     * const magicItem = await prisma.magicItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MagicItemFindFirstArgs>(args?: SelectSubset<T, MagicItemFindFirstArgs<ExtArgs>>): Prisma__MagicItemClient<$Result.GetResult<Prisma.$MagicItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MagicItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MagicItemFindFirstOrThrowArgs} args - Arguments to find a MagicItem
     * @example
     * // Get one MagicItem
     * const magicItem = await prisma.magicItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MagicItemFindFirstOrThrowArgs>(args?: SelectSubset<T, MagicItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__MagicItemClient<$Result.GetResult<Prisma.$MagicItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MagicItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MagicItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MagicItems
     * const magicItems = await prisma.magicItem.findMany()
     * 
     * // Get first 10 MagicItems
     * const magicItems = await prisma.magicItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const magicItemWithIdOnly = await prisma.magicItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MagicItemFindManyArgs>(args?: SelectSubset<T, MagicItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MagicItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MagicItem.
     * @param {MagicItemCreateArgs} args - Arguments to create a MagicItem.
     * @example
     * // Create one MagicItem
     * const MagicItem = await prisma.magicItem.create({
     *   data: {
     *     // ... data to create a MagicItem
     *   }
     * })
     * 
     */
    create<T extends MagicItemCreateArgs>(args: SelectSubset<T, MagicItemCreateArgs<ExtArgs>>): Prisma__MagicItemClient<$Result.GetResult<Prisma.$MagicItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MagicItems.
     * @param {MagicItemCreateManyArgs} args - Arguments to create many MagicItems.
     * @example
     * // Create many MagicItems
     * const magicItem = await prisma.magicItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MagicItemCreateManyArgs>(args?: SelectSubset<T, MagicItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MagicItems and returns the data saved in the database.
     * @param {MagicItemCreateManyAndReturnArgs} args - Arguments to create many MagicItems.
     * @example
     * // Create many MagicItems
     * const magicItem = await prisma.magicItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MagicItems and only return the `id`
     * const magicItemWithIdOnly = await prisma.magicItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MagicItemCreateManyAndReturnArgs>(args?: SelectSubset<T, MagicItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MagicItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MagicItem.
     * @param {MagicItemDeleteArgs} args - Arguments to delete one MagicItem.
     * @example
     * // Delete one MagicItem
     * const MagicItem = await prisma.magicItem.delete({
     *   where: {
     *     // ... filter to delete one MagicItem
     *   }
     * })
     * 
     */
    delete<T extends MagicItemDeleteArgs>(args: SelectSubset<T, MagicItemDeleteArgs<ExtArgs>>): Prisma__MagicItemClient<$Result.GetResult<Prisma.$MagicItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MagicItem.
     * @param {MagicItemUpdateArgs} args - Arguments to update one MagicItem.
     * @example
     * // Update one MagicItem
     * const magicItem = await prisma.magicItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MagicItemUpdateArgs>(args: SelectSubset<T, MagicItemUpdateArgs<ExtArgs>>): Prisma__MagicItemClient<$Result.GetResult<Prisma.$MagicItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MagicItems.
     * @param {MagicItemDeleteManyArgs} args - Arguments to filter MagicItems to delete.
     * @example
     * // Delete a few MagicItems
     * const { count } = await prisma.magicItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MagicItemDeleteManyArgs>(args?: SelectSubset<T, MagicItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MagicItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MagicItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MagicItems
     * const magicItem = await prisma.magicItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MagicItemUpdateManyArgs>(args: SelectSubset<T, MagicItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MagicItems and returns the data updated in the database.
     * @param {MagicItemUpdateManyAndReturnArgs} args - Arguments to update many MagicItems.
     * @example
     * // Update many MagicItems
     * const magicItem = await prisma.magicItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MagicItems and only return the `id`
     * const magicItemWithIdOnly = await prisma.magicItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MagicItemUpdateManyAndReturnArgs>(args: SelectSubset<T, MagicItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MagicItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MagicItem.
     * @param {MagicItemUpsertArgs} args - Arguments to update or create a MagicItem.
     * @example
     * // Update or create a MagicItem
     * const magicItem = await prisma.magicItem.upsert({
     *   create: {
     *     // ... data to create a MagicItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MagicItem we want to update
     *   }
     * })
     */
    upsert<T extends MagicItemUpsertArgs>(args: SelectSubset<T, MagicItemUpsertArgs<ExtArgs>>): Prisma__MagicItemClient<$Result.GetResult<Prisma.$MagicItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MagicItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MagicItemCountArgs} args - Arguments to filter MagicItems to count.
     * @example
     * // Count the number of MagicItems
     * const count = await prisma.magicItem.count({
     *   where: {
     *     // ... the filter for the MagicItems we want to count
     *   }
     * })
    **/
    count<T extends MagicItemCountArgs>(
      args?: Subset<T, MagicItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MagicItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MagicItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MagicItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MagicItemAggregateArgs>(args: Subset<T, MagicItemAggregateArgs>): Prisma.PrismaPromise<GetMagicItemAggregateType<T>>

    /**
     * Group by MagicItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MagicItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MagicItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MagicItemGroupByArgs['orderBy'] }
        : { orderBy?: MagicItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MagicItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMagicItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MagicItem model
   */
  readonly fields: MagicItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MagicItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MagicItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MagicItem model
   */
  interface MagicItemFieldRefs {
    readonly id: FieldRef<"MagicItem", 'Int'>
    readonly name: FieldRef<"MagicItem", 'String'>
    readonly rarity: FieldRef<"MagicItem", 'String'>
    readonly type: FieldRef<"MagicItem", 'String'>
    readonly attunement: FieldRef<"MagicItem", 'Boolean'>
    readonly description: FieldRef<"MagicItem", 'String'>
    readonly effects: FieldRef<"MagicItem", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * MagicItem findUnique
   */
  export type MagicItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicItem
     */
    select?: MagicItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MagicItem
     */
    omit?: MagicItemOmit<ExtArgs> | null
    /**
     * Filter, which MagicItem to fetch.
     */
    where: MagicItemWhereUniqueInput
  }

  /**
   * MagicItem findUniqueOrThrow
   */
  export type MagicItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicItem
     */
    select?: MagicItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MagicItem
     */
    omit?: MagicItemOmit<ExtArgs> | null
    /**
     * Filter, which MagicItem to fetch.
     */
    where: MagicItemWhereUniqueInput
  }

  /**
   * MagicItem findFirst
   */
  export type MagicItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicItem
     */
    select?: MagicItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MagicItem
     */
    omit?: MagicItemOmit<ExtArgs> | null
    /**
     * Filter, which MagicItem to fetch.
     */
    where?: MagicItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MagicItems to fetch.
     */
    orderBy?: MagicItemOrderByWithRelationInput | MagicItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MagicItems.
     */
    cursor?: MagicItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MagicItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MagicItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MagicItems.
     */
    distinct?: MagicItemScalarFieldEnum | MagicItemScalarFieldEnum[]
  }

  /**
   * MagicItem findFirstOrThrow
   */
  export type MagicItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicItem
     */
    select?: MagicItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MagicItem
     */
    omit?: MagicItemOmit<ExtArgs> | null
    /**
     * Filter, which MagicItem to fetch.
     */
    where?: MagicItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MagicItems to fetch.
     */
    orderBy?: MagicItemOrderByWithRelationInput | MagicItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MagicItems.
     */
    cursor?: MagicItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MagicItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MagicItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MagicItems.
     */
    distinct?: MagicItemScalarFieldEnum | MagicItemScalarFieldEnum[]
  }

  /**
   * MagicItem findMany
   */
  export type MagicItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicItem
     */
    select?: MagicItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MagicItem
     */
    omit?: MagicItemOmit<ExtArgs> | null
    /**
     * Filter, which MagicItems to fetch.
     */
    where?: MagicItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MagicItems to fetch.
     */
    orderBy?: MagicItemOrderByWithRelationInput | MagicItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MagicItems.
     */
    cursor?: MagicItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MagicItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MagicItems.
     */
    skip?: number
    distinct?: MagicItemScalarFieldEnum | MagicItemScalarFieldEnum[]
  }

  /**
   * MagicItem create
   */
  export type MagicItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicItem
     */
    select?: MagicItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MagicItem
     */
    omit?: MagicItemOmit<ExtArgs> | null
    /**
     * The data needed to create a MagicItem.
     */
    data: XOR<MagicItemCreateInput, MagicItemUncheckedCreateInput>
  }

  /**
   * MagicItem createMany
   */
  export type MagicItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MagicItems.
     */
    data: MagicItemCreateManyInput | MagicItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MagicItem createManyAndReturn
   */
  export type MagicItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicItem
     */
    select?: MagicItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MagicItem
     */
    omit?: MagicItemOmit<ExtArgs> | null
    /**
     * The data used to create many MagicItems.
     */
    data: MagicItemCreateManyInput | MagicItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MagicItem update
   */
  export type MagicItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicItem
     */
    select?: MagicItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MagicItem
     */
    omit?: MagicItemOmit<ExtArgs> | null
    /**
     * The data needed to update a MagicItem.
     */
    data: XOR<MagicItemUpdateInput, MagicItemUncheckedUpdateInput>
    /**
     * Choose, which MagicItem to update.
     */
    where: MagicItemWhereUniqueInput
  }

  /**
   * MagicItem updateMany
   */
  export type MagicItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MagicItems.
     */
    data: XOR<MagicItemUpdateManyMutationInput, MagicItemUncheckedUpdateManyInput>
    /**
     * Filter which MagicItems to update
     */
    where?: MagicItemWhereInput
    /**
     * Limit how many MagicItems to update.
     */
    limit?: number
  }

  /**
   * MagicItem updateManyAndReturn
   */
  export type MagicItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicItem
     */
    select?: MagicItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MagicItem
     */
    omit?: MagicItemOmit<ExtArgs> | null
    /**
     * The data used to update MagicItems.
     */
    data: XOR<MagicItemUpdateManyMutationInput, MagicItemUncheckedUpdateManyInput>
    /**
     * Filter which MagicItems to update
     */
    where?: MagicItemWhereInput
    /**
     * Limit how many MagicItems to update.
     */
    limit?: number
  }

  /**
   * MagicItem upsert
   */
  export type MagicItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicItem
     */
    select?: MagicItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MagicItem
     */
    omit?: MagicItemOmit<ExtArgs> | null
    /**
     * The filter to search for the MagicItem to update in case it exists.
     */
    where: MagicItemWhereUniqueInput
    /**
     * In case the MagicItem found by the `where` argument doesn't exist, create a new MagicItem with this data.
     */
    create: XOR<MagicItemCreateInput, MagicItemUncheckedCreateInput>
    /**
     * In case the MagicItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MagicItemUpdateInput, MagicItemUncheckedUpdateInput>
  }

  /**
   * MagicItem delete
   */
  export type MagicItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicItem
     */
    select?: MagicItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MagicItem
     */
    omit?: MagicItemOmit<ExtArgs> | null
    /**
     * Filter which MagicItem to delete.
     */
    where: MagicItemWhereUniqueInput
  }

  /**
   * MagicItem deleteMany
   */
  export type MagicItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MagicItems to delete
     */
    where?: MagicItemWhereInput
    /**
     * Limit how many MagicItems to delete.
     */
    limit?: number
  }

  /**
   * MagicItem without action
   */
  export type MagicItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicItem
     */
    select?: MagicItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MagicItem
     */
    omit?: MagicItemOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BackgroundScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    skills: 'skills',
    languages: 'languages',
    equipment: 'equipment'
  };

  export type BackgroundScalarFieldEnum = (typeof BackgroundScalarFieldEnum)[keyof typeof BackgroundScalarFieldEnum]


  export const BackgroundFeatureScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    backgroundId: 'backgroundId'
  };

  export type BackgroundFeatureScalarFieldEnum = (typeof BackgroundFeatureScalarFieldEnum)[keyof typeof BackgroundFeatureScalarFieldEnum]


  export const ClassScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    image: 'image'
  };

  export type ClassScalarFieldEnum = (typeof ClassScalarFieldEnum)[keyof typeof ClassScalarFieldEnum]


  export const ClassLongScalarFieldEnum: {
    id: 'id',
    source: 'source',
    hitDice: 'hitDice',
    image: 'image',
    primaryAbility: 'primaryAbility',
    savingThrows: 'savingThrows',
    skillsChoose: 'skillsChoose',
    skillsFrom: 'skillsFrom',
    description: 'description',
    progression: 'progression',
    features: 'features'
  };

  export type ClassLongScalarFieldEnum = (typeof ClassLongScalarFieldEnum)[keyof typeof ClassLongScalarFieldEnum]


  export const RaceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    source: 'source',
    version: 'version',
    size: 'size',
    speed: 'speed',
    abilityBonuses: 'abilityBonuses',
    languages: 'languages',
    darkvision: 'darkvision'
  };

  export type RaceScalarFieldEnum = (typeof RaceScalarFieldEnum)[keyof typeof RaceScalarFieldEnum]


  export const TraitScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    raceId: 'raceId'
  };

  export type TraitScalarFieldEnum = (typeof TraitScalarFieldEnum)[keyof typeof TraitScalarFieldEnum]


  export const SubRaceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    abilityBonuses: 'abilityBonuses',
    traits: 'traits',
    raceId: 'raceId'
  };

  export type SubRaceScalarFieldEnum = (typeof SubRaceScalarFieldEnum)[keyof typeof SubRaceScalarFieldEnum]


  export const SpellScalarFieldEnum: {
    id: 'id',
    nameUa: 'nameUa',
    nameEn: 'nameEn',
    school: 'school',
    level: 'level',
    castingTime: 'castingTime',
    range: 'range',
    components: 'components',
    duration: 'duration',
    description: 'description',
    damage: 'damage'
  };

  export type SpellScalarFieldEnum = (typeof SpellScalarFieldEnum)[keyof typeof SpellScalarFieldEnum]


  export const SubclassScalarFieldEnum: {
    id: 'id',
    nameEn: 'nameEn',
    nameUk: 'nameUk',
    description: 'description',
    features: 'features'
  };

  export type SubclassScalarFieldEnum = (typeof SubclassScalarFieldEnum)[keyof typeof SubclassScalarFieldEnum]


  export const MagicItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    rarity: 'rarity',
    type: 'type',
    attunement: 'attunement',
    description: 'description',
    effects: 'effects'
  };

  export type MagicItemScalarFieldEnum = (typeof MagicItemScalarFieldEnum)[keyof typeof MagicItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type BackgroundWhereInput = {
    AND?: BackgroundWhereInput | BackgroundWhereInput[]
    OR?: BackgroundWhereInput[]
    NOT?: BackgroundWhereInput | BackgroundWhereInput[]
    id?: IntFilter<"Background"> | number
    name?: StringFilter<"Background"> | string
    description?: StringFilter<"Background"> | string
    skills?: StringNullableListFilter<"Background">
    languages?: IntFilter<"Background"> | number
    equipment?: StringNullableListFilter<"Background">
    features?: BackgroundFeatureListRelationFilter
  }

  export type BackgroundOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    skills?: SortOrder
    languages?: SortOrder
    equipment?: SortOrder
    features?: BackgroundFeatureOrderByRelationAggregateInput
  }

  export type BackgroundWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BackgroundWhereInput | BackgroundWhereInput[]
    OR?: BackgroundWhereInput[]
    NOT?: BackgroundWhereInput | BackgroundWhereInput[]
    name?: StringFilter<"Background"> | string
    description?: StringFilter<"Background"> | string
    skills?: StringNullableListFilter<"Background">
    languages?: IntFilter<"Background"> | number
    equipment?: StringNullableListFilter<"Background">
    features?: BackgroundFeatureListRelationFilter
  }, "id">

  export type BackgroundOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    skills?: SortOrder
    languages?: SortOrder
    equipment?: SortOrder
    _count?: BackgroundCountOrderByAggregateInput
    _avg?: BackgroundAvgOrderByAggregateInput
    _max?: BackgroundMaxOrderByAggregateInput
    _min?: BackgroundMinOrderByAggregateInput
    _sum?: BackgroundSumOrderByAggregateInput
  }

  export type BackgroundScalarWhereWithAggregatesInput = {
    AND?: BackgroundScalarWhereWithAggregatesInput | BackgroundScalarWhereWithAggregatesInput[]
    OR?: BackgroundScalarWhereWithAggregatesInput[]
    NOT?: BackgroundScalarWhereWithAggregatesInput | BackgroundScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Background"> | number
    name?: StringWithAggregatesFilter<"Background"> | string
    description?: StringWithAggregatesFilter<"Background"> | string
    skills?: StringNullableListFilter<"Background">
    languages?: IntWithAggregatesFilter<"Background"> | number
    equipment?: StringNullableListFilter<"Background">
  }

  export type BackgroundFeatureWhereInput = {
    AND?: BackgroundFeatureWhereInput | BackgroundFeatureWhereInput[]
    OR?: BackgroundFeatureWhereInput[]
    NOT?: BackgroundFeatureWhereInput | BackgroundFeatureWhereInput[]
    id?: IntFilter<"BackgroundFeature"> | number
    name?: StringFilter<"BackgroundFeature"> | string
    description?: StringFilter<"BackgroundFeature"> | string
    backgroundId?: IntNullableFilter<"BackgroundFeature"> | number | null
    background?: XOR<BackgroundNullableScalarRelationFilter, BackgroundWhereInput> | null
  }

  export type BackgroundFeatureOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    backgroundId?: SortOrderInput | SortOrder
    background?: BackgroundOrderByWithRelationInput
  }

  export type BackgroundFeatureWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BackgroundFeatureWhereInput | BackgroundFeatureWhereInput[]
    OR?: BackgroundFeatureWhereInput[]
    NOT?: BackgroundFeatureWhereInput | BackgroundFeatureWhereInput[]
    name?: StringFilter<"BackgroundFeature"> | string
    description?: StringFilter<"BackgroundFeature"> | string
    backgroundId?: IntNullableFilter<"BackgroundFeature"> | number | null
    background?: XOR<BackgroundNullableScalarRelationFilter, BackgroundWhereInput> | null
  }, "id">

  export type BackgroundFeatureOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    backgroundId?: SortOrderInput | SortOrder
    _count?: BackgroundFeatureCountOrderByAggregateInput
    _avg?: BackgroundFeatureAvgOrderByAggregateInput
    _max?: BackgroundFeatureMaxOrderByAggregateInput
    _min?: BackgroundFeatureMinOrderByAggregateInput
    _sum?: BackgroundFeatureSumOrderByAggregateInput
  }

  export type BackgroundFeatureScalarWhereWithAggregatesInput = {
    AND?: BackgroundFeatureScalarWhereWithAggregatesInput | BackgroundFeatureScalarWhereWithAggregatesInput[]
    OR?: BackgroundFeatureScalarWhereWithAggregatesInput[]
    NOT?: BackgroundFeatureScalarWhereWithAggregatesInput | BackgroundFeatureScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BackgroundFeature"> | number
    name?: StringWithAggregatesFilter<"BackgroundFeature"> | string
    description?: StringWithAggregatesFilter<"BackgroundFeature"> | string
    backgroundId?: IntNullableWithAggregatesFilter<"BackgroundFeature"> | number | null
  }

  export type ClassWhereInput = {
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    id?: StringFilter<"Class"> | string
    name?: StringFilter<"Class"> | string
    description?: StringFilter<"Class"> | string
    image?: StringNullableFilter<"Class"> | string | null
    long?: XOR<ClassLongNullableScalarRelationFilter, ClassLongWhereInput> | null
    spells?: SpellListRelationFilter
  }

  export type ClassOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrderInput | SortOrder
    long?: ClassLongOrderByWithRelationInput
    spells?: SpellOrderByRelationAggregateInput
  }

  export type ClassWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    name?: StringFilter<"Class"> | string
    description?: StringFilter<"Class"> | string
    image?: StringNullableFilter<"Class"> | string | null
    long?: XOR<ClassLongNullableScalarRelationFilter, ClassLongWhereInput> | null
    spells?: SpellListRelationFilter
  }, "id">

  export type ClassOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrderInput | SortOrder
    _count?: ClassCountOrderByAggregateInput
    _max?: ClassMaxOrderByAggregateInput
    _min?: ClassMinOrderByAggregateInput
  }

  export type ClassScalarWhereWithAggregatesInput = {
    AND?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    OR?: ClassScalarWhereWithAggregatesInput[]
    NOT?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Class"> | string
    name?: StringWithAggregatesFilter<"Class"> | string
    description?: StringWithAggregatesFilter<"Class"> | string
    image?: StringNullableWithAggregatesFilter<"Class"> | string | null
  }

  export type ClassLongWhereInput = {
    AND?: ClassLongWhereInput | ClassLongWhereInput[]
    OR?: ClassLongWhereInput[]
    NOT?: ClassLongWhereInput | ClassLongWhereInput[]
    id?: StringFilter<"ClassLong"> | string
    source?: StringFilter<"ClassLong"> | string
    hitDice?: StringFilter<"ClassLong"> | string
    image?: StringNullableFilter<"ClassLong"> | string | null
    primaryAbility?: StringNullableListFilter<"ClassLong">
    savingThrows?: StringNullableListFilter<"ClassLong">
    skillsChoose?: IntFilter<"ClassLong"> | number
    skillsFrom?: StringNullableListFilter<"ClassLong">
    description?: StringFilter<"ClassLong"> | string
    progression?: JsonFilter<"ClassLong">
    features?: JsonFilter<"ClassLong">
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
  }

  export type ClassLongOrderByWithRelationInput = {
    id?: SortOrder
    source?: SortOrder
    hitDice?: SortOrder
    image?: SortOrderInput | SortOrder
    primaryAbility?: SortOrder
    savingThrows?: SortOrder
    skillsChoose?: SortOrder
    skillsFrom?: SortOrder
    description?: SortOrder
    progression?: SortOrder
    features?: SortOrder
    class?: ClassOrderByWithRelationInput
  }

  export type ClassLongWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClassLongWhereInput | ClassLongWhereInput[]
    OR?: ClassLongWhereInput[]
    NOT?: ClassLongWhereInput | ClassLongWhereInput[]
    source?: StringFilter<"ClassLong"> | string
    hitDice?: StringFilter<"ClassLong"> | string
    image?: StringNullableFilter<"ClassLong"> | string | null
    primaryAbility?: StringNullableListFilter<"ClassLong">
    savingThrows?: StringNullableListFilter<"ClassLong">
    skillsChoose?: IntFilter<"ClassLong"> | number
    skillsFrom?: StringNullableListFilter<"ClassLong">
    description?: StringFilter<"ClassLong"> | string
    progression?: JsonFilter<"ClassLong">
    features?: JsonFilter<"ClassLong">
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
  }, "id">

  export type ClassLongOrderByWithAggregationInput = {
    id?: SortOrder
    source?: SortOrder
    hitDice?: SortOrder
    image?: SortOrderInput | SortOrder
    primaryAbility?: SortOrder
    savingThrows?: SortOrder
    skillsChoose?: SortOrder
    skillsFrom?: SortOrder
    description?: SortOrder
    progression?: SortOrder
    features?: SortOrder
    _count?: ClassLongCountOrderByAggregateInput
    _avg?: ClassLongAvgOrderByAggregateInput
    _max?: ClassLongMaxOrderByAggregateInput
    _min?: ClassLongMinOrderByAggregateInput
    _sum?: ClassLongSumOrderByAggregateInput
  }

  export type ClassLongScalarWhereWithAggregatesInput = {
    AND?: ClassLongScalarWhereWithAggregatesInput | ClassLongScalarWhereWithAggregatesInput[]
    OR?: ClassLongScalarWhereWithAggregatesInput[]
    NOT?: ClassLongScalarWhereWithAggregatesInput | ClassLongScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClassLong"> | string
    source?: StringWithAggregatesFilter<"ClassLong"> | string
    hitDice?: StringWithAggregatesFilter<"ClassLong"> | string
    image?: StringNullableWithAggregatesFilter<"ClassLong"> | string | null
    primaryAbility?: StringNullableListFilter<"ClassLong">
    savingThrows?: StringNullableListFilter<"ClassLong">
    skillsChoose?: IntWithAggregatesFilter<"ClassLong"> | number
    skillsFrom?: StringNullableListFilter<"ClassLong">
    description?: StringWithAggregatesFilter<"ClassLong"> | string
    progression?: JsonWithAggregatesFilter<"ClassLong">
    features?: JsonWithAggregatesFilter<"ClassLong">
  }

  export type RaceWhereInput = {
    AND?: RaceWhereInput | RaceWhereInput[]
    OR?: RaceWhereInput[]
    NOT?: RaceWhereInput | RaceWhereInput[]
    id?: StringFilter<"Race"> | string
    name?: StringFilter<"Race"> | string
    image?: StringNullableFilter<"Race"> | string | null
    source?: StringFilter<"Race"> | string
    version?: StringFilter<"Race"> | string
    size?: StringFilter<"Race"> | string
    speed?: StringNullableListFilter<"Race">
    abilityBonuses?: StringNullableListFilter<"Race">
    languages?: StringNullableListFilter<"Race">
    darkvision?: StringNullableFilter<"Race"> | string | null
    traits?: TraitListRelationFilter
    subraces?: SubRaceListRelationFilter
  }

  export type RaceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrderInput | SortOrder
    source?: SortOrder
    version?: SortOrder
    size?: SortOrder
    speed?: SortOrder
    abilityBonuses?: SortOrder
    languages?: SortOrder
    darkvision?: SortOrderInput | SortOrder
    traits?: TraitOrderByRelationAggregateInput
    subraces?: SubRaceOrderByRelationAggregateInput
  }

  export type RaceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RaceWhereInput | RaceWhereInput[]
    OR?: RaceWhereInput[]
    NOT?: RaceWhereInput | RaceWhereInput[]
    name?: StringFilter<"Race"> | string
    image?: StringNullableFilter<"Race"> | string | null
    source?: StringFilter<"Race"> | string
    version?: StringFilter<"Race"> | string
    size?: StringFilter<"Race"> | string
    speed?: StringNullableListFilter<"Race">
    abilityBonuses?: StringNullableListFilter<"Race">
    languages?: StringNullableListFilter<"Race">
    darkvision?: StringNullableFilter<"Race"> | string | null
    traits?: TraitListRelationFilter
    subraces?: SubRaceListRelationFilter
  }, "id">

  export type RaceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrderInput | SortOrder
    source?: SortOrder
    version?: SortOrder
    size?: SortOrder
    speed?: SortOrder
    abilityBonuses?: SortOrder
    languages?: SortOrder
    darkvision?: SortOrderInput | SortOrder
    _count?: RaceCountOrderByAggregateInput
    _max?: RaceMaxOrderByAggregateInput
    _min?: RaceMinOrderByAggregateInput
  }

  export type RaceScalarWhereWithAggregatesInput = {
    AND?: RaceScalarWhereWithAggregatesInput | RaceScalarWhereWithAggregatesInput[]
    OR?: RaceScalarWhereWithAggregatesInput[]
    NOT?: RaceScalarWhereWithAggregatesInput | RaceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Race"> | string
    name?: StringWithAggregatesFilter<"Race"> | string
    image?: StringNullableWithAggregatesFilter<"Race"> | string | null
    source?: StringWithAggregatesFilter<"Race"> | string
    version?: StringWithAggregatesFilter<"Race"> | string
    size?: StringWithAggregatesFilter<"Race"> | string
    speed?: StringNullableListFilter<"Race">
    abilityBonuses?: StringNullableListFilter<"Race">
    languages?: StringNullableListFilter<"Race">
    darkvision?: StringNullableWithAggregatesFilter<"Race"> | string | null
  }

  export type TraitWhereInput = {
    AND?: TraitWhereInput | TraitWhereInput[]
    OR?: TraitWhereInput[]
    NOT?: TraitWhereInput | TraitWhereInput[]
    id?: IntFilter<"Trait"> | number
    name?: StringFilter<"Trait"> | string
    description?: StringFilter<"Trait"> | string
    raceId?: StringNullableFilter<"Trait"> | string | null
    race?: XOR<RaceNullableScalarRelationFilter, RaceWhereInput> | null
  }

  export type TraitOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    raceId?: SortOrderInput | SortOrder
    race?: RaceOrderByWithRelationInput
  }

  export type TraitWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TraitWhereInput | TraitWhereInput[]
    OR?: TraitWhereInput[]
    NOT?: TraitWhereInput | TraitWhereInput[]
    name?: StringFilter<"Trait"> | string
    description?: StringFilter<"Trait"> | string
    raceId?: StringNullableFilter<"Trait"> | string | null
    race?: XOR<RaceNullableScalarRelationFilter, RaceWhereInput> | null
  }, "id">

  export type TraitOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    raceId?: SortOrderInput | SortOrder
    _count?: TraitCountOrderByAggregateInput
    _avg?: TraitAvgOrderByAggregateInput
    _max?: TraitMaxOrderByAggregateInput
    _min?: TraitMinOrderByAggregateInput
    _sum?: TraitSumOrderByAggregateInput
  }

  export type TraitScalarWhereWithAggregatesInput = {
    AND?: TraitScalarWhereWithAggregatesInput | TraitScalarWhereWithAggregatesInput[]
    OR?: TraitScalarWhereWithAggregatesInput[]
    NOT?: TraitScalarWhereWithAggregatesInput | TraitScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Trait"> | number
    name?: StringWithAggregatesFilter<"Trait"> | string
    description?: StringWithAggregatesFilter<"Trait"> | string
    raceId?: StringNullableWithAggregatesFilter<"Trait"> | string | null
  }

  export type SubRaceWhereInput = {
    AND?: SubRaceWhereInput | SubRaceWhereInput[]
    OR?: SubRaceWhereInput[]
    NOT?: SubRaceWhereInput | SubRaceWhereInput[]
    id?: StringFilter<"SubRace"> | string
    name?: StringFilter<"SubRace"> | string
    image?: StringNullableFilter<"SubRace"> | string | null
    abilityBonuses?: StringNullableFilter<"SubRace"> | string | null
    traits?: JsonFilter<"SubRace">
    raceId?: StringNullableFilter<"SubRace"> | string | null
    race?: XOR<RaceNullableScalarRelationFilter, RaceWhereInput> | null
  }

  export type SubRaceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrderInput | SortOrder
    abilityBonuses?: SortOrderInput | SortOrder
    traits?: SortOrder
    raceId?: SortOrderInput | SortOrder
    race?: RaceOrderByWithRelationInput
  }

  export type SubRaceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubRaceWhereInput | SubRaceWhereInput[]
    OR?: SubRaceWhereInput[]
    NOT?: SubRaceWhereInput | SubRaceWhereInput[]
    name?: StringFilter<"SubRace"> | string
    image?: StringNullableFilter<"SubRace"> | string | null
    abilityBonuses?: StringNullableFilter<"SubRace"> | string | null
    traits?: JsonFilter<"SubRace">
    raceId?: StringNullableFilter<"SubRace"> | string | null
    race?: XOR<RaceNullableScalarRelationFilter, RaceWhereInput> | null
  }, "id">

  export type SubRaceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrderInput | SortOrder
    abilityBonuses?: SortOrderInput | SortOrder
    traits?: SortOrder
    raceId?: SortOrderInput | SortOrder
    _count?: SubRaceCountOrderByAggregateInput
    _max?: SubRaceMaxOrderByAggregateInput
    _min?: SubRaceMinOrderByAggregateInput
  }

  export type SubRaceScalarWhereWithAggregatesInput = {
    AND?: SubRaceScalarWhereWithAggregatesInput | SubRaceScalarWhereWithAggregatesInput[]
    OR?: SubRaceScalarWhereWithAggregatesInput[]
    NOT?: SubRaceScalarWhereWithAggregatesInput | SubRaceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubRace"> | string
    name?: StringWithAggregatesFilter<"SubRace"> | string
    image?: StringNullableWithAggregatesFilter<"SubRace"> | string | null
    abilityBonuses?: StringNullableWithAggregatesFilter<"SubRace"> | string | null
    traits?: JsonWithAggregatesFilter<"SubRace">
    raceId?: StringNullableWithAggregatesFilter<"SubRace"> | string | null
  }

  export type SpellWhereInput = {
    AND?: SpellWhereInput | SpellWhereInput[]
    OR?: SpellWhereInput[]
    NOT?: SpellWhereInput | SpellWhereInput[]
    id?: IntFilter<"Spell"> | number
    nameUa?: StringFilter<"Spell"> | string
    nameEn?: StringFilter<"Spell"> | string
    school?: StringFilter<"Spell"> | string
    level?: IntFilter<"Spell"> | number
    castingTime?: StringFilter<"Spell"> | string
    range?: StringFilter<"Spell"> | string
    components?: StringFilter<"Spell"> | string
    duration?: StringFilter<"Spell"> | string
    description?: StringFilter<"Spell"> | string
    damage?: JsonNullableFilter<"Spell">
    classes?: ClassListRelationFilter
  }

  export type SpellOrderByWithRelationInput = {
    id?: SortOrder
    nameUa?: SortOrder
    nameEn?: SortOrder
    school?: SortOrder
    level?: SortOrder
    castingTime?: SortOrder
    range?: SortOrder
    components?: SortOrder
    duration?: SortOrder
    description?: SortOrder
    damage?: SortOrderInput | SortOrder
    classes?: ClassOrderByRelationAggregateInput
  }

  export type SpellWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SpellWhereInput | SpellWhereInput[]
    OR?: SpellWhereInput[]
    NOT?: SpellWhereInput | SpellWhereInput[]
    nameUa?: StringFilter<"Spell"> | string
    nameEn?: StringFilter<"Spell"> | string
    school?: StringFilter<"Spell"> | string
    level?: IntFilter<"Spell"> | number
    castingTime?: StringFilter<"Spell"> | string
    range?: StringFilter<"Spell"> | string
    components?: StringFilter<"Spell"> | string
    duration?: StringFilter<"Spell"> | string
    description?: StringFilter<"Spell"> | string
    damage?: JsonNullableFilter<"Spell">
    classes?: ClassListRelationFilter
  }, "id">

  export type SpellOrderByWithAggregationInput = {
    id?: SortOrder
    nameUa?: SortOrder
    nameEn?: SortOrder
    school?: SortOrder
    level?: SortOrder
    castingTime?: SortOrder
    range?: SortOrder
    components?: SortOrder
    duration?: SortOrder
    description?: SortOrder
    damage?: SortOrderInput | SortOrder
    _count?: SpellCountOrderByAggregateInput
    _avg?: SpellAvgOrderByAggregateInput
    _max?: SpellMaxOrderByAggregateInput
    _min?: SpellMinOrderByAggregateInput
    _sum?: SpellSumOrderByAggregateInput
  }

  export type SpellScalarWhereWithAggregatesInput = {
    AND?: SpellScalarWhereWithAggregatesInput | SpellScalarWhereWithAggregatesInput[]
    OR?: SpellScalarWhereWithAggregatesInput[]
    NOT?: SpellScalarWhereWithAggregatesInput | SpellScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Spell"> | number
    nameUa?: StringWithAggregatesFilter<"Spell"> | string
    nameEn?: StringWithAggregatesFilter<"Spell"> | string
    school?: StringWithAggregatesFilter<"Spell"> | string
    level?: IntWithAggregatesFilter<"Spell"> | number
    castingTime?: StringWithAggregatesFilter<"Spell"> | string
    range?: StringWithAggregatesFilter<"Spell"> | string
    components?: StringWithAggregatesFilter<"Spell"> | string
    duration?: StringWithAggregatesFilter<"Spell"> | string
    description?: StringWithAggregatesFilter<"Spell"> | string
    damage?: JsonNullableWithAggregatesFilter<"Spell">
  }

  export type SubclassWhereInput = {
    AND?: SubclassWhereInput | SubclassWhereInput[]
    OR?: SubclassWhereInput[]
    NOT?: SubclassWhereInput | SubclassWhereInput[]
    id?: StringFilter<"Subclass"> | string
    nameEn?: StringFilter<"Subclass"> | string
    nameUk?: StringFilter<"Subclass"> | string
    description?: StringFilter<"Subclass"> | string
    features?: JsonFilter<"Subclass">
  }

  export type SubclassOrderByWithRelationInput = {
    id?: SortOrder
    nameEn?: SortOrder
    nameUk?: SortOrder
    description?: SortOrder
    features?: SortOrder
  }

  export type SubclassWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubclassWhereInput | SubclassWhereInput[]
    OR?: SubclassWhereInput[]
    NOT?: SubclassWhereInput | SubclassWhereInput[]
    nameEn?: StringFilter<"Subclass"> | string
    nameUk?: StringFilter<"Subclass"> | string
    description?: StringFilter<"Subclass"> | string
    features?: JsonFilter<"Subclass">
  }, "id">

  export type SubclassOrderByWithAggregationInput = {
    id?: SortOrder
    nameEn?: SortOrder
    nameUk?: SortOrder
    description?: SortOrder
    features?: SortOrder
    _count?: SubclassCountOrderByAggregateInput
    _max?: SubclassMaxOrderByAggregateInput
    _min?: SubclassMinOrderByAggregateInput
  }

  export type SubclassScalarWhereWithAggregatesInput = {
    AND?: SubclassScalarWhereWithAggregatesInput | SubclassScalarWhereWithAggregatesInput[]
    OR?: SubclassScalarWhereWithAggregatesInput[]
    NOT?: SubclassScalarWhereWithAggregatesInput | SubclassScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subclass"> | string
    nameEn?: StringWithAggregatesFilter<"Subclass"> | string
    nameUk?: StringWithAggregatesFilter<"Subclass"> | string
    description?: StringWithAggregatesFilter<"Subclass"> | string
    features?: JsonWithAggregatesFilter<"Subclass">
  }

  export type MagicItemWhereInput = {
    AND?: MagicItemWhereInput | MagicItemWhereInput[]
    OR?: MagicItemWhereInput[]
    NOT?: MagicItemWhereInput | MagicItemWhereInput[]
    id?: IntFilter<"MagicItem"> | number
    name?: StringFilter<"MagicItem"> | string
    rarity?: StringFilter<"MagicItem"> | string
    type?: StringFilter<"MagicItem"> | string
    attunement?: BoolFilter<"MagicItem"> | boolean
    description?: StringFilter<"MagicItem"> | string
    effects?: JsonFilter<"MagicItem">
  }

  export type MagicItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    rarity?: SortOrder
    type?: SortOrder
    attunement?: SortOrder
    description?: SortOrder
    effects?: SortOrder
  }

  export type MagicItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MagicItemWhereInput | MagicItemWhereInput[]
    OR?: MagicItemWhereInput[]
    NOT?: MagicItemWhereInput | MagicItemWhereInput[]
    name?: StringFilter<"MagicItem"> | string
    rarity?: StringFilter<"MagicItem"> | string
    type?: StringFilter<"MagicItem"> | string
    attunement?: BoolFilter<"MagicItem"> | boolean
    description?: StringFilter<"MagicItem"> | string
    effects?: JsonFilter<"MagicItem">
  }, "id">

  export type MagicItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    rarity?: SortOrder
    type?: SortOrder
    attunement?: SortOrder
    description?: SortOrder
    effects?: SortOrder
    _count?: MagicItemCountOrderByAggregateInput
    _avg?: MagicItemAvgOrderByAggregateInput
    _max?: MagicItemMaxOrderByAggregateInput
    _min?: MagicItemMinOrderByAggregateInput
    _sum?: MagicItemSumOrderByAggregateInput
  }

  export type MagicItemScalarWhereWithAggregatesInput = {
    AND?: MagicItemScalarWhereWithAggregatesInput | MagicItemScalarWhereWithAggregatesInput[]
    OR?: MagicItemScalarWhereWithAggregatesInput[]
    NOT?: MagicItemScalarWhereWithAggregatesInput | MagicItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MagicItem"> | number
    name?: StringWithAggregatesFilter<"MagicItem"> | string
    rarity?: StringWithAggregatesFilter<"MagicItem"> | string
    type?: StringWithAggregatesFilter<"MagicItem"> | string
    attunement?: BoolWithAggregatesFilter<"MagicItem"> | boolean
    description?: StringWithAggregatesFilter<"MagicItem"> | string
    effects?: JsonWithAggregatesFilter<"MagicItem">
  }

  export type BackgroundCreateInput = {
    name: string
    description: string
    skills?: BackgroundCreateskillsInput | string[]
    languages: number
    equipment?: BackgroundCreateequipmentInput | string[]
    features?: BackgroundFeatureCreateNestedManyWithoutBackgroundInput
  }

  export type BackgroundUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    skills?: BackgroundCreateskillsInput | string[]
    languages: number
    equipment?: BackgroundCreateequipmentInput | string[]
    features?: BackgroundFeatureUncheckedCreateNestedManyWithoutBackgroundInput
  }

  export type BackgroundUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    skills?: BackgroundUpdateskillsInput | string[]
    languages?: IntFieldUpdateOperationsInput | number
    equipment?: BackgroundUpdateequipmentInput | string[]
    features?: BackgroundFeatureUpdateManyWithoutBackgroundNestedInput
  }

  export type BackgroundUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    skills?: BackgroundUpdateskillsInput | string[]
    languages?: IntFieldUpdateOperationsInput | number
    equipment?: BackgroundUpdateequipmentInput | string[]
    features?: BackgroundFeatureUncheckedUpdateManyWithoutBackgroundNestedInput
  }

  export type BackgroundCreateManyInput = {
    id?: number
    name: string
    description: string
    skills?: BackgroundCreateskillsInput | string[]
    languages: number
    equipment?: BackgroundCreateequipmentInput | string[]
  }

  export type BackgroundUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    skills?: BackgroundUpdateskillsInput | string[]
    languages?: IntFieldUpdateOperationsInput | number
    equipment?: BackgroundUpdateequipmentInput | string[]
  }

  export type BackgroundUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    skills?: BackgroundUpdateskillsInput | string[]
    languages?: IntFieldUpdateOperationsInput | number
    equipment?: BackgroundUpdateequipmentInput | string[]
  }

  export type BackgroundFeatureCreateInput = {
    name: string
    description: string
    background?: BackgroundCreateNestedOneWithoutFeaturesInput
  }

  export type BackgroundFeatureUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    backgroundId?: number | null
  }

  export type BackgroundFeatureUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    background?: BackgroundUpdateOneWithoutFeaturesNestedInput
  }

  export type BackgroundFeatureUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    backgroundId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BackgroundFeatureCreateManyInput = {
    id?: number
    name: string
    description: string
    backgroundId?: number | null
  }

  export type BackgroundFeatureUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type BackgroundFeatureUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    backgroundId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ClassCreateInput = {
    id: string
    name: string
    description: string
    image?: string | null
    long?: ClassLongCreateNestedOneWithoutClassInput
    spells?: SpellCreateNestedManyWithoutClassesInput
  }

  export type ClassUncheckedCreateInput = {
    id: string
    name: string
    description: string
    image?: string | null
    long?: ClassLongUncheckedCreateNestedOneWithoutClassInput
    spells?: SpellUncheckedCreateNestedManyWithoutClassesInput
  }

  export type ClassUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    long?: ClassLongUpdateOneWithoutClassNestedInput
    spells?: SpellUpdateManyWithoutClassesNestedInput
  }

  export type ClassUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    long?: ClassLongUncheckedUpdateOneWithoutClassNestedInput
    spells?: SpellUncheckedUpdateManyWithoutClassesNestedInput
  }

  export type ClassCreateManyInput = {
    id: string
    name: string
    description: string
    image?: string | null
  }

  export type ClassUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClassUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClassLongCreateInput = {
    source: string
    hitDice: string
    image?: string | null
    primaryAbility?: ClassLongCreateprimaryAbilityInput | string[]
    savingThrows?: ClassLongCreatesavingThrowsInput | string[]
    skillsChoose: number
    skillsFrom?: ClassLongCreateskillsFromInput | string[]
    description: string
    progression: JsonNullValueInput | InputJsonValue
    features: JsonNullValueInput | InputJsonValue
    class: ClassCreateNestedOneWithoutLongInput
  }

  export type ClassLongUncheckedCreateInput = {
    id: string
    source: string
    hitDice: string
    image?: string | null
    primaryAbility?: ClassLongCreateprimaryAbilityInput | string[]
    savingThrows?: ClassLongCreatesavingThrowsInput | string[]
    skillsChoose: number
    skillsFrom?: ClassLongCreateskillsFromInput | string[]
    description: string
    progression: JsonNullValueInput | InputJsonValue
    features: JsonNullValueInput | InputJsonValue
  }

  export type ClassLongUpdateInput = {
    source?: StringFieldUpdateOperationsInput | string
    hitDice?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    primaryAbility?: ClassLongUpdateprimaryAbilityInput | string[]
    savingThrows?: ClassLongUpdatesavingThrowsInput | string[]
    skillsChoose?: IntFieldUpdateOperationsInput | number
    skillsFrom?: ClassLongUpdateskillsFromInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    progression?: JsonNullValueInput | InputJsonValue
    features?: JsonNullValueInput | InputJsonValue
    class?: ClassUpdateOneRequiredWithoutLongNestedInput
  }

  export type ClassLongUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    hitDice?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    primaryAbility?: ClassLongUpdateprimaryAbilityInput | string[]
    savingThrows?: ClassLongUpdatesavingThrowsInput | string[]
    skillsChoose?: IntFieldUpdateOperationsInput | number
    skillsFrom?: ClassLongUpdateskillsFromInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    progression?: JsonNullValueInput | InputJsonValue
    features?: JsonNullValueInput | InputJsonValue
  }

  export type ClassLongCreateManyInput = {
    id: string
    source: string
    hitDice: string
    image?: string | null
    primaryAbility?: ClassLongCreateprimaryAbilityInput | string[]
    savingThrows?: ClassLongCreatesavingThrowsInput | string[]
    skillsChoose: number
    skillsFrom?: ClassLongCreateskillsFromInput | string[]
    description: string
    progression: JsonNullValueInput | InputJsonValue
    features: JsonNullValueInput | InputJsonValue
  }

  export type ClassLongUpdateManyMutationInput = {
    source?: StringFieldUpdateOperationsInput | string
    hitDice?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    primaryAbility?: ClassLongUpdateprimaryAbilityInput | string[]
    savingThrows?: ClassLongUpdatesavingThrowsInput | string[]
    skillsChoose?: IntFieldUpdateOperationsInput | number
    skillsFrom?: ClassLongUpdateskillsFromInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    progression?: JsonNullValueInput | InputJsonValue
    features?: JsonNullValueInput | InputJsonValue
  }

  export type ClassLongUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    hitDice?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    primaryAbility?: ClassLongUpdateprimaryAbilityInput | string[]
    savingThrows?: ClassLongUpdatesavingThrowsInput | string[]
    skillsChoose?: IntFieldUpdateOperationsInput | number
    skillsFrom?: ClassLongUpdateskillsFromInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    progression?: JsonNullValueInput | InputJsonValue
    features?: JsonNullValueInput | InputJsonValue
  }

  export type RaceCreateInput = {
    id: string
    name: string
    image?: string | null
    source: string
    version: string
    size: string
    speed?: RaceCreatespeedInput | string[]
    abilityBonuses?: RaceCreateabilityBonusesInput | string[]
    languages?: RaceCreatelanguagesInput | string[]
    darkvision?: string | null
    traits?: TraitCreateNestedManyWithoutRaceInput
    subraces?: SubRaceCreateNestedManyWithoutRaceInput
  }

  export type RaceUncheckedCreateInput = {
    id: string
    name: string
    image?: string | null
    source: string
    version: string
    size: string
    speed?: RaceCreatespeedInput | string[]
    abilityBonuses?: RaceCreateabilityBonusesInput | string[]
    languages?: RaceCreatelanguagesInput | string[]
    darkvision?: string | null
    traits?: TraitUncheckedCreateNestedManyWithoutRaceInput
    subraces?: SubRaceUncheckedCreateNestedManyWithoutRaceInput
  }

  export type RaceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    speed?: RaceUpdatespeedInput | string[]
    abilityBonuses?: RaceUpdateabilityBonusesInput | string[]
    languages?: RaceUpdatelanguagesInput | string[]
    darkvision?: NullableStringFieldUpdateOperationsInput | string | null
    traits?: TraitUpdateManyWithoutRaceNestedInput
    subraces?: SubRaceUpdateManyWithoutRaceNestedInput
  }

  export type RaceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    speed?: RaceUpdatespeedInput | string[]
    abilityBonuses?: RaceUpdateabilityBonusesInput | string[]
    languages?: RaceUpdatelanguagesInput | string[]
    darkvision?: NullableStringFieldUpdateOperationsInput | string | null
    traits?: TraitUncheckedUpdateManyWithoutRaceNestedInput
    subraces?: SubRaceUncheckedUpdateManyWithoutRaceNestedInput
  }

  export type RaceCreateManyInput = {
    id: string
    name: string
    image?: string | null
    source: string
    version: string
    size: string
    speed?: RaceCreatespeedInput | string[]
    abilityBonuses?: RaceCreateabilityBonusesInput | string[]
    languages?: RaceCreatelanguagesInput | string[]
    darkvision?: string | null
  }

  export type RaceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    speed?: RaceUpdatespeedInput | string[]
    abilityBonuses?: RaceUpdateabilityBonusesInput | string[]
    languages?: RaceUpdatelanguagesInput | string[]
    darkvision?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RaceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    speed?: RaceUpdatespeedInput | string[]
    abilityBonuses?: RaceUpdateabilityBonusesInput | string[]
    languages?: RaceUpdatelanguagesInput | string[]
    darkvision?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TraitCreateInput = {
    name: string
    description: string
    race?: RaceCreateNestedOneWithoutTraitsInput
  }

  export type TraitUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    raceId?: string | null
  }

  export type TraitUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    race?: RaceUpdateOneWithoutTraitsNestedInput
  }

  export type TraitUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    raceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TraitCreateManyInput = {
    id?: number
    name: string
    description: string
    raceId?: string | null
  }

  export type TraitUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TraitUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    raceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubRaceCreateInput = {
    id: string
    name: string
    image?: string | null
    abilityBonuses?: string | null
    traits: JsonNullValueInput | InputJsonValue
    race?: RaceCreateNestedOneWithoutSubracesInput
  }

  export type SubRaceUncheckedCreateInput = {
    id: string
    name: string
    image?: string | null
    abilityBonuses?: string | null
    traits: JsonNullValueInput | InputJsonValue
    raceId?: string | null
  }

  export type SubRaceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    abilityBonuses?: NullableStringFieldUpdateOperationsInput | string | null
    traits?: JsonNullValueInput | InputJsonValue
    race?: RaceUpdateOneWithoutSubracesNestedInput
  }

  export type SubRaceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    abilityBonuses?: NullableStringFieldUpdateOperationsInput | string | null
    traits?: JsonNullValueInput | InputJsonValue
    raceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubRaceCreateManyInput = {
    id: string
    name: string
    image?: string | null
    abilityBonuses?: string | null
    traits: JsonNullValueInput | InputJsonValue
    raceId?: string | null
  }

  export type SubRaceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    abilityBonuses?: NullableStringFieldUpdateOperationsInput | string | null
    traits?: JsonNullValueInput | InputJsonValue
  }

  export type SubRaceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    abilityBonuses?: NullableStringFieldUpdateOperationsInput | string | null
    traits?: JsonNullValueInput | InputJsonValue
    raceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SpellCreateInput = {
    nameUa: string
    nameEn: string
    school: string
    level: number
    castingTime: string
    range: string
    components: string
    duration: string
    description: string
    damage?: NullableJsonNullValueInput | InputJsonValue
    classes?: ClassCreateNestedManyWithoutSpellsInput
  }

  export type SpellUncheckedCreateInput = {
    id?: number
    nameUa: string
    nameEn: string
    school: string
    level: number
    castingTime: string
    range: string
    components: string
    duration: string
    description: string
    damage?: NullableJsonNullValueInput | InputJsonValue
    classes?: ClassUncheckedCreateNestedManyWithoutSpellsInput
  }

  export type SpellUpdateInput = {
    nameUa?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    castingTime?: StringFieldUpdateOperationsInput | string
    range?: StringFieldUpdateOperationsInput | string
    components?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    damage?: NullableJsonNullValueInput | InputJsonValue
    classes?: ClassUpdateManyWithoutSpellsNestedInput
  }

  export type SpellUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nameUa?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    castingTime?: StringFieldUpdateOperationsInput | string
    range?: StringFieldUpdateOperationsInput | string
    components?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    damage?: NullableJsonNullValueInput | InputJsonValue
    classes?: ClassUncheckedUpdateManyWithoutSpellsNestedInput
  }

  export type SpellCreateManyInput = {
    id?: number
    nameUa: string
    nameEn: string
    school: string
    level: number
    castingTime: string
    range: string
    components: string
    duration: string
    description: string
    damage?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SpellUpdateManyMutationInput = {
    nameUa?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    castingTime?: StringFieldUpdateOperationsInput | string
    range?: StringFieldUpdateOperationsInput | string
    components?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    damage?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SpellUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nameUa?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    castingTime?: StringFieldUpdateOperationsInput | string
    range?: StringFieldUpdateOperationsInput | string
    components?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    damage?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SubclassCreateInput = {
    id: string
    nameEn: string
    nameUk: string
    description: string
    features: JsonNullValueInput | InputJsonValue
  }

  export type SubclassUncheckedCreateInput = {
    id: string
    nameEn: string
    nameUk: string
    description: string
    features: JsonNullValueInput | InputJsonValue
  }

  export type SubclassUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    nameUk?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    features?: JsonNullValueInput | InputJsonValue
  }

  export type SubclassUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    nameUk?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    features?: JsonNullValueInput | InputJsonValue
  }

  export type SubclassCreateManyInput = {
    id: string
    nameEn: string
    nameUk: string
    description: string
    features: JsonNullValueInput | InputJsonValue
  }

  export type SubclassUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    nameUk?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    features?: JsonNullValueInput | InputJsonValue
  }

  export type SubclassUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    nameUk?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    features?: JsonNullValueInput | InputJsonValue
  }

  export type MagicItemCreateInput = {
    name: string
    rarity: string
    type: string
    attunement: boolean
    description: string
    effects: JsonNullValueInput | InputJsonValue
  }

  export type MagicItemUncheckedCreateInput = {
    id?: number
    name: string
    rarity: string
    type: string
    attunement: boolean
    description: string
    effects: JsonNullValueInput | InputJsonValue
  }

  export type MagicItemUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    attunement?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    effects?: JsonNullValueInput | InputJsonValue
  }

  export type MagicItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    attunement?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    effects?: JsonNullValueInput | InputJsonValue
  }

  export type MagicItemCreateManyInput = {
    id?: number
    name: string
    rarity: string
    type: string
    attunement: boolean
    description: string
    effects: JsonNullValueInput | InputJsonValue
  }

  export type MagicItemUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    attunement?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    effects?: JsonNullValueInput | InputJsonValue
  }

  export type MagicItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    attunement?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    effects?: JsonNullValueInput | InputJsonValue
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BackgroundFeatureListRelationFilter = {
    every?: BackgroundFeatureWhereInput
    some?: BackgroundFeatureWhereInput
    none?: BackgroundFeatureWhereInput
  }

  export type BackgroundFeatureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BackgroundCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    skills?: SortOrder
    languages?: SortOrder
    equipment?: SortOrder
  }

  export type BackgroundAvgOrderByAggregateInput = {
    id?: SortOrder
    languages?: SortOrder
  }

  export type BackgroundMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    languages?: SortOrder
  }

  export type BackgroundMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    languages?: SortOrder
  }

  export type BackgroundSumOrderByAggregateInput = {
    id?: SortOrder
    languages?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BackgroundNullableScalarRelationFilter = {
    is?: BackgroundWhereInput | null
    isNot?: BackgroundWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BackgroundFeatureCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    backgroundId?: SortOrder
  }

  export type BackgroundFeatureAvgOrderByAggregateInput = {
    id?: SortOrder
    backgroundId?: SortOrder
  }

  export type BackgroundFeatureMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    backgroundId?: SortOrder
  }

  export type BackgroundFeatureMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    backgroundId?: SortOrder
  }

  export type BackgroundFeatureSumOrderByAggregateInput = {
    id?: SortOrder
    backgroundId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ClassLongNullableScalarRelationFilter = {
    is?: ClassLongWhereInput | null
    isNot?: ClassLongWhereInput | null
  }

  export type SpellListRelationFilter = {
    every?: SpellWhereInput
    some?: SpellWhereInput
    none?: SpellWhereInput
  }

  export type SpellOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
  }

  export type ClassMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
  }

  export type ClassMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ClassScalarRelationFilter = {
    is?: ClassWhereInput
    isNot?: ClassWhereInput
  }

  export type ClassLongCountOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    hitDice?: SortOrder
    image?: SortOrder
    primaryAbility?: SortOrder
    savingThrows?: SortOrder
    skillsChoose?: SortOrder
    skillsFrom?: SortOrder
    description?: SortOrder
    progression?: SortOrder
    features?: SortOrder
  }

  export type ClassLongAvgOrderByAggregateInput = {
    skillsChoose?: SortOrder
  }

  export type ClassLongMaxOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    hitDice?: SortOrder
    image?: SortOrder
    skillsChoose?: SortOrder
    description?: SortOrder
  }

  export type ClassLongMinOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    hitDice?: SortOrder
    image?: SortOrder
    skillsChoose?: SortOrder
    description?: SortOrder
  }

  export type ClassLongSumOrderByAggregateInput = {
    skillsChoose?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type TraitListRelationFilter = {
    every?: TraitWhereInput
    some?: TraitWhereInput
    none?: TraitWhereInput
  }

  export type SubRaceListRelationFilter = {
    every?: SubRaceWhereInput
    some?: SubRaceWhereInput
    none?: SubRaceWhereInput
  }

  export type TraitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubRaceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RaceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    source?: SortOrder
    version?: SortOrder
    size?: SortOrder
    speed?: SortOrder
    abilityBonuses?: SortOrder
    languages?: SortOrder
    darkvision?: SortOrder
  }

  export type RaceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    source?: SortOrder
    version?: SortOrder
    size?: SortOrder
    darkvision?: SortOrder
  }

  export type RaceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    source?: SortOrder
    version?: SortOrder
    size?: SortOrder
    darkvision?: SortOrder
  }

  export type RaceNullableScalarRelationFilter = {
    is?: RaceWhereInput | null
    isNot?: RaceWhereInput | null
  }

  export type TraitCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    raceId?: SortOrder
  }

  export type TraitAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TraitMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    raceId?: SortOrder
  }

  export type TraitMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    raceId?: SortOrder
  }

  export type TraitSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SubRaceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    abilityBonuses?: SortOrder
    traits?: SortOrder
    raceId?: SortOrder
  }

  export type SubRaceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    abilityBonuses?: SortOrder
    raceId?: SortOrder
  }

  export type SubRaceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    abilityBonuses?: SortOrder
    raceId?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ClassListRelationFilter = {
    every?: ClassWhereInput
    some?: ClassWhereInput
    none?: ClassWhereInput
  }

  export type ClassOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpellCountOrderByAggregateInput = {
    id?: SortOrder
    nameUa?: SortOrder
    nameEn?: SortOrder
    school?: SortOrder
    level?: SortOrder
    castingTime?: SortOrder
    range?: SortOrder
    components?: SortOrder
    duration?: SortOrder
    description?: SortOrder
    damage?: SortOrder
  }

  export type SpellAvgOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
  }

  export type SpellMaxOrderByAggregateInput = {
    id?: SortOrder
    nameUa?: SortOrder
    nameEn?: SortOrder
    school?: SortOrder
    level?: SortOrder
    castingTime?: SortOrder
    range?: SortOrder
    components?: SortOrder
    duration?: SortOrder
    description?: SortOrder
  }

  export type SpellMinOrderByAggregateInput = {
    id?: SortOrder
    nameUa?: SortOrder
    nameEn?: SortOrder
    school?: SortOrder
    level?: SortOrder
    castingTime?: SortOrder
    range?: SortOrder
    components?: SortOrder
    duration?: SortOrder
    description?: SortOrder
  }

  export type SpellSumOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type SubclassCountOrderByAggregateInput = {
    id?: SortOrder
    nameEn?: SortOrder
    nameUk?: SortOrder
    description?: SortOrder
    features?: SortOrder
  }

  export type SubclassMaxOrderByAggregateInput = {
    id?: SortOrder
    nameEn?: SortOrder
    nameUk?: SortOrder
    description?: SortOrder
  }

  export type SubclassMinOrderByAggregateInput = {
    id?: SortOrder
    nameEn?: SortOrder
    nameUk?: SortOrder
    description?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MagicItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rarity?: SortOrder
    type?: SortOrder
    attunement?: SortOrder
    description?: SortOrder
    effects?: SortOrder
  }

  export type MagicItemAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MagicItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rarity?: SortOrder
    type?: SortOrder
    attunement?: SortOrder
    description?: SortOrder
  }

  export type MagicItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rarity?: SortOrder
    type?: SortOrder
    attunement?: SortOrder
    description?: SortOrder
  }

  export type MagicItemSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BackgroundCreateskillsInput = {
    set: string[]
  }

  export type BackgroundCreateequipmentInput = {
    set: string[]
  }

  export type BackgroundFeatureCreateNestedManyWithoutBackgroundInput = {
    create?: XOR<BackgroundFeatureCreateWithoutBackgroundInput, BackgroundFeatureUncheckedCreateWithoutBackgroundInput> | BackgroundFeatureCreateWithoutBackgroundInput[] | BackgroundFeatureUncheckedCreateWithoutBackgroundInput[]
    connectOrCreate?: BackgroundFeatureCreateOrConnectWithoutBackgroundInput | BackgroundFeatureCreateOrConnectWithoutBackgroundInput[]
    createMany?: BackgroundFeatureCreateManyBackgroundInputEnvelope
    connect?: BackgroundFeatureWhereUniqueInput | BackgroundFeatureWhereUniqueInput[]
  }

  export type BackgroundFeatureUncheckedCreateNestedManyWithoutBackgroundInput = {
    create?: XOR<BackgroundFeatureCreateWithoutBackgroundInput, BackgroundFeatureUncheckedCreateWithoutBackgroundInput> | BackgroundFeatureCreateWithoutBackgroundInput[] | BackgroundFeatureUncheckedCreateWithoutBackgroundInput[]
    connectOrCreate?: BackgroundFeatureCreateOrConnectWithoutBackgroundInput | BackgroundFeatureCreateOrConnectWithoutBackgroundInput[]
    createMany?: BackgroundFeatureCreateManyBackgroundInputEnvelope
    connect?: BackgroundFeatureWhereUniqueInput | BackgroundFeatureWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BackgroundUpdateskillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BackgroundUpdateequipmentInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BackgroundFeatureUpdateManyWithoutBackgroundNestedInput = {
    create?: XOR<BackgroundFeatureCreateWithoutBackgroundInput, BackgroundFeatureUncheckedCreateWithoutBackgroundInput> | BackgroundFeatureCreateWithoutBackgroundInput[] | BackgroundFeatureUncheckedCreateWithoutBackgroundInput[]
    connectOrCreate?: BackgroundFeatureCreateOrConnectWithoutBackgroundInput | BackgroundFeatureCreateOrConnectWithoutBackgroundInput[]
    upsert?: BackgroundFeatureUpsertWithWhereUniqueWithoutBackgroundInput | BackgroundFeatureUpsertWithWhereUniqueWithoutBackgroundInput[]
    createMany?: BackgroundFeatureCreateManyBackgroundInputEnvelope
    set?: BackgroundFeatureWhereUniqueInput | BackgroundFeatureWhereUniqueInput[]
    disconnect?: BackgroundFeatureWhereUniqueInput | BackgroundFeatureWhereUniqueInput[]
    delete?: BackgroundFeatureWhereUniqueInput | BackgroundFeatureWhereUniqueInput[]
    connect?: BackgroundFeatureWhereUniqueInput | BackgroundFeatureWhereUniqueInput[]
    update?: BackgroundFeatureUpdateWithWhereUniqueWithoutBackgroundInput | BackgroundFeatureUpdateWithWhereUniqueWithoutBackgroundInput[]
    updateMany?: BackgroundFeatureUpdateManyWithWhereWithoutBackgroundInput | BackgroundFeatureUpdateManyWithWhereWithoutBackgroundInput[]
    deleteMany?: BackgroundFeatureScalarWhereInput | BackgroundFeatureScalarWhereInput[]
  }

  export type BackgroundFeatureUncheckedUpdateManyWithoutBackgroundNestedInput = {
    create?: XOR<BackgroundFeatureCreateWithoutBackgroundInput, BackgroundFeatureUncheckedCreateWithoutBackgroundInput> | BackgroundFeatureCreateWithoutBackgroundInput[] | BackgroundFeatureUncheckedCreateWithoutBackgroundInput[]
    connectOrCreate?: BackgroundFeatureCreateOrConnectWithoutBackgroundInput | BackgroundFeatureCreateOrConnectWithoutBackgroundInput[]
    upsert?: BackgroundFeatureUpsertWithWhereUniqueWithoutBackgroundInput | BackgroundFeatureUpsertWithWhereUniqueWithoutBackgroundInput[]
    createMany?: BackgroundFeatureCreateManyBackgroundInputEnvelope
    set?: BackgroundFeatureWhereUniqueInput | BackgroundFeatureWhereUniqueInput[]
    disconnect?: BackgroundFeatureWhereUniqueInput | BackgroundFeatureWhereUniqueInput[]
    delete?: BackgroundFeatureWhereUniqueInput | BackgroundFeatureWhereUniqueInput[]
    connect?: BackgroundFeatureWhereUniqueInput | BackgroundFeatureWhereUniqueInput[]
    update?: BackgroundFeatureUpdateWithWhereUniqueWithoutBackgroundInput | BackgroundFeatureUpdateWithWhereUniqueWithoutBackgroundInput[]
    updateMany?: BackgroundFeatureUpdateManyWithWhereWithoutBackgroundInput | BackgroundFeatureUpdateManyWithWhereWithoutBackgroundInput[]
    deleteMany?: BackgroundFeatureScalarWhereInput | BackgroundFeatureScalarWhereInput[]
  }

  export type BackgroundCreateNestedOneWithoutFeaturesInput = {
    create?: XOR<BackgroundCreateWithoutFeaturesInput, BackgroundUncheckedCreateWithoutFeaturesInput>
    connectOrCreate?: BackgroundCreateOrConnectWithoutFeaturesInput
    connect?: BackgroundWhereUniqueInput
  }

  export type BackgroundUpdateOneWithoutFeaturesNestedInput = {
    create?: XOR<BackgroundCreateWithoutFeaturesInput, BackgroundUncheckedCreateWithoutFeaturesInput>
    connectOrCreate?: BackgroundCreateOrConnectWithoutFeaturesInput
    upsert?: BackgroundUpsertWithoutFeaturesInput
    disconnect?: BackgroundWhereInput | boolean
    delete?: BackgroundWhereInput | boolean
    connect?: BackgroundWhereUniqueInput
    update?: XOR<XOR<BackgroundUpdateToOneWithWhereWithoutFeaturesInput, BackgroundUpdateWithoutFeaturesInput>, BackgroundUncheckedUpdateWithoutFeaturesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClassLongCreateNestedOneWithoutClassInput = {
    create?: XOR<ClassLongCreateWithoutClassInput, ClassLongUncheckedCreateWithoutClassInput>
    connectOrCreate?: ClassLongCreateOrConnectWithoutClassInput
    connect?: ClassLongWhereUniqueInput
  }

  export type SpellCreateNestedManyWithoutClassesInput = {
    create?: XOR<SpellCreateWithoutClassesInput, SpellUncheckedCreateWithoutClassesInput> | SpellCreateWithoutClassesInput[] | SpellUncheckedCreateWithoutClassesInput[]
    connectOrCreate?: SpellCreateOrConnectWithoutClassesInput | SpellCreateOrConnectWithoutClassesInput[]
    connect?: SpellWhereUniqueInput | SpellWhereUniqueInput[]
  }

  export type ClassLongUncheckedCreateNestedOneWithoutClassInput = {
    create?: XOR<ClassLongCreateWithoutClassInput, ClassLongUncheckedCreateWithoutClassInput>
    connectOrCreate?: ClassLongCreateOrConnectWithoutClassInput
    connect?: ClassLongWhereUniqueInput
  }

  export type SpellUncheckedCreateNestedManyWithoutClassesInput = {
    create?: XOR<SpellCreateWithoutClassesInput, SpellUncheckedCreateWithoutClassesInput> | SpellCreateWithoutClassesInput[] | SpellUncheckedCreateWithoutClassesInput[]
    connectOrCreate?: SpellCreateOrConnectWithoutClassesInput | SpellCreateOrConnectWithoutClassesInput[]
    connect?: SpellWhereUniqueInput | SpellWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ClassLongUpdateOneWithoutClassNestedInput = {
    create?: XOR<ClassLongCreateWithoutClassInput, ClassLongUncheckedCreateWithoutClassInput>
    connectOrCreate?: ClassLongCreateOrConnectWithoutClassInput
    upsert?: ClassLongUpsertWithoutClassInput
    disconnect?: ClassLongWhereInput | boolean
    delete?: ClassLongWhereInput | boolean
    connect?: ClassLongWhereUniqueInput
    update?: XOR<XOR<ClassLongUpdateToOneWithWhereWithoutClassInput, ClassLongUpdateWithoutClassInput>, ClassLongUncheckedUpdateWithoutClassInput>
  }

  export type SpellUpdateManyWithoutClassesNestedInput = {
    create?: XOR<SpellCreateWithoutClassesInput, SpellUncheckedCreateWithoutClassesInput> | SpellCreateWithoutClassesInput[] | SpellUncheckedCreateWithoutClassesInput[]
    connectOrCreate?: SpellCreateOrConnectWithoutClassesInput | SpellCreateOrConnectWithoutClassesInput[]
    upsert?: SpellUpsertWithWhereUniqueWithoutClassesInput | SpellUpsertWithWhereUniqueWithoutClassesInput[]
    set?: SpellWhereUniqueInput | SpellWhereUniqueInput[]
    disconnect?: SpellWhereUniqueInput | SpellWhereUniqueInput[]
    delete?: SpellWhereUniqueInput | SpellWhereUniqueInput[]
    connect?: SpellWhereUniqueInput | SpellWhereUniqueInput[]
    update?: SpellUpdateWithWhereUniqueWithoutClassesInput | SpellUpdateWithWhereUniqueWithoutClassesInput[]
    updateMany?: SpellUpdateManyWithWhereWithoutClassesInput | SpellUpdateManyWithWhereWithoutClassesInput[]
    deleteMany?: SpellScalarWhereInput | SpellScalarWhereInput[]
  }

  export type ClassLongUncheckedUpdateOneWithoutClassNestedInput = {
    create?: XOR<ClassLongCreateWithoutClassInput, ClassLongUncheckedCreateWithoutClassInput>
    connectOrCreate?: ClassLongCreateOrConnectWithoutClassInput
    upsert?: ClassLongUpsertWithoutClassInput
    disconnect?: ClassLongWhereInput | boolean
    delete?: ClassLongWhereInput | boolean
    connect?: ClassLongWhereUniqueInput
    update?: XOR<XOR<ClassLongUpdateToOneWithWhereWithoutClassInput, ClassLongUpdateWithoutClassInput>, ClassLongUncheckedUpdateWithoutClassInput>
  }

  export type SpellUncheckedUpdateManyWithoutClassesNestedInput = {
    create?: XOR<SpellCreateWithoutClassesInput, SpellUncheckedCreateWithoutClassesInput> | SpellCreateWithoutClassesInput[] | SpellUncheckedCreateWithoutClassesInput[]
    connectOrCreate?: SpellCreateOrConnectWithoutClassesInput | SpellCreateOrConnectWithoutClassesInput[]
    upsert?: SpellUpsertWithWhereUniqueWithoutClassesInput | SpellUpsertWithWhereUniqueWithoutClassesInput[]
    set?: SpellWhereUniqueInput | SpellWhereUniqueInput[]
    disconnect?: SpellWhereUniqueInput | SpellWhereUniqueInput[]
    delete?: SpellWhereUniqueInput | SpellWhereUniqueInput[]
    connect?: SpellWhereUniqueInput | SpellWhereUniqueInput[]
    update?: SpellUpdateWithWhereUniqueWithoutClassesInput | SpellUpdateWithWhereUniqueWithoutClassesInput[]
    updateMany?: SpellUpdateManyWithWhereWithoutClassesInput | SpellUpdateManyWithWhereWithoutClassesInput[]
    deleteMany?: SpellScalarWhereInput | SpellScalarWhereInput[]
  }

  export type ClassLongCreateprimaryAbilityInput = {
    set: string[]
  }

  export type ClassLongCreatesavingThrowsInput = {
    set: string[]
  }

  export type ClassLongCreateskillsFromInput = {
    set: string[]
  }

  export type ClassCreateNestedOneWithoutLongInput = {
    create?: XOR<ClassCreateWithoutLongInput, ClassUncheckedCreateWithoutLongInput>
    connectOrCreate?: ClassCreateOrConnectWithoutLongInput
    connect?: ClassWhereUniqueInput
  }

  export type ClassLongUpdateprimaryAbilityInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ClassLongUpdatesavingThrowsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ClassLongUpdateskillsFromInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ClassUpdateOneRequiredWithoutLongNestedInput = {
    create?: XOR<ClassCreateWithoutLongInput, ClassUncheckedCreateWithoutLongInput>
    connectOrCreate?: ClassCreateOrConnectWithoutLongInput
    upsert?: ClassUpsertWithoutLongInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutLongInput, ClassUpdateWithoutLongInput>, ClassUncheckedUpdateWithoutLongInput>
  }

  export type RaceCreatespeedInput = {
    set: string[]
  }

  export type RaceCreateabilityBonusesInput = {
    set: string[]
  }

  export type RaceCreatelanguagesInput = {
    set: string[]
  }

  export type TraitCreateNestedManyWithoutRaceInput = {
    create?: XOR<TraitCreateWithoutRaceInput, TraitUncheckedCreateWithoutRaceInput> | TraitCreateWithoutRaceInput[] | TraitUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: TraitCreateOrConnectWithoutRaceInput | TraitCreateOrConnectWithoutRaceInput[]
    createMany?: TraitCreateManyRaceInputEnvelope
    connect?: TraitWhereUniqueInput | TraitWhereUniqueInput[]
  }

  export type SubRaceCreateNestedManyWithoutRaceInput = {
    create?: XOR<SubRaceCreateWithoutRaceInput, SubRaceUncheckedCreateWithoutRaceInput> | SubRaceCreateWithoutRaceInput[] | SubRaceUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: SubRaceCreateOrConnectWithoutRaceInput | SubRaceCreateOrConnectWithoutRaceInput[]
    createMany?: SubRaceCreateManyRaceInputEnvelope
    connect?: SubRaceWhereUniqueInput | SubRaceWhereUniqueInput[]
  }

  export type TraitUncheckedCreateNestedManyWithoutRaceInput = {
    create?: XOR<TraitCreateWithoutRaceInput, TraitUncheckedCreateWithoutRaceInput> | TraitCreateWithoutRaceInput[] | TraitUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: TraitCreateOrConnectWithoutRaceInput | TraitCreateOrConnectWithoutRaceInput[]
    createMany?: TraitCreateManyRaceInputEnvelope
    connect?: TraitWhereUniqueInput | TraitWhereUniqueInput[]
  }

  export type SubRaceUncheckedCreateNestedManyWithoutRaceInput = {
    create?: XOR<SubRaceCreateWithoutRaceInput, SubRaceUncheckedCreateWithoutRaceInput> | SubRaceCreateWithoutRaceInput[] | SubRaceUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: SubRaceCreateOrConnectWithoutRaceInput | SubRaceCreateOrConnectWithoutRaceInput[]
    createMany?: SubRaceCreateManyRaceInputEnvelope
    connect?: SubRaceWhereUniqueInput | SubRaceWhereUniqueInput[]
  }

  export type RaceUpdatespeedInput = {
    set?: string[]
    push?: string | string[]
  }

  export type RaceUpdateabilityBonusesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type RaceUpdatelanguagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TraitUpdateManyWithoutRaceNestedInput = {
    create?: XOR<TraitCreateWithoutRaceInput, TraitUncheckedCreateWithoutRaceInput> | TraitCreateWithoutRaceInput[] | TraitUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: TraitCreateOrConnectWithoutRaceInput | TraitCreateOrConnectWithoutRaceInput[]
    upsert?: TraitUpsertWithWhereUniqueWithoutRaceInput | TraitUpsertWithWhereUniqueWithoutRaceInput[]
    createMany?: TraitCreateManyRaceInputEnvelope
    set?: TraitWhereUniqueInput | TraitWhereUniqueInput[]
    disconnect?: TraitWhereUniqueInput | TraitWhereUniqueInput[]
    delete?: TraitWhereUniqueInput | TraitWhereUniqueInput[]
    connect?: TraitWhereUniqueInput | TraitWhereUniqueInput[]
    update?: TraitUpdateWithWhereUniqueWithoutRaceInput | TraitUpdateWithWhereUniqueWithoutRaceInput[]
    updateMany?: TraitUpdateManyWithWhereWithoutRaceInput | TraitUpdateManyWithWhereWithoutRaceInput[]
    deleteMany?: TraitScalarWhereInput | TraitScalarWhereInput[]
  }

  export type SubRaceUpdateManyWithoutRaceNestedInput = {
    create?: XOR<SubRaceCreateWithoutRaceInput, SubRaceUncheckedCreateWithoutRaceInput> | SubRaceCreateWithoutRaceInput[] | SubRaceUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: SubRaceCreateOrConnectWithoutRaceInput | SubRaceCreateOrConnectWithoutRaceInput[]
    upsert?: SubRaceUpsertWithWhereUniqueWithoutRaceInput | SubRaceUpsertWithWhereUniqueWithoutRaceInput[]
    createMany?: SubRaceCreateManyRaceInputEnvelope
    set?: SubRaceWhereUniqueInput | SubRaceWhereUniqueInput[]
    disconnect?: SubRaceWhereUniqueInput | SubRaceWhereUniqueInput[]
    delete?: SubRaceWhereUniqueInput | SubRaceWhereUniqueInput[]
    connect?: SubRaceWhereUniqueInput | SubRaceWhereUniqueInput[]
    update?: SubRaceUpdateWithWhereUniqueWithoutRaceInput | SubRaceUpdateWithWhereUniqueWithoutRaceInput[]
    updateMany?: SubRaceUpdateManyWithWhereWithoutRaceInput | SubRaceUpdateManyWithWhereWithoutRaceInput[]
    deleteMany?: SubRaceScalarWhereInput | SubRaceScalarWhereInput[]
  }

  export type TraitUncheckedUpdateManyWithoutRaceNestedInput = {
    create?: XOR<TraitCreateWithoutRaceInput, TraitUncheckedCreateWithoutRaceInput> | TraitCreateWithoutRaceInput[] | TraitUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: TraitCreateOrConnectWithoutRaceInput | TraitCreateOrConnectWithoutRaceInput[]
    upsert?: TraitUpsertWithWhereUniqueWithoutRaceInput | TraitUpsertWithWhereUniqueWithoutRaceInput[]
    createMany?: TraitCreateManyRaceInputEnvelope
    set?: TraitWhereUniqueInput | TraitWhereUniqueInput[]
    disconnect?: TraitWhereUniqueInput | TraitWhereUniqueInput[]
    delete?: TraitWhereUniqueInput | TraitWhereUniqueInput[]
    connect?: TraitWhereUniqueInput | TraitWhereUniqueInput[]
    update?: TraitUpdateWithWhereUniqueWithoutRaceInput | TraitUpdateWithWhereUniqueWithoutRaceInput[]
    updateMany?: TraitUpdateManyWithWhereWithoutRaceInput | TraitUpdateManyWithWhereWithoutRaceInput[]
    deleteMany?: TraitScalarWhereInput | TraitScalarWhereInput[]
  }

  export type SubRaceUncheckedUpdateManyWithoutRaceNestedInput = {
    create?: XOR<SubRaceCreateWithoutRaceInput, SubRaceUncheckedCreateWithoutRaceInput> | SubRaceCreateWithoutRaceInput[] | SubRaceUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: SubRaceCreateOrConnectWithoutRaceInput | SubRaceCreateOrConnectWithoutRaceInput[]
    upsert?: SubRaceUpsertWithWhereUniqueWithoutRaceInput | SubRaceUpsertWithWhereUniqueWithoutRaceInput[]
    createMany?: SubRaceCreateManyRaceInputEnvelope
    set?: SubRaceWhereUniqueInput | SubRaceWhereUniqueInput[]
    disconnect?: SubRaceWhereUniqueInput | SubRaceWhereUniqueInput[]
    delete?: SubRaceWhereUniqueInput | SubRaceWhereUniqueInput[]
    connect?: SubRaceWhereUniqueInput | SubRaceWhereUniqueInput[]
    update?: SubRaceUpdateWithWhereUniqueWithoutRaceInput | SubRaceUpdateWithWhereUniqueWithoutRaceInput[]
    updateMany?: SubRaceUpdateManyWithWhereWithoutRaceInput | SubRaceUpdateManyWithWhereWithoutRaceInput[]
    deleteMany?: SubRaceScalarWhereInput | SubRaceScalarWhereInput[]
  }

  export type RaceCreateNestedOneWithoutTraitsInput = {
    create?: XOR<RaceCreateWithoutTraitsInput, RaceUncheckedCreateWithoutTraitsInput>
    connectOrCreate?: RaceCreateOrConnectWithoutTraitsInput
    connect?: RaceWhereUniqueInput
  }

  export type RaceUpdateOneWithoutTraitsNestedInput = {
    create?: XOR<RaceCreateWithoutTraitsInput, RaceUncheckedCreateWithoutTraitsInput>
    connectOrCreate?: RaceCreateOrConnectWithoutTraitsInput
    upsert?: RaceUpsertWithoutTraitsInput
    disconnect?: RaceWhereInput | boolean
    delete?: RaceWhereInput | boolean
    connect?: RaceWhereUniqueInput
    update?: XOR<XOR<RaceUpdateToOneWithWhereWithoutTraitsInput, RaceUpdateWithoutTraitsInput>, RaceUncheckedUpdateWithoutTraitsInput>
  }

  export type RaceCreateNestedOneWithoutSubracesInput = {
    create?: XOR<RaceCreateWithoutSubracesInput, RaceUncheckedCreateWithoutSubracesInput>
    connectOrCreate?: RaceCreateOrConnectWithoutSubracesInput
    connect?: RaceWhereUniqueInput
  }

  export type RaceUpdateOneWithoutSubracesNestedInput = {
    create?: XOR<RaceCreateWithoutSubracesInput, RaceUncheckedCreateWithoutSubracesInput>
    connectOrCreate?: RaceCreateOrConnectWithoutSubracesInput
    upsert?: RaceUpsertWithoutSubracesInput
    disconnect?: RaceWhereInput | boolean
    delete?: RaceWhereInput | boolean
    connect?: RaceWhereUniqueInput
    update?: XOR<XOR<RaceUpdateToOneWithWhereWithoutSubracesInput, RaceUpdateWithoutSubracesInput>, RaceUncheckedUpdateWithoutSubracesInput>
  }

  export type ClassCreateNestedManyWithoutSpellsInput = {
    create?: XOR<ClassCreateWithoutSpellsInput, ClassUncheckedCreateWithoutSpellsInput> | ClassCreateWithoutSpellsInput[] | ClassUncheckedCreateWithoutSpellsInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutSpellsInput | ClassCreateOrConnectWithoutSpellsInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type ClassUncheckedCreateNestedManyWithoutSpellsInput = {
    create?: XOR<ClassCreateWithoutSpellsInput, ClassUncheckedCreateWithoutSpellsInput> | ClassCreateWithoutSpellsInput[] | ClassUncheckedCreateWithoutSpellsInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutSpellsInput | ClassCreateOrConnectWithoutSpellsInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type ClassUpdateManyWithoutSpellsNestedInput = {
    create?: XOR<ClassCreateWithoutSpellsInput, ClassUncheckedCreateWithoutSpellsInput> | ClassCreateWithoutSpellsInput[] | ClassUncheckedCreateWithoutSpellsInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutSpellsInput | ClassCreateOrConnectWithoutSpellsInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutSpellsInput | ClassUpsertWithWhereUniqueWithoutSpellsInput[]
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutSpellsInput | ClassUpdateWithWhereUniqueWithoutSpellsInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutSpellsInput | ClassUpdateManyWithWhereWithoutSpellsInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type ClassUncheckedUpdateManyWithoutSpellsNestedInput = {
    create?: XOR<ClassCreateWithoutSpellsInput, ClassUncheckedCreateWithoutSpellsInput> | ClassCreateWithoutSpellsInput[] | ClassUncheckedCreateWithoutSpellsInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutSpellsInput | ClassCreateOrConnectWithoutSpellsInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutSpellsInput | ClassUpsertWithWhereUniqueWithoutSpellsInput[]
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutSpellsInput | ClassUpdateWithWhereUniqueWithoutSpellsInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutSpellsInput | ClassUpdateManyWithWhereWithoutSpellsInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BackgroundFeatureCreateWithoutBackgroundInput = {
    name: string
    description: string
  }

  export type BackgroundFeatureUncheckedCreateWithoutBackgroundInput = {
    id?: number
    name: string
    description: string
  }

  export type BackgroundFeatureCreateOrConnectWithoutBackgroundInput = {
    where: BackgroundFeatureWhereUniqueInput
    create: XOR<BackgroundFeatureCreateWithoutBackgroundInput, BackgroundFeatureUncheckedCreateWithoutBackgroundInput>
  }

  export type BackgroundFeatureCreateManyBackgroundInputEnvelope = {
    data: BackgroundFeatureCreateManyBackgroundInput | BackgroundFeatureCreateManyBackgroundInput[]
    skipDuplicates?: boolean
  }

  export type BackgroundFeatureUpsertWithWhereUniqueWithoutBackgroundInput = {
    where: BackgroundFeatureWhereUniqueInput
    update: XOR<BackgroundFeatureUpdateWithoutBackgroundInput, BackgroundFeatureUncheckedUpdateWithoutBackgroundInput>
    create: XOR<BackgroundFeatureCreateWithoutBackgroundInput, BackgroundFeatureUncheckedCreateWithoutBackgroundInput>
  }

  export type BackgroundFeatureUpdateWithWhereUniqueWithoutBackgroundInput = {
    where: BackgroundFeatureWhereUniqueInput
    data: XOR<BackgroundFeatureUpdateWithoutBackgroundInput, BackgroundFeatureUncheckedUpdateWithoutBackgroundInput>
  }

  export type BackgroundFeatureUpdateManyWithWhereWithoutBackgroundInput = {
    where: BackgroundFeatureScalarWhereInput
    data: XOR<BackgroundFeatureUpdateManyMutationInput, BackgroundFeatureUncheckedUpdateManyWithoutBackgroundInput>
  }

  export type BackgroundFeatureScalarWhereInput = {
    AND?: BackgroundFeatureScalarWhereInput | BackgroundFeatureScalarWhereInput[]
    OR?: BackgroundFeatureScalarWhereInput[]
    NOT?: BackgroundFeatureScalarWhereInput | BackgroundFeatureScalarWhereInput[]
    id?: IntFilter<"BackgroundFeature"> | number
    name?: StringFilter<"BackgroundFeature"> | string
    description?: StringFilter<"BackgroundFeature"> | string
    backgroundId?: IntNullableFilter<"BackgroundFeature"> | number | null
  }

  export type BackgroundCreateWithoutFeaturesInput = {
    name: string
    description: string
    skills?: BackgroundCreateskillsInput | string[]
    languages: number
    equipment?: BackgroundCreateequipmentInput | string[]
  }

  export type BackgroundUncheckedCreateWithoutFeaturesInput = {
    id?: number
    name: string
    description: string
    skills?: BackgroundCreateskillsInput | string[]
    languages: number
    equipment?: BackgroundCreateequipmentInput | string[]
  }

  export type BackgroundCreateOrConnectWithoutFeaturesInput = {
    where: BackgroundWhereUniqueInput
    create: XOR<BackgroundCreateWithoutFeaturesInput, BackgroundUncheckedCreateWithoutFeaturesInput>
  }

  export type BackgroundUpsertWithoutFeaturesInput = {
    update: XOR<BackgroundUpdateWithoutFeaturesInput, BackgroundUncheckedUpdateWithoutFeaturesInput>
    create: XOR<BackgroundCreateWithoutFeaturesInput, BackgroundUncheckedCreateWithoutFeaturesInput>
    where?: BackgroundWhereInput
  }

  export type BackgroundUpdateToOneWithWhereWithoutFeaturesInput = {
    where?: BackgroundWhereInput
    data: XOR<BackgroundUpdateWithoutFeaturesInput, BackgroundUncheckedUpdateWithoutFeaturesInput>
  }

  export type BackgroundUpdateWithoutFeaturesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    skills?: BackgroundUpdateskillsInput | string[]
    languages?: IntFieldUpdateOperationsInput | number
    equipment?: BackgroundUpdateequipmentInput | string[]
  }

  export type BackgroundUncheckedUpdateWithoutFeaturesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    skills?: BackgroundUpdateskillsInput | string[]
    languages?: IntFieldUpdateOperationsInput | number
    equipment?: BackgroundUpdateequipmentInput | string[]
  }

  export type ClassLongCreateWithoutClassInput = {
    source: string
    hitDice: string
    image?: string | null
    primaryAbility?: ClassLongCreateprimaryAbilityInput | string[]
    savingThrows?: ClassLongCreatesavingThrowsInput | string[]
    skillsChoose: number
    skillsFrom?: ClassLongCreateskillsFromInput | string[]
    description: string
    progression: JsonNullValueInput | InputJsonValue
    features: JsonNullValueInput | InputJsonValue
  }

  export type ClassLongUncheckedCreateWithoutClassInput = {
    source: string
    hitDice: string
    image?: string | null
    primaryAbility?: ClassLongCreateprimaryAbilityInput | string[]
    savingThrows?: ClassLongCreatesavingThrowsInput | string[]
    skillsChoose: number
    skillsFrom?: ClassLongCreateskillsFromInput | string[]
    description: string
    progression: JsonNullValueInput | InputJsonValue
    features: JsonNullValueInput | InputJsonValue
  }

  export type ClassLongCreateOrConnectWithoutClassInput = {
    where: ClassLongWhereUniqueInput
    create: XOR<ClassLongCreateWithoutClassInput, ClassLongUncheckedCreateWithoutClassInput>
  }

  export type SpellCreateWithoutClassesInput = {
    nameUa: string
    nameEn: string
    school: string
    level: number
    castingTime: string
    range: string
    components: string
    duration: string
    description: string
    damage?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SpellUncheckedCreateWithoutClassesInput = {
    id?: number
    nameUa: string
    nameEn: string
    school: string
    level: number
    castingTime: string
    range: string
    components: string
    duration: string
    description: string
    damage?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SpellCreateOrConnectWithoutClassesInput = {
    where: SpellWhereUniqueInput
    create: XOR<SpellCreateWithoutClassesInput, SpellUncheckedCreateWithoutClassesInput>
  }

  export type ClassLongUpsertWithoutClassInput = {
    update: XOR<ClassLongUpdateWithoutClassInput, ClassLongUncheckedUpdateWithoutClassInput>
    create: XOR<ClassLongCreateWithoutClassInput, ClassLongUncheckedCreateWithoutClassInput>
    where?: ClassLongWhereInput
  }

  export type ClassLongUpdateToOneWithWhereWithoutClassInput = {
    where?: ClassLongWhereInput
    data: XOR<ClassLongUpdateWithoutClassInput, ClassLongUncheckedUpdateWithoutClassInput>
  }

  export type ClassLongUpdateWithoutClassInput = {
    source?: StringFieldUpdateOperationsInput | string
    hitDice?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    primaryAbility?: ClassLongUpdateprimaryAbilityInput | string[]
    savingThrows?: ClassLongUpdatesavingThrowsInput | string[]
    skillsChoose?: IntFieldUpdateOperationsInput | number
    skillsFrom?: ClassLongUpdateskillsFromInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    progression?: JsonNullValueInput | InputJsonValue
    features?: JsonNullValueInput | InputJsonValue
  }

  export type ClassLongUncheckedUpdateWithoutClassInput = {
    source?: StringFieldUpdateOperationsInput | string
    hitDice?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    primaryAbility?: ClassLongUpdateprimaryAbilityInput | string[]
    savingThrows?: ClassLongUpdatesavingThrowsInput | string[]
    skillsChoose?: IntFieldUpdateOperationsInput | number
    skillsFrom?: ClassLongUpdateskillsFromInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    progression?: JsonNullValueInput | InputJsonValue
    features?: JsonNullValueInput | InputJsonValue
  }

  export type SpellUpsertWithWhereUniqueWithoutClassesInput = {
    where: SpellWhereUniqueInput
    update: XOR<SpellUpdateWithoutClassesInput, SpellUncheckedUpdateWithoutClassesInput>
    create: XOR<SpellCreateWithoutClassesInput, SpellUncheckedCreateWithoutClassesInput>
  }

  export type SpellUpdateWithWhereUniqueWithoutClassesInput = {
    where: SpellWhereUniqueInput
    data: XOR<SpellUpdateWithoutClassesInput, SpellUncheckedUpdateWithoutClassesInput>
  }

  export type SpellUpdateManyWithWhereWithoutClassesInput = {
    where: SpellScalarWhereInput
    data: XOR<SpellUpdateManyMutationInput, SpellUncheckedUpdateManyWithoutClassesInput>
  }

  export type SpellScalarWhereInput = {
    AND?: SpellScalarWhereInput | SpellScalarWhereInput[]
    OR?: SpellScalarWhereInput[]
    NOT?: SpellScalarWhereInput | SpellScalarWhereInput[]
    id?: IntFilter<"Spell"> | number
    nameUa?: StringFilter<"Spell"> | string
    nameEn?: StringFilter<"Spell"> | string
    school?: StringFilter<"Spell"> | string
    level?: IntFilter<"Spell"> | number
    castingTime?: StringFilter<"Spell"> | string
    range?: StringFilter<"Spell"> | string
    components?: StringFilter<"Spell"> | string
    duration?: StringFilter<"Spell"> | string
    description?: StringFilter<"Spell"> | string
    damage?: JsonNullableFilter<"Spell">
  }

  export type ClassCreateWithoutLongInput = {
    id: string
    name: string
    description: string
    image?: string | null
    spells?: SpellCreateNestedManyWithoutClassesInput
  }

  export type ClassUncheckedCreateWithoutLongInput = {
    id: string
    name: string
    description: string
    image?: string | null
    spells?: SpellUncheckedCreateNestedManyWithoutClassesInput
  }

  export type ClassCreateOrConnectWithoutLongInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutLongInput, ClassUncheckedCreateWithoutLongInput>
  }

  export type ClassUpsertWithoutLongInput = {
    update: XOR<ClassUpdateWithoutLongInput, ClassUncheckedUpdateWithoutLongInput>
    create: XOR<ClassCreateWithoutLongInput, ClassUncheckedCreateWithoutLongInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutLongInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutLongInput, ClassUncheckedUpdateWithoutLongInput>
  }

  export type ClassUpdateWithoutLongInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    spells?: SpellUpdateManyWithoutClassesNestedInput
  }

  export type ClassUncheckedUpdateWithoutLongInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    spells?: SpellUncheckedUpdateManyWithoutClassesNestedInput
  }

  export type TraitCreateWithoutRaceInput = {
    name: string
    description: string
  }

  export type TraitUncheckedCreateWithoutRaceInput = {
    id?: number
    name: string
    description: string
  }

  export type TraitCreateOrConnectWithoutRaceInput = {
    where: TraitWhereUniqueInput
    create: XOR<TraitCreateWithoutRaceInput, TraitUncheckedCreateWithoutRaceInput>
  }

  export type TraitCreateManyRaceInputEnvelope = {
    data: TraitCreateManyRaceInput | TraitCreateManyRaceInput[]
    skipDuplicates?: boolean
  }

  export type SubRaceCreateWithoutRaceInput = {
    id: string
    name: string
    image?: string | null
    abilityBonuses?: string | null
    traits: JsonNullValueInput | InputJsonValue
  }

  export type SubRaceUncheckedCreateWithoutRaceInput = {
    id: string
    name: string
    image?: string | null
    abilityBonuses?: string | null
    traits: JsonNullValueInput | InputJsonValue
  }

  export type SubRaceCreateOrConnectWithoutRaceInput = {
    where: SubRaceWhereUniqueInput
    create: XOR<SubRaceCreateWithoutRaceInput, SubRaceUncheckedCreateWithoutRaceInput>
  }

  export type SubRaceCreateManyRaceInputEnvelope = {
    data: SubRaceCreateManyRaceInput | SubRaceCreateManyRaceInput[]
    skipDuplicates?: boolean
  }

  export type TraitUpsertWithWhereUniqueWithoutRaceInput = {
    where: TraitWhereUniqueInput
    update: XOR<TraitUpdateWithoutRaceInput, TraitUncheckedUpdateWithoutRaceInput>
    create: XOR<TraitCreateWithoutRaceInput, TraitUncheckedCreateWithoutRaceInput>
  }

  export type TraitUpdateWithWhereUniqueWithoutRaceInput = {
    where: TraitWhereUniqueInput
    data: XOR<TraitUpdateWithoutRaceInput, TraitUncheckedUpdateWithoutRaceInput>
  }

  export type TraitUpdateManyWithWhereWithoutRaceInput = {
    where: TraitScalarWhereInput
    data: XOR<TraitUpdateManyMutationInput, TraitUncheckedUpdateManyWithoutRaceInput>
  }

  export type TraitScalarWhereInput = {
    AND?: TraitScalarWhereInput | TraitScalarWhereInput[]
    OR?: TraitScalarWhereInput[]
    NOT?: TraitScalarWhereInput | TraitScalarWhereInput[]
    id?: IntFilter<"Trait"> | number
    name?: StringFilter<"Trait"> | string
    description?: StringFilter<"Trait"> | string
    raceId?: StringNullableFilter<"Trait"> | string | null
  }

  export type SubRaceUpsertWithWhereUniqueWithoutRaceInput = {
    where: SubRaceWhereUniqueInput
    update: XOR<SubRaceUpdateWithoutRaceInput, SubRaceUncheckedUpdateWithoutRaceInput>
    create: XOR<SubRaceCreateWithoutRaceInput, SubRaceUncheckedCreateWithoutRaceInput>
  }

  export type SubRaceUpdateWithWhereUniqueWithoutRaceInput = {
    where: SubRaceWhereUniqueInput
    data: XOR<SubRaceUpdateWithoutRaceInput, SubRaceUncheckedUpdateWithoutRaceInput>
  }

  export type SubRaceUpdateManyWithWhereWithoutRaceInput = {
    where: SubRaceScalarWhereInput
    data: XOR<SubRaceUpdateManyMutationInput, SubRaceUncheckedUpdateManyWithoutRaceInput>
  }

  export type SubRaceScalarWhereInput = {
    AND?: SubRaceScalarWhereInput | SubRaceScalarWhereInput[]
    OR?: SubRaceScalarWhereInput[]
    NOT?: SubRaceScalarWhereInput | SubRaceScalarWhereInput[]
    id?: StringFilter<"SubRace"> | string
    name?: StringFilter<"SubRace"> | string
    image?: StringNullableFilter<"SubRace"> | string | null
    abilityBonuses?: StringNullableFilter<"SubRace"> | string | null
    traits?: JsonFilter<"SubRace">
    raceId?: StringNullableFilter<"SubRace"> | string | null
  }

  export type RaceCreateWithoutTraitsInput = {
    id: string
    name: string
    image?: string | null
    source: string
    version: string
    size: string
    speed?: RaceCreatespeedInput | string[]
    abilityBonuses?: RaceCreateabilityBonusesInput | string[]
    languages?: RaceCreatelanguagesInput | string[]
    darkvision?: string | null
    subraces?: SubRaceCreateNestedManyWithoutRaceInput
  }

  export type RaceUncheckedCreateWithoutTraitsInput = {
    id: string
    name: string
    image?: string | null
    source: string
    version: string
    size: string
    speed?: RaceCreatespeedInput | string[]
    abilityBonuses?: RaceCreateabilityBonusesInput | string[]
    languages?: RaceCreatelanguagesInput | string[]
    darkvision?: string | null
    subraces?: SubRaceUncheckedCreateNestedManyWithoutRaceInput
  }

  export type RaceCreateOrConnectWithoutTraitsInput = {
    where: RaceWhereUniqueInput
    create: XOR<RaceCreateWithoutTraitsInput, RaceUncheckedCreateWithoutTraitsInput>
  }

  export type RaceUpsertWithoutTraitsInput = {
    update: XOR<RaceUpdateWithoutTraitsInput, RaceUncheckedUpdateWithoutTraitsInput>
    create: XOR<RaceCreateWithoutTraitsInput, RaceUncheckedCreateWithoutTraitsInput>
    where?: RaceWhereInput
  }

  export type RaceUpdateToOneWithWhereWithoutTraitsInput = {
    where?: RaceWhereInput
    data: XOR<RaceUpdateWithoutTraitsInput, RaceUncheckedUpdateWithoutTraitsInput>
  }

  export type RaceUpdateWithoutTraitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    speed?: RaceUpdatespeedInput | string[]
    abilityBonuses?: RaceUpdateabilityBonusesInput | string[]
    languages?: RaceUpdatelanguagesInput | string[]
    darkvision?: NullableStringFieldUpdateOperationsInput | string | null
    subraces?: SubRaceUpdateManyWithoutRaceNestedInput
  }

  export type RaceUncheckedUpdateWithoutTraitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    speed?: RaceUpdatespeedInput | string[]
    abilityBonuses?: RaceUpdateabilityBonusesInput | string[]
    languages?: RaceUpdatelanguagesInput | string[]
    darkvision?: NullableStringFieldUpdateOperationsInput | string | null
    subraces?: SubRaceUncheckedUpdateManyWithoutRaceNestedInput
  }

  export type RaceCreateWithoutSubracesInput = {
    id: string
    name: string
    image?: string | null
    source: string
    version: string
    size: string
    speed?: RaceCreatespeedInput | string[]
    abilityBonuses?: RaceCreateabilityBonusesInput | string[]
    languages?: RaceCreatelanguagesInput | string[]
    darkvision?: string | null
    traits?: TraitCreateNestedManyWithoutRaceInput
  }

  export type RaceUncheckedCreateWithoutSubracesInput = {
    id: string
    name: string
    image?: string | null
    source: string
    version: string
    size: string
    speed?: RaceCreatespeedInput | string[]
    abilityBonuses?: RaceCreateabilityBonusesInput | string[]
    languages?: RaceCreatelanguagesInput | string[]
    darkvision?: string | null
    traits?: TraitUncheckedCreateNestedManyWithoutRaceInput
  }

  export type RaceCreateOrConnectWithoutSubracesInput = {
    where: RaceWhereUniqueInput
    create: XOR<RaceCreateWithoutSubracesInput, RaceUncheckedCreateWithoutSubracesInput>
  }

  export type RaceUpsertWithoutSubracesInput = {
    update: XOR<RaceUpdateWithoutSubracesInput, RaceUncheckedUpdateWithoutSubracesInput>
    create: XOR<RaceCreateWithoutSubracesInput, RaceUncheckedCreateWithoutSubracesInput>
    where?: RaceWhereInput
  }

  export type RaceUpdateToOneWithWhereWithoutSubracesInput = {
    where?: RaceWhereInput
    data: XOR<RaceUpdateWithoutSubracesInput, RaceUncheckedUpdateWithoutSubracesInput>
  }

  export type RaceUpdateWithoutSubracesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    speed?: RaceUpdatespeedInput | string[]
    abilityBonuses?: RaceUpdateabilityBonusesInput | string[]
    languages?: RaceUpdatelanguagesInput | string[]
    darkvision?: NullableStringFieldUpdateOperationsInput | string | null
    traits?: TraitUpdateManyWithoutRaceNestedInput
  }

  export type RaceUncheckedUpdateWithoutSubracesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    speed?: RaceUpdatespeedInput | string[]
    abilityBonuses?: RaceUpdateabilityBonusesInput | string[]
    languages?: RaceUpdatelanguagesInput | string[]
    darkvision?: NullableStringFieldUpdateOperationsInput | string | null
    traits?: TraitUncheckedUpdateManyWithoutRaceNestedInput
  }

  export type ClassCreateWithoutSpellsInput = {
    id: string
    name: string
    description: string
    image?: string | null
    long?: ClassLongCreateNestedOneWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutSpellsInput = {
    id: string
    name: string
    description: string
    image?: string | null
    long?: ClassLongUncheckedCreateNestedOneWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutSpellsInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutSpellsInput, ClassUncheckedCreateWithoutSpellsInput>
  }

  export type ClassUpsertWithWhereUniqueWithoutSpellsInput = {
    where: ClassWhereUniqueInput
    update: XOR<ClassUpdateWithoutSpellsInput, ClassUncheckedUpdateWithoutSpellsInput>
    create: XOR<ClassCreateWithoutSpellsInput, ClassUncheckedCreateWithoutSpellsInput>
  }

  export type ClassUpdateWithWhereUniqueWithoutSpellsInput = {
    where: ClassWhereUniqueInput
    data: XOR<ClassUpdateWithoutSpellsInput, ClassUncheckedUpdateWithoutSpellsInput>
  }

  export type ClassUpdateManyWithWhereWithoutSpellsInput = {
    where: ClassScalarWhereInput
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyWithoutSpellsInput>
  }

  export type ClassScalarWhereInput = {
    AND?: ClassScalarWhereInput | ClassScalarWhereInput[]
    OR?: ClassScalarWhereInput[]
    NOT?: ClassScalarWhereInput | ClassScalarWhereInput[]
    id?: StringFilter<"Class"> | string
    name?: StringFilter<"Class"> | string
    description?: StringFilter<"Class"> | string
    image?: StringNullableFilter<"Class"> | string | null
  }

  export type BackgroundFeatureCreateManyBackgroundInput = {
    id?: number
    name: string
    description: string
  }

  export type BackgroundFeatureUpdateWithoutBackgroundInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type BackgroundFeatureUncheckedUpdateWithoutBackgroundInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type BackgroundFeatureUncheckedUpdateManyWithoutBackgroundInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type SpellUpdateWithoutClassesInput = {
    nameUa?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    castingTime?: StringFieldUpdateOperationsInput | string
    range?: StringFieldUpdateOperationsInput | string
    components?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    damage?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SpellUncheckedUpdateWithoutClassesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nameUa?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    castingTime?: StringFieldUpdateOperationsInput | string
    range?: StringFieldUpdateOperationsInput | string
    components?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    damage?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SpellUncheckedUpdateManyWithoutClassesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nameUa?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    castingTime?: StringFieldUpdateOperationsInput | string
    range?: StringFieldUpdateOperationsInput | string
    components?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    damage?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TraitCreateManyRaceInput = {
    id?: number
    name: string
    description: string
  }

  export type SubRaceCreateManyRaceInput = {
    id: string
    name: string
    image?: string | null
    abilityBonuses?: string | null
    traits: JsonNullValueInput | InputJsonValue
  }

  export type TraitUpdateWithoutRaceInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TraitUncheckedUpdateWithoutRaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TraitUncheckedUpdateManyWithoutRaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type SubRaceUpdateWithoutRaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    abilityBonuses?: NullableStringFieldUpdateOperationsInput | string | null
    traits?: JsonNullValueInput | InputJsonValue
  }

  export type SubRaceUncheckedUpdateWithoutRaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    abilityBonuses?: NullableStringFieldUpdateOperationsInput | string | null
    traits?: JsonNullValueInput | InputJsonValue
  }

  export type SubRaceUncheckedUpdateManyWithoutRaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    abilityBonuses?: NullableStringFieldUpdateOperationsInput | string | null
    traits?: JsonNullValueInput | InputJsonValue
  }

  export type ClassUpdateWithoutSpellsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    long?: ClassLongUpdateOneWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutSpellsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    long?: ClassLongUncheckedUpdateOneWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateManyWithoutSpellsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}