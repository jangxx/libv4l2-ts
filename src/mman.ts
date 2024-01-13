/** Copied and adapted from mman-linux.h */

/* Protections are chosen from these bits, OR'd together.  The
   implementation does not necessarily support PROT_EXEC or PROT_WRITE
   without PROT_READ.  The only guarantees are that no writing will be
   allowed without PROT_WRITE and no access will be allowed for PROT_NONE. */
export const PROT_READ = 0x1;		/* Page can be read.  */
export const PROT_WRITE = 0x2;		/* Page can be written.  */
export const PROT_EXEC = 0x4;		/* Page can be executed.  */
export const PROT_NONE = 0x0;		/* Page can not be accessed.  */
export const PROT_GROWSDOWN = 0x01000000;	/* Extend change to start of growsdown vma (mprotect only).  */
export const PROT_GROWSUP = 0x02000000;	/* Extend change to start of growsup vma (mprotect only).  */

/* Sharing types (must choose one and only one of these).  */
export const MAP_SHARED = 0x01;		/* Share changes.  */
export const MAP_PRIVATE = 0x02;		/* Changes are private.  */

/* Other flags.  */
export const MAP_FIXED = 0x10;		/* Interpret addr exactly.  */

/* Flags to `msync'.  */
export const MS_ASYNC = 1;		/* Sync memory asynchronously.  */
export const MS_SYNC = 4;		/* Synchronous memory sync.  */
export const MS_INVALIDATE = 2;		/* Invalidate the caches.  */

