// TODO: Import any objects or functions needed here

// TODO: Provide the following functions
export function makeIdentityMatrix() {

  /****** ASK QUESTIONS HERE ********/
  this.iMatrix = new Float32Array([
    1, 0, 0,
    0, 1, 0,
    0, 0, 1,
  ])

  return this.iMatrix;
}

export function makeTranslationMatrix(tx, ty) {

  /****** ASK QUESTIONS HERE ********/
  this.tMatrix = new Float32Array([
    1, 0, ty,
    0, 1, tx,
    0, 0, 1,
  ])
  return this.tMatrix;
}

export function makeScaleMatrix(sx, sy) {

  /****** ASK QUESTIONS HERE ********/
  this.sMatrix = new Float32Array([
    sx, 0, 0,
    0, sy, 0,
    0, 0, 1,
  ])
  return this.sMatrix;

}

export function makeRotationMatrix(thetaInDegrees) {

}
// Each function should construct the particular matrix sugested
// by its name and then return that matrix. The matrix is stored
// as a single-dimensional array of 9 values in COLUMN-MAJOR
// order (see instructions for more details)

// TODO: Provide a function to multiply two 3x3 matrices
//   - multiplyMatrices (M1, M2)
// The two parameters are themselves 3x3 matrices stored as single-
// dimensional arrays in column-major order. You should construct
// a new 3x3 matrix (aslo as a colum-major array) and fill it with
// the result of multiplying M1 by M2 in that order. Return that
// new array.

// TODO: Provide a function to transform a point by a matrix
//   - transformPoint (P, M)
// DO NOT MODIFY P! Instead, just use the values of P and the matrix
// to construct a brand new Point object. The math is simple matrix-
// vector multiplication. Return the new/transformed point.
// NOTE: You will likely need to import the Point object at the
//       top of the file (see Shape.js for an example of this)

// TODO: Provide a function to build the composite transformation
//       for a given shape object.
//   - rebuildTransformationMatrix (shape)
// The 'shape' passed to this function will have the following props:
//   - shape.tx & shape.ty for translation properties
//   - shape.sx & shape.sy for scale properties
//   - shape.rotAngle & shape.rotAroundCenter for rotation properties
// Compute the full transformation matrix taking those properties
// into account and store it on the 'shape' object as 'shape.M'
// NOTE: Keep the following in mind
//   - All shapes have a function computeCentroid()
//   - Scaling should ALWAYS happen around the shape center
//   - Rotation is around the origin UNLESS shape.rotAroundCenter is true
//   - The order in which you combine the transformations is VERY important

/**
 * Generate an orthographic projeciton matrix (2D or 3D) for use
 * in defining the cannonical viewing volume for the current scene.
 * Can be used as a projection matrix in a shader.
 * @param {number} b The location of the BOTTOM of the view volume
 * @param {number} t The location of the TOP of the view volume
 * @param {number} l The location of the LEFT of the view volume
 * @param {number} r The location of the RIGHT of the view volume
 * @param {number} n The location of the NEAR face of the view
 *                   volume (optional, defaults to -1)
 * @param {number} f The location of the FAR face of the view
 *                   volume (optional, defaults to 1)
 */
export function orthoMatrix(b, t, l, r, n = -1.0, f = 1.0) {
  // Pre-compute matrix values
  var A1 = 2 / (r - l)
  var B1 = 2 / (t - b)
  var C1 = -2 / (f - n)
  var A2 = -(r + l) / (r - l)
  var B2 = -(t + b) / (t - b)
  var C2 = -(f + n) / (f - n)

  // Build orthographic projection matrix in col-major order
  var M = [
    A1, 0, 0, 0,
    0, B1, 0, 0,
    0, 0, C1, 0,
    A2, B2, C2, 1
  ]

  // Return matrix
  return M
}
