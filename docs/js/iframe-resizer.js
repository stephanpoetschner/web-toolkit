import $ from 'jquery';
import iFrameResize from 'iframe-resizer';

class IFrameResizer {
  constructor(el, options) {
    this.$el = $(el);

    iFrameResize({
      autoResize: true,
      resizeFrom: 'child',
      checkOrigin: false,
      sizeHeight: true,
      maxHeight: options.maxHeight || 'infinity',
      minHeight: options.minHeight || 0,
      heightCalculationMethod: 'lowestElement'
    }, this.$el[0]);
  }
}

let Plugin = function(option) {
  let $el = $(this);
  let data = $el.data('axa.iframe-resizer');
  let options = typeof option === 'object' && option;

  // there's no instance yet
  if (!data) {
    data = new IFrameResizer(this, options);
    return $el.data('axa.iframe-resizer', data);
  }
};

$(() =>
  $('[data-iframe-resizer]').each(function() {
    let $el = $(this);
    let data = $el.data();

    return Plugin.call($el, data);
  })
);

//! Copyright AXA Versicherungen AG 2015
