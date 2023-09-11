
Object.defineProperty(exports, "__esModule", { value: true });

const {
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
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/data-proxy')


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


  const path = require('path')

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

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  config.dirname = path.join(process.cwd(), "generated/client")
  config.isBundled = true
}

const compressedDMMF = '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'
const decompressedDMMF = decompressFromBase64(compressedDMMF)
// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(decompressedDMMF)
exports.Prisma.dmmf = JSON.parse(decompressedDMMF)
config.document = dmmf


config.inlineSchema = 'Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgcHJldmlld0ZlYXR1cmVzID0gWyJkZW5vIl0KICBvdXRwdXQgICAgICAgICAgPSAiLi4vZ2VuZXJhdGVkL2NsaWVudCIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAicG9zdGdyZXNxbCIKICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikKfQoKbW9kZWwgVXNlciB7CiAgaWQgICAgICAgU3RyaW5nIEBpZCBAZGVmYXVsdCh1dWlkKCkpCiAgbmFtZSAgICAgU3RyaW5nIEBkYi5WYXJDaGFyKDEwMCkKICBlbWFpbCAgICBTdHJpbmcgQHVuaXF1ZSBAZGIuVmFyQ2hhcigxMDApCiAgcGFzc3dvcmQgU3RyaW5nCn0K'
config.inlineSchemaHash = '6844f9946373f96a57ea1473eb3bef68ef58c093af9cf2040ff7bf7d7869ddb5'

config.inlineDatasources = {
  "db": {
    "url": {
      "fromEnvVar": "DATABASE_URL",
      "value": null
    }
  }
}


const { warnEnvConflicts } = require('./runtime/data-proxy')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})


const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

