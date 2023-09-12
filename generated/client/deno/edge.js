const exports = {}
Object.defineProperty(exports, "__esModule", { value: true });

import {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  defineDmmfProperty,
  Public,
} from '.././runtime/edge-esm.js'

const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.16.2
 * Query Engine version: 4bc8b6e1b66cb932731fb1bdbbc550d1e010de81
 */
Prisma.prismaVersion = {
  client: "4.16.2",
  engine: "4bc8b6e1b66cb932731fb1bdbbc550d1e010de81"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};


exports.Prisma.ModelName = {
  User: 'User'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/rafaeltiburcio/dev/tests/deno/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin",
        "native": true
      }
    ],
    "previewFeatures": [
      "deno"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "4.16.2",
  "engineVersion": "4bc8b6e1b66cb932731fb1bdbbc550d1e010de81",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "dataProxy": true,
  "postinstall": false
}
config.dirname = '/'

const compressedDMMF = 'N4IgJghgLhC2D2YCmAbEAuUSB2BXWAzhgNoC6ANCAsikesaNnEhiAKoFIBOIlYARgDlmrXJy5FKAMwCWqMHQYgmsFuhAywvEAGsZ2LeoIBjCCgg9KMggBlrUDFLOcrBAEpIAjrhlckhqC5cJFc2bBlvNSdaEI0CAEkAoNjrDwgwAHlsFABPR2dYgAsIAgARJCdcFCgANTNgjEDgyigcgAc1EABlQP0Ac21kSuqMRhF1XB8tSgs+xVIAX1cAcRxuaH98mNC2yCh/AEEHdGjOJbHVVhUWSj0DVhMzC21rOwJj05T3Lx8/JOa4mEIg0TgVXIkti44mlMtk8qDtiBimUKhAqrV6lEwSBWh1WD0uP0XgRVth1vtDJ8dntDh8CudlOMQEhYBAZGhbvpDCBHuZLHE3nTEakfr5Nugml8gZFGslwZTsSL0llcpCiiVysMMSgQVSce1OgSiSs1lwNgrhQQ2LtzUc1Qzrqw2iUCAB3eBcaa6LkPUx84mCtWuDzeMX/KXhGUIqHWCHRr4wlXwvXIzVo6p1HVYxG4w29bADE1ks0UoOAm0Uu3xhYUEBtQmsrg5ADSSHheBQKEouEjwQAYnIUAoSLWe8CkPEDEgAB5IeZF8niz41loG+ZLHnGQosiCjDTYNq4KAZfgAKyQxigABU13v69ZWSQLp0ONwAOrbvyTw8OSiqGB7gQ8C4FwxgvuIIAbsY8DYO8Zr6FAdCgKy06CPgA7yHQHZdlQ+hobAGFDlhVQoBusiYU+jKXOoByCKUxIhr8S6KgQaGdhA/AoNmMYHkeN4dIooC5qwr5cB+3ATrxv5UXOzpgU6hIEI+lAoPAphQDIMGsPoP4nuel78XOAb2Pa5BCQaIniOJX5Sdo1wEHJnT3kpu4qWp0Cadg2lSXpF7XreriBhKyQ1g6TIZG4DGin8ZbWGx5icdxKRSYZgn6ni6iidZkk/nZzAORA8nqM5ykgKp6med5ulnn5qXGe8srBKFZkyawggZFeUWhjF8auPFHFcbFKW3vQ5kZewVmfjlR55aoBVFXWimleVHlaeoOlHr5BkBQKJnVi1wmZZNEnfjNlD2Y5CkPq5ZXuRpa37tV+n+QJ9XHJKzXPtpXoit1zGWv1iVDT+dWjeleaEgWA7VNws2yYVTlLTdK33V560+TV22vYFe3LgdFnqEaBbaCjlVGH6zw4w11aLC1jrqI6wbRf9MasSRA1JVYw2vWDh3dPmfTQ/s/IXQjV0uSTd1k49m2Yy9RlU0KZz4+NROFrdFUPbylO7dTy60196g7uyXVMRarOA4NvUy/LaV82rQuw+d+WXcVSOS5raM21tttvaZY0Q8aGurV72v8q8uP0gbrXFS67qeqbYaxWz7FA9bG2+7zBP85DgvssLcPzYj10eyHVWy89dWK/74P4gLpeo76Tzh7YkcxKF0f0xN3AZJ63AAEI5G+MhQIUHjmKjp3SdBsGBGy2CIXuKH4YRw7oAAjH+eHoYOa8AAxkbvaVd5oic9XqcXs2nF/c0ZWeqx6x59yLLti27JduZ7rA4PgVe60rSBPox1akzP65sviW05jbUGSh7aP17sgF+c1XaLQ/sHRuRs8CwD/hHPWUcwrUWZKyE2oCzbJ0gcDPiI1YHZy6PA5+hcUElWRlLB6P9sE7VwQAoBXdnQEDdB6H63wwHkKvlbG+INqEB3xPQxBjC36oIlp/MumDf6cNbng9uixO5MiylNaUwQp7aH/LuTAPJgKgXArDKCME4Lz0XmY5eO8KIby3tgFeR8MDr0Pi4pQJ8hGMSTunFOCVxGKlvnbWh9dlEYM3M3P2NMCGdGNhyaEzNwF9TEVAjOMDpGE2ieg6WYcEn6x4bo8QCCB5DxHoUA4fQ+h+D6CHIxlAZ52IQkhKgEBULOKIl4txHiXEH2kJ4sG/iz4swgVkyhmcaEPy4E/ORztkEKOYQ3aW7CcEaO4TowhjM0kiOCRQ9OETKJwIWZUpB8MFprJiRsrBWygqlLpkyFJEyMlxGORIqhPM5mGlkU7GSRdxbLVYV7TZ6inn4JeYQvhAiE6kKCRfEJHMZm5NroTAFVzgXvyUYUthDzIVtzOLszoAB9aCPZpK/TIUc6ZJzJG/Lyd3LgABhYCC9LmDzqQ0pATT9gtKBUw92dyHoZx9o84lgDSWsDJShd5ojU5hOFKc++ViuAAFlulcpyDyxpGxBWixuSK/FXtxVy0lZoklSTZWwH0AqulSrsmqr+ZZbgGr9A6r1Xyg1tllnXOLni0mYqMaVyJVa6VZTCGiS6BTMSU1h6j29fyucgqTGAQsQtUSkFWm2Lnh0pe3TBl9PQNhAZvS17YR8SWvxTJaL0URefFiXzwmMrvq6o63BY3N2yom2p9T9X7ASH6oVqyTXBrNaG2q4buEq3Vd2vkvaanJo2MO3K/qcWKNBV/dGT1p3Y3/o1SNMLOgRQdciltKq22RPGjGuNS6k0Dp9UOw1r9jVoIneXY8FqZ1HqjZ0dqnVG2TMyU6tFUiMUsoXRYB9/beUprXWdUd76g1gq/RK39+1mV3p7Qm5dT6EOvpWSh7dKjvY/oPVwv9Mr1oBPSYq0Jzrr1nKibnPtK6h2O2xcKj9aHd0V33QrQ9WHINq3WVrONJToWGxAQc2lF76XfNmcytW7GCOrq4/IkjLCd3kbDZR7ZNd7YFM/eTeJ1dEknu/sQ1JNKkXNsU62n57aVMCzU/BjT+dAVGsDaR2J5r9NCaoyJ4zudxOh0kxZ55Mm4Xxzo4chTYGGXOZvYHAs7nB1zk0xunjqHdMBcE5IYTeNXNhdFRF8zxX8E0ZZayvwvr10gDafmhenSnEEVGWW3C7iK3EU7NWtetbCGn2Ax8y+SWlPotC0HUzcT/RRek8A/ZdmeqSlA4x8DTLRMmb43NnWwXovALeaNo963UXJeU9tsrpqm7zaq1om1sd+FxYdWtz5jmr0pZY6rHbunikLYezV0SYQtwXh0P4OrSAGtIea/BVrhaekdZcV1u1PWkclqrSM3xMmRtyfswDD7PFmNqrrtd2b/37vWqswzEQJ3goAnGxti7U3WMzd2xTg7i2u7Hbx6tuU72JtOcu9N4m5Xbv7cM5ZmLcdBGvf54z87k2IMi/VuTyLlPI1A/ENaGkgrYf2La0W3rGAUfb3R5WkiA3j5MlxytkDAumdK62yr8L4uW5QvbnO0n/RV4642BkDoJZPKIekj5kFOmyMFaxkFyXh2u7LeEfJhzgvPvC9Z6Lm7Zm7uc896Vn3u8/f7AD+SYPRGA3h9d/x79gWis56pzJnnduxsouvkLlnP2yfs/V3XwBXv8m519xWJAxeg+2LL5u25me9OFakw96ndYZcIt5/bhXrfU/t7S6rrvlWe8MhV4PmkI+Q4h6075iP/mp3R9r7H6rj2WUg+3MYcHYBC/TWnnmuHDjkJG/N31nCqPi0Ld+ssca0cd4sk8CcU8icvsSd+82c/tu8b9c8rt895BX8j9UYT8csx1eN8tL9fYAd68ltadl9m9L1oC08O94CyMOckDlY88oYC8h8MDS8R0w9cU/NpYo8CCNd/1rM2RbNE98cLZCdkpicO0c5qDYlaCPd6CUDGC0DmDA9j9x9ctOCQ090r9Z8iDeFF9wDhCpkoCxCYCJCxMxcs8JdZDe8GC85FDD9lDMDVCcC8tI98DLUdk+DO02V6t9gtVsAcg9cP8DcEdAC/9y1f8TdLcQDBswDz1k9Hc29ld08t8ECd86Dj0ZME9Ak+cGcW9lUKCN9vcM81c0irDPCiEBC5dcjyDjDKDN9K89t3cpVyjYtZc6c3tV98jajCi4Dijt9s90iO479gch8/CcgNUjxmkR19cC1HEf9V4wjutQjIjgCQByJQDgFbchCm1ICEj18kiqC+jUiBiyi+9JCFChx0CHDWDGt2Ct1z8uC3DMM48mQsj6NHU9iCiDj6jzDGjtDrD5DbDLilCS8x82C30z8GjuD3D7QatG9tiV88imMTCbCGiZDmiziHYmD7DQTYInDtMoSniDMyiatWil8m8GNFdEjndki0TEDTibCD9/driwTbiISK9fjoTnjb959gdsBQcn9/BX8xjAjZ5P9DdEcFiVj/8zcpTS0oi1jRkhtOgtjsjESaiuZxDUTfj0SI099kimSi8WS8TwTiNITOSiSY8SS783iEt4iqT9iaTDiUiaD6SMTGTsTmTcSsDkNzSp8uTiTmi4SbM4jdiHSvinSfip9dTZ0PS7CvTR8TS2SzSOT/TLTr9rT58yT9CdiRCjDNSUTAS6TSj3TATDTh9jSfS7jJ9ZsAyrSgzyisSYZ+QZj4c5jJTOsSJwi5TMdFTscjtvBnBQy8zPjujviiiXTpC3S9Sat7U6dEtRyCy6iJziyTi9oPpMTftXSSyZybT4AoBJxhzDDFzoFxzejJyilpz3oQpNzO9jjLCGz58Rh5z7S18IyXMiydSrzYS78YYjyzs3yxzIyVyvydyPD58+hqUESyDRClyejziLyJMwKfyIL9h/yHdwygKPyXdQK1zdz58Z4YB9Br81SYL8zTzgLzzVyHz8KZN3gLBEI+10LOjkTlyqLcKaLwKG8DACAmKXywzAK4KzyELqKmjaLgFqAbhSDKTBKKLsLs4ABFYIJsDVRAKS6s8dXbCFQM8S+Pfc5ipEzbeS500S/4/U8aQQOcCkJsgubAgki0zQng3fbRYY8QdlKlL1dTAVaYoI2Y7/DslxTeJY43DeK3SicZfikczCoSyi7oLFU/VM2bbS+s3S14kgikj46KuS1LGRC5BhOyv0pKwlHSrio7EMyK48rKnJYSuhPKpZX0xKrS4qlK0q3Q57No6SzK2S6q2K2qxZbzdkjgh4glNREqn8rXd1bVZ+blLyt/bQVsr/LpAKktIKgAkK7xaI63YbHM9U2C7K77f5OqgalMoaho5KjMx8zI9K6CmSromK4yw6/q7jZw9Q8FZqi61KwheE0i261i+Cvqy5BK063486sy0kvQgyjU/a2AuKo656+yqfUGwgzXVy91T1aa3VWa0U9pNs/y5Y1xYKiI0Kza8Km3Hasik8nqh63Kp6oG+4s696sGm066n6rqu66G0w+Kgqxq3TJG3g4MyoiqgC9mqmnKzFOGummspq0alqlC6Xdq8km6tmv6mqrmhq4GxGxm5GoY+fVTfDDzTjLzFs3y3Gpa/G03NHHshU9YmIgc3AIcoWjC7ql1bU6M78qXTYryR2lioysWkSjisS68pqW8qQy85Cj2vSg8r2zqhcqql2z8t28Ojc12kovC1qpkZ8mO18kW+OnCxOtOuW4BP872wy5nGqrcqc8Ol4whSCyGva0Wg6kC/OziwuruSCqSjK2O52rUhO1OluiOpkQi+eEi94runOnuvOvuwO1upkeihZXimpOu8ihumGsw5u6eger6nivirOgS8ewsye/o/u6uzoSSpeym3OxS5S8YtSyWzS3mrW/mvcqC1mselW3qiusOgukLbOSy94fwPWx9A2rLI2u+3A1wxymEze8lSlBec+uOie3+qy/wScKAbLdW+mhygTLQ7WmrOVOc3eqK7ug+pB/+sAGy468vDW2s9Mpm+fOVbpeB4htikAP+6ygWdBjS8Bi/SB7kwHO/LE+Mo0707GlrRa9rOU1a2U0ZDavsjYruTgF+0e7O9+6m9i9epmmrNhgBjh0B3NMU4I9s82rswmq21Ym2ra5JQc2gJh/elhteqeuhnHaOzulR32xu9RxxizZO3uo+jek+q4fcw8kuqGle0wz+pC7+nxw++8/xrnDOpRu0ve1Rv2hxvxpxoutCkJ+uy+kygOjJtuxJiAohux/6iJirb+gJ9Qdu2xlJjx/2jR3Bu/Ie4i2p9x1e8pt3Ap2emAeene1x5J9p8Ju87cyp+JrehQfppWt+oZlO9Jpp+fbAfS7J5e3JqMrx3gs47R8h3R5ssBlwnh7BpywYly+fbZwBuDTLAgdBhaiU4xzsbszs8xpUhvaxkepJkpupjpkZyusZufZxtpsuj+n5r+/u6J2k/JhZzIoJlx6ZtxoFtRhpjZ4LcFvJxpp+p8opgw4Wr54Z0OyJ4+8ZzoYuwhyq5hspkFgluJ/54BWulZi+xBtF5Fk5u/Gp+lhBkhpl+ZjFmTFp2CQFp3RFtJ2J7pwhOexixe9l8l8uylipwlml7nbeyV0lnF2Z3xkVqFpbZZlVp20pmV/FuV6luQvmc5tzfWq5zhwazBtM3hsa6B2VWBrF3MslvV2K7Z1By1k661mh212W+19QfB2F1++FwVv201gfPRjBqWvA31j69OwhBh6cAV6kxF8N/PPZ7m6h3bOsuN8au/d1heG5k28R+Yp5mUy2stsKsZV5N55Nx0xF1B0yzVk+IN5RwZhFv2xtyF4TVFzoLt9F5y5+4JnVn2jt+p/t5loKXt1gCd7lwdzFut98ztuB7t+dmTElgZz5tVvmWdjVnl2lp13a1Zxlvtldgdll1CjuuF9t0N8ds9ydy6rVw9imjllh3d0Z+V410hikD1yNrhg5x42NzR5qEAYCKAIDsxNZatwhJS7gPIEm6DzoWQAwAcCQKAbNGYLgOYUmwhV0KaRdrCv2vRE6U0qh717N2h5tpkQRKpAj+6ojipDGvtceKY5Msj6NiBo5qB6drwnVZj1AVjpDf9169DCjP1qpprECICFuYNm9lNhj98fRXsOazN8jmNrjvhnQpkGAcHOjjm5ld935z9jI4BAgPQNoPTsJgz+9udi9mTMAewfQS8SztZt1LgaDLgVeAAUSwX2ZE9UQ4TtZK0gxwz5G8989U449iT5pRZCm0VVfp1iDA7bT3D5gw4wcktSVm2S406C/pDv2Q7AFQ/eFEl7ivEKC4HgFdG0FmEsdYDw4khc5Pbc+ynxMKoo6A6o8IRo64EHia85fVT45qRY8nlI4n3vs4+rxn28ZvOw0Y8QUHn44nk8ja55sm4wzy4VcHqk49H65YeI78AMRU6jYm8Oam5wf3a7h06vdk63bHZhsM9BaNZM4UfM72/gse6pdFc6Ac/eCc+fd+u3ezlC4sHC/wD8+GrepltzZ/tvXEA87B9gAh4Zuh4SQ+ni91bUDexy/llS+B4glU8y4aJx42/E/y/n0K7GPS9q5w86Aa78He+EoO+O+E8h9E5r2+9YB6766lddcRdK6Y+G4E9G7Y/G+4cA9y79Z45ZSG9HhG5W7G7ULZ6r1J5h4k+MB25k7bbu9vZhuZ6O9W6zfU/O+OczJk2u8Z9is+8Nc56MDe959xes+kgfc+p+8c/5IB+VqB7h67TjUR+R5Bsft3zOJB8893h8/B8i9O/uVR5m6agx9Hb1Bx8Mjx59/htPrUqy92xJ7E5h4+jvwgFmup6w7q/UHp5u+15dcd5C+OhslF6V8JM68u+o4xst/5/m6qSW8E9Dytai4l5N+49m5r57kF7l+F4V/r5euV+nwu7XeAQ14kF24d+9/VWygN8V6n8b8l7V6JdYAt+X/u4kOt66a686DM5kAs4P916P5s73cHdrET+xGT4JmZQ4yQHS9Z+J6PCb931Zcq9wDaCDxi+2HRDvV3w5X95O9TZnobzU7rdc+tvUDq3wgH1sFOXAWXpc2fQT8hOvfaPhoW35o8h+aXDvr12qRANB0WAnvl6z754CB+mnF7kyH4DwdOqHRUutfzm6+9m4/vKPuLxGqBcpehA/HhwLC7h8IuJ3HgVDz4E78tuhCYoAADcg4m7Kvivzc4edYMb/KsjgPEHs9puzfQhPvxHasDIBD3W/h+2e7lFz+l/AwaE1c7qBj+FhMwQn0MGIhn+GUdgVwGWD/9ABOQDIN/2cwB8p8OfDnnH0AQFcuQR3YAaXxADl8qiSgw/m4LX7KcYB1AydD/xZYP9S62PXwbjzMREDKGm6Inr8UCE6Df+FPMIcpwF7ldKu1XTDiAOVJgDGu7ReXE4KXZQDa+7/RIRvwRo+t8BTTdIcckyHgc/BOQwQen1YAFCAhWQ1XmZXKITEYAjcBDnUPUDGAfCw+MkBENp6sA9gN0DKiwOsHNcvCkOaHJQPY64CUhPQzZm4Ifxg4IcKwpIacO0Gz80hCXJPlkJT7DC0+dNcYdl0mHwDtad+AAeIGPBrCCeIAGnqALL7gDmBTQvYQNxa5KdxwdwrQSr1+G6DOgywqHFkyhHVEcm+w2rLcM6HtdjeUw7WiH21z8lH8z+Q4d5Un5dCOu5wufl3AAE0gYhzwowRIRGK64CRa3M7sSIuHD8uAVwwUi/iHyIiAONA3kff1ZHODXhL/fkZ8Mz5f9BhtAzbmcGaYrCqeIIsEYsPADQBthStXYTiNhEHD1REAfwqKP84z9TepZXId4QxFIARSXIo3nAKCE9s4ud+CwaUAAEoAZA6kGPLd1iFsDIM/ceAPAC4imim2T9PoXtRcFqBX+UgKQH5H8BuAquBAHwUqP8HfClREowYnfhoBIAi8wIwFFqJkzRDGh2I49kaJZQJCERjo2ATyJRGSjMep2UDjKNcFyjCeCowoT8JdElCZMTI/3IWP5DFjgEWwlkU2LiH8jX85o6fjmzMqkjuAgo5/FONrHJCHhVo13vUIZ5liAxbI+IfCMiDTit+yosnoDgS4DCUu7w9VPKJoCKjUhZRf4aMVNE5B1h4InUQBG3FSiWhevbXI+P8KzDu+GYukceKkFfs0+i4oUr+ICIrj7hyInsXZ2ASlirBho/bm0MPFYNgJmjT8Ul1bGxjIMBweMYmLADJjXQqYrIYBN0xFDHh94+fHmN8JPiXx2oxCYoKwn0dWhinEjjSMJHOjihTw8cS8KVFvC4xCYy8EmJTFpjOJ3I6WJRPXHcI78M4C8EeCQBuAIA1Q0ESXw2HqBIgTYMcY/xQH1NhWpghAc6DND/huA7zYpjuL0kw0AAUkBGjou8PCUY8ijGNT6dBbJWkVdjmPnxaScgyk1ScOK7g+SdJzQwjvpM6b2CjJFgZgMLHMnYs+Ju4yDO5Psm2drSTkk8i5MvGsAkpEY3/jVjf7pcLGGkkABSg5TSQtRaU87OeKGFuD3KC8N/uJL8HcCxRXsaSVA2XB35A2NXdSfQAqlpwqp2QtwR6mwD1ScJ5EsjK1LoELAOp8qGofOHHH9TBJ/IrVNOBGkCSLITUi0RNJVEhCJq7gzwYPAam48FhsRWaSOBYkti1pbYmJoZL+GLMSC5U86RlLmZ38vJDecqmpNqG9T2aT09VjdN4J35syXUz6Y9NGmZTPGKU5oh1MdZAy5po7BabKJtG1SoAq0lLhtOn5bSTxqo+hqjhhlnT5p/OH6TaKGkozGpYg5qVz27E8TqJMmRNrjJ6lniCZoMwad0hJlHSyZm0ymVRMhl5SCJIkoiWJLInHT5+pUumWQBBmXTcJO7EwUZzMHlFRISM1mSnyFkRUPpsMkKZQEJnZw7BfxW6VdUuCnT6Z8U6URLNckztpZT3aYfPh5wPSjZUITWeNG1kxl7QAMiGgbLFm2zsJJssGSAEdnu12p9DMwKkhtm6S7ZTMyDL7Krr5ddpxM2aodKVlyNbaKs4ORkMZleznpf03scQX1mqy8ZcM1ORePTkyzLZb0wWjnMNl5yAQ9s9ZhDL1IuyFaXoZOf0PznVTfpRcv4dHJZmxzRpyssmqLK+lY9m5A01uRbN1lZypKjc+lPDKukQtz21MsqqXInlJYp5ksmeQ5OdlZlXZZc92RXM9kFzh5X3duSuCoAKjXxBUl5psQbndTt56si6XvOultz/pd07OYvPSlhz75I8x+SXJIRbz+5ZYKuU3TXnVg658KS+cDI9kay35q8mubJNObMhGakHd2K+KvBmhYIhUSeEBGW4wQbASAWQagG0CyDMQigEADCBBzwBYAdqKAKWEoAwh2U5CkeFQuIVIAOguoxKDCG0BdBuAMgMwDIAABeqKXaQjxEGR8QABCrMEQtxz7IecgMmrADXyoiLCFJAUESYEGBzhjAIAGrLBxUq31KAoi4IEQqGDphqUsEHAAQBHgyBcF6ikDjbQ8BSBQYwAKaX+AgBtA2g/QNrJnxYK2JKIRPLwtoDaA6gzQaACYOICKyFcjurAUJeUJBERLxwZXCrlV3CVlDxwFQuJapMK7FdjgipFDr4BK5RKuQ6S2JVUISVZK0OySwpSMgMBjEilYADUYCnREbBWAdSgse/xBGNL7RT4hpSaP8LpdaJP3VAPmNWHNLAU/YtChMGYKDiVFXEOif4U2F9Kplz4kEcMraXTLRlNIGpfyABHcAMlGyi5OMpmCzVWAhfYBulwaTAQvBrAE5QAKAEQQj5+5T8B4v5ZmJ6shgd2a6EJAjLiAzIWcBr32B+TtAPk35YsCmlAA==='
const decompressedDMMF = decompressFromBase64(compressedDMMF)
// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(decompressedDMMF)
exports.Prisma.dmmf = JSON.parse(decompressedDMMF)
config.document = dmmf


