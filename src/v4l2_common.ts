/** copied and slightly adapted from linux/v4l2-common.h */

import ref from "ref-napi";
import ref_struct from "ref-struct-di";
import ref_array from "ref-array-di";

const StructType = ref_struct(ref);
const ArrayType = ref_array(ref);

/*
 *
 * Selection interface definitions
 *
 */

/* Current cropping area */
export const V4L2_SEL_TGT_CROP = 0x0000;
/* Default cropping area */
export const V4L2_SEL_TGT_CROP_DEFAULT = 0x0001;
/* Cropping bounds */
export const V4L2_SEL_TGT_CROP_BOUNDS = 0x0002;
/* Native frame size */
export const V4L2_SEL_TGT_NATIVE_SIZE = 0x0003;
/* Current composing area */
export const V4L2_SEL_TGT_COMPOSE = 0x0100;
/* Default composing area */
export const V4L2_SEL_TGT_COMPOSE_DEFAULT = 0x0101;
/* Composing bounds */
export const V4L2_SEL_TGT_COMPOSE_BOUNDS = 0x0102;
/* Current composing area plus all padding pixels */
export const V4L2_SEL_TGT_COMPOSE_PADDED = 0x0103;

/* Selection flags */
export const V4L2_SEL_FLAG_GE = 1 << 0;
export const V4L2_SEL_FLAG_LE = 1 << 1;
export const V4L2_SEL_FLAG_KEEP_CONFIG = 1 << 2;

export const v4l2_edid = StructType({
	pad: ref.types.uint32,
	start_block: ref.types.uint32,
	blocks: ref.types.uint32,
	reserved: ArrayType(ref.types.uint32, 5),
	edid: ref.refType(ref.types.uint8),
});
