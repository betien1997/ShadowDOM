// Copyright 2013 The Toolkitchen Authors. All rights reserved.
// Use of this source code is goverened by a BSD-style
// license that can be found in the LICENSE file.

(function(exports) {
  'use strict';

  /**
   * This represents a logical DOM node.
   * @param {!Node} original The original DOM node, aka, the visual DOM node.
   * @constructor
   */
  function WrapperEvent(original) {
    /**
     * @type {!Event}
     */
    this.impl = original;
  }

  WrapperEvent.prototype = {
    // These are overridden in EventTarget.js
    get target() {},
    get currentTarget() {},
    get eventPhase() {}
  };

  wrappers.register(Event, WrapperEvent, document.createEvent('Event'));

  exports.WrapperEvent = WrapperEvent;

})(this);