config.inlineSchema = 'Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgcHJldmlld0ZlYXR1cmVzID0gWyJkZW5vIl0KICBvdXRwdXQgICAgICAgICAgPSAiLi4vZ2VuZXJhdGVkL2NsaWVudCIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAicG9zdGdyZXNxbCIKICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikKfQoKbW9kZWwgVXNlciB7CiAgaWQgICAgICAgU3RyaW5nIEBpZCBAZGVmYXVsdCh1dWlkKCkpCiAgbmFtZSAgICAgU3RyaW5nIEBkYi5WYXJDaGFyKDEwMCkKICBlbWFpbCAgICBTdHJpbmcgQHVuaXF1ZSBAZGIuVmFyQ2hhcigxMDApCiAgcGFzc3dvcmQgU3RyaW5nCgogIEBAbWFwKCJ1c2VycyIpCn0K'
config.inlineSchemaHash = '12f5719c8b628a636a147f71d915f558fc0d53b3f216bd6426c079ed04e728bd'

config.inlineDatasources = {
  "db": {
    "url": {
      "fromEnvVar": "DATABASE_URL",
      "value": null
    }
  }
}

config.injectableEdgeEnv = {
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
}

config.edgeClientProtocol = "graphql";
if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)
export { exports as default, Prisma, PrismaClient }

