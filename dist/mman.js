"use strict";
/** Copied and adapted from mman-linux.h */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MS_INVALIDATE = exports.MS_SYNC = exports.MS_ASYNC = exports.MAP_FIXED = exports.MAP_PRIVATE = exports.MAP_SHARED = exports.PROT_GROWSUP = exports.PROT_GROWSDOWN = exports.PROT_NONE = exports.PROT_EXEC = exports.PROT_WRITE = exports.PROT_READ = void 0;
/* Protections are chosen from these bits, OR'd together.  The
   implementation does not necessarily support PROT_EXEC or PROT_WRITE
   without PROT_READ.  The only guarantees are that no writing will be
   allowed without PROT_WRITE and no access will be allowed for PROT_NONE. */
exports.PROT_READ = 0x1; /* Page can be read.  */
exports.PROT_WRITE = 0x2; /* Page can be written.  */
exports.PROT_EXEC = 0x4; /* Page can be executed.  */
exports.PROT_NONE = 0x0; /* Page can not be accessed.  */
exports.PROT_GROWSDOWN = 0x01000000; /* Extend change to start of growsdown vma (mprotect only).  */
exports.PROT_GROWSUP = 0x02000000; /* Extend change to start of growsup vma (mprotect only).  */
/* Sharing types (must choose one and only one of these).  */
exports.MAP_SHARED = 0x01; /* Share changes.  */
exports.MAP_PRIVATE = 0x02; /* Changes are private.  */
/* Other flags.  */
exports.MAP_FIXED = 0x10; /* Interpret addr exactly.  */
/* Flags to `msync'.  */
exports.MS_ASYNC = 1; /* Sync memory asynchronously.  */
exports.MS_SYNC = 4; /* Synchronous memory sync.  */
exports.MS_INVALIDATE = 2; /* Invalidate the caches.  */
