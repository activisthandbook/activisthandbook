
<template>
  <div class="donate-container primary-action" tabindex="0" id="action-donate">
    <slot/>
    <client-only>
      <iframe :src="`https://donorbox.org/embed/activisthandbook-donate-embed?default_interval=m&first_name=${given_name}&email=${email_address}`" name="donorbox" allowpaymentrequest="allowpaymentrequest" seamless="seamless" frameborder="0" scrolling="no" height="900px" width="100%" style="max-width: 432px; min-width: 250px; max-height:none!important"></iframe>
    </client-only>
  </div>

</template>
<style lang="scss">
.donate-container{
  background: var(--vp-c-bg-alt);
  border-radius: 2px;
  margin: 24px 0 64px 0;
  padding: calc(14px + 1.8vw) calc(8px + 2vw);
  text-align: center;
  outline: none;

  h2 {
    margin-top:0 !important;
    color: black;
  }
  iframe{
    margin: auto;
  }
}
</style>
<script setup>
import { onMounted, ref}  from "vue"
// import * as test from "https://donorbox.org/widget.js"

const given_name = ref("")
const email_address = ref("")

onMounted(() => {

  if(localStorage.getItem('given_name')){
    given_name.value = localStorage.getItem('given_name');
  }

  if(sessionStorage.getItem('email_address')){
    email_address.value = sessionStorage.getItem('email_address');
  }



(function (w, d) {
  'use strict';

  if (w.DBOX_EMBEDED) return;
  w.DBOX_EMBEDED = true;

  var IFRAME_SELECTOR = 'iframe[name=donorbox]',
      DATA_ATTR = 'data-donorbox-id',
      UTM_PARAMS = extractUtmParams(),
      notBusyWithIDs = true;

  function extractUtmParams() {
    var data = {}, queryString = w.location.href.split('?')[1];

    if (queryString) {
      var params = queryString.split('&'),
          supportedUtmParams = ['utm_source', 'utm_campaign', 'utm_medium', 'utm_term', 'utm_content'];

      params.forEach(function(p) {
        var splitted = p.split('='), key = splitted[0], value = splitted[1];

        if (supportedUtmParams.indexOf(key) >= 0) data[key] = value
      })
    }

    return Object.keys(data).length && data
  }

  function sendMessage(iFrame, action, msg) {
    iFrame.contentWindow.postMessage({
      action: action, msg: msg
    }, '*')
  }

  function onloadProcessing() {
    var iFrames = d.querySelectorAll(IFRAME_SELECTOR),
        apr = 'allowpaymentrequest';

    for (var i = 0; i < iFrames.length; i++) {
      var iframe = iFrames[i], src = iframe.src;

      update(iframe, i);

      if (!iframe.hasAttribute(apr) && src.indexOf('only_don') == -1) {
        iframe.setAttribute(apr, true);
        iframe.src = src + (src.indexOf('?') > -1 ? '&' : '?') + 'a=b'
      }
    }
  }

  function justSendTheID(iFrame) {
    sendMessage(iFrame, 'set-iframe-id', iFrame.getAttribute(DATA_ATTR))
  }

  function sendIDAndUTM(iFrame) {
    justSendTheID(iFrame);
    UTM_PARAMS && sendMessage(iFrame, 'set-utm-params', UTM_PARAMS)
  }

  function update(iFrame, num) {
    iFrame.setAttribute(DATA_ATTR, 'DonorBox-f' + (num + 1));

    iFrame.onload = sendIDAndUTM.bind(null, iFrame);
    sendIDAndUTM(iFrame)
  }

  function tryUpdateIFramesIDs() {
    var iFrames = d.querySelectorAll(IFRAME_SELECTOR),
        hasIDs = d.querySelectorAll('iframe[' + DATA_ATTR + ']');

    if (iFrames.length == hasIDs.length)
      for (var i = 0; i < iFrames.length; i++)
        justSendTheID(iFrames[i]);
    else
      for (var i = 0; i < iFrames.length; i++)
        update(iFrames[i], i);
    notBusyWithIDs = true
  }

  function findBy(dataID) {
    return d.querySelector('iframe[' + DATA_ATTR + '="' + dataID + '"]')
  }

  function onMessage(e) {
    var data = e.data, iFrame;

    if (!data || typeof data != 'object' || data.from != 'dbox' || data.close) return;

    if (data.src.indexOf('forms/color') != -1)
      iFrame = d.querySelector(IFRAME_SELECTOR);
    else
      iFrame = findBy(data.iframeID);

    if (!iFrame) {
      if (notBusyWithIDs) {
        notBusyWithIDs = false;
        setTimeout(tryUpdateIFramesIDs, 50);
      }
      return
    }

    if (data.scrollIntoView) {
      (iFrame.offsetTop < w.pageYOffset ||
       iFrame.offsetTop > w.pageYOffset + w.innerHeight) &&
         iFrame.scrollIntoView()
    } else {
      if (parseInt(data.height) > 0)
        iFrame.style.height = data.height + 3 + "px";

      w.innerWidth < 350 && (iFrame.style.minWidth = 'initial');
    }
  }

  if (d.querySelector('script[paypalExpress=true]')) {
    var paypal = d.createElement('script');
    paypal.src = 'https://www.paypalobjects.com/api/checkout.js';
    d.head.appendChild(paypal);
  }

  w.addEventListener('message', onMessage, false);

  d.readyState !== 'complete' ?
    d.addEventListener('DOMContentLoaded', onloadProcessing) :
    onloadProcessing();


  // Public API
  w.donorbox = w['donorbox'] = {
    resizeDonationWidget: function(iFrameSelector) {
      var query = iFrameSelector || IFRAME_SELECTOR, el = iFrameSelector, iframe;

      if (el instanceof HTMLIFrameElement && el.name === 'donorbox') iframe = el;

      iframe = iframe || d.querySelector(query);
      if (!iframe) console.error(
        'donorbox.resizeDonationWidget: "' + query +
        '" is not a valid selector. Use your embedded iframe, its ID or class instead');

      sendMessage(iframe, 'please-resize-me')
    }
  }

}(window, document));
})
</script>
