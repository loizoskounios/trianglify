/*
 * Pattern.js
 * Contains rendering implementations for trianglify-generated geometry
 */

function Pattern(polys, opts) {
  // Return an object with all the relevant functions/properties attached to it
  return {
    polys: polys,
    opts: opts
  };
}

module.exports = Pattern;
