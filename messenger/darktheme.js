function applycss(css){
  var head = document.getElementsByTagName('head')[0];
  var s = document.createElement('style');
  s.setAttribute('type', 'text/css');
  s.appendChild(document.createTextNode(css));
  head.appendChild(s);
}

applycss(`
  /* #141823 is Messenger's normal text colour, white is normal background colour */
  /* #1E1E1E and #2D2D30 are Visual Studio's background colours'*/

  h2, h3, h4, h5, h6 {
    color: #eee;
  }
  /* white text */
  ._1tqi, ._5743, ._4rph ._4rpj {
    color: white !important;
  }
  label, ._1wse {
    color: #aaa;
  }

  /* conversation search box(new message, add people) */
  ._2y8y, ._2y8_, ._4jgt, ._5iwm ._58al, ._55r1 {
    background-color: #2d2d30 !important;
    color: white !important;
  }
  input._58al {
    color: white !important;
  }
  input::-moz-placeholder {
    color: #ccc !important;
  }
  input::-webkit-input-placeholder {
    color: #888 !important;
  }
  /* top bars */
  ._36ic, ._673w {
    background-color: rgba(255, 255, 255, .05) !important;
    /*border-bottom: none !important;*/
  }
  /* main wrapper */
  ._4sp8 {
    background-color: #1e1e1e !important;
    color: #eee;
  }
  /* detail wrapper */
  ._1q5- {
    border-left-color: rgba(255, 255, 255, .1) !important;
  }
  /* recipient name in the top bar */
  ._17w2 {
    color: white !important;
  }
  /* thread search */
  ._33p7 {
    background-color: rgba(30, 30, 30, 0.9)	!important;
  }
  /* highlighted search results */
  .__in {
    background-color: rgba(0, 0, 0, 0.3) !important;
    box-shadow: 2px 0 rgba(0, 0, 0, 0.3), -2px 0 rgba(0, 0, 0, 0.3) !important;
    padding: 1px 0 2px 0; /* fix facebook bug */
  }
  /* event plan banner */
  ._3nta {
    background-color: #2d2d30 !important;
  }
  ._3nta:hover {
    background-color: #222 !important;
  }
  ._2n3u {
    color: rgba(255, 255, 255, .6) !important;
  }
  /* XUIButton */
  ._517h {
    background-color: #222 !important;
    border-color: rgba(255, 255, 255, 0.5) !important;
    color: #ccc !important;
  }
  ._517h:hover {
    background-color: #2e2e30 !important;
  }
  ._2615:not(:hover) {
    background-color: #333 !important;
  }

  /* chat area stuff */
  /* beginning of conversation info */
  ._llq, ._36zg, ._1n-e._36zg {
    color: #eee !important;
  }
  /* message */
  ._29_7 ._hh7, ._29_7._-5k ._hh7 {
    background-color: #2d2d30;
  }
  ._29_7 ._hh7 {
    color: #ddd;
  }
  ._hh7 > ._aok > ._3oh- > a {
    color: inherit !important;
  }
  ._hh7._aol {
    border-color: transparent !important;
  }
  ._29_7 ._hh7:active, ._-5k ._hh7, ._29_7 ._hh7>span>a:hover {
    background-color: #333;
  }
  /* own message */
  ._o46._nd_ ._hh7 {
    background-color: #365898;
  }
  ._o46._nd_ ._hh7:active, ._o46._nd_._-5k ._hh7 {
    background-color: #264888;
  }
  /* emoji-only messages */
  ._hh7._2f5r, ._-5k ._hh7._2f5r {
    background-color: transparent !important;
  }
  /* reactions */
  ._aou {
    background-color: #222 !important;
  }
  ._4kf5 {
    background-color: transparent !important;
  }
  /* link info, platform attachment, game leaderboard */
  ._5i_d, ._5ssp, ._4ea2 {
    border-color: rgba(255, 255, 255, .1) !important;
  }
  .__6k, .__6l, ._5sr2 {
    color: #ddd !important;
  }
  ._4u4_ > h3, ._4u4- {
    color: #eee !important;
  }
  /* group polling */
  ._3b4u {
    color: #ddd !important;
  }
  ._3b4h {
    background-color: #2d2d30 !important;
  }
  /* polling message dialog */
  ._1mr_, ._1mq- {
    color: #ddd !important;
  }
  /* poll checkbox */
  ._2m5p {
    border-color: rgba(255, 255, 255, .1) !important;
  }
  /* create event plan button */
  ._3erg ._hh7 a._2q1l {
    background-color: #2d2d30 !important;
    border-color: #222 !important;
  }
  /* event share attachment */
  ._618l {
    color: rgba(255, 255, 255, .75) !important;
  }
  ._618n {
    color: rgba(255, 255, 255, .6) !important;
  }
  /* carousel arrow */
  ._5x5z {
    background-color: #1e1e1e !important;
    border-color: #444 !important;
  }
  /* audio message */
  ._29_7 ._3czg ._2e-7 ._2e-1, ._29_7 ._3czg ._2e-7 ._2e-2 {
    background-color: #444 !important;
  }
  ._454y ._1mi- {
    background-color: #2d2d30 !important;
  }
  ._454y ._1mj0 {
    background-color: #666 !important;
  }
  ._454y ._1mj1 {
    border-color: #666 !important;
  }
  /* media (e.g. GIFs) source */
  ._2f5n {
    background-color: #2d2d30 !important;
  }
  ._2f5n ._29ey {
    color: #ccc !important;
  }
  /* delete bubble button */
  ._hw2 ._53ij {
    background-color: #040404 !important;
  }
  /* composer */
  ._17pz, ._4rv3, ._4_j4 .chatAttachmentShelf {
    background-color: #1e1e1e !important;
    border-top-color: rgba(255, 255, 255, .1) !important;
  }
  .fbNubFlyoutHeader, .fbNubFlyoutBody, .fbNubFlyoutFooter, .fbNubFlyoutAttachments {
    background-color: #1e1e1e;
  }
  /* make static stickers slightly more readable */
  /*
  ._2poz[style*="sticker"] {
    background-color: #333;
    border-radius: 5px;
  }
  */
  /* messenger thumb up stickers */
  ._576q {
    -webkit-filter: brightness(75%);
    filter: brightness(75%);
  }
  /* facebook-removed messages et al */
  ._4sp8 .uiBoxYellow {
    background-color: #662;
  }
  /* code bubbles */
  ._wu0 {
    background-color: #181818 !important;
    border-color: #282828 !important;
  }
  /* new messages notice */
  ._4zws {
    background-color: #444 !important;
  }

  /* Messenger icon */
  ._2poo {
    border-radius: 50%;
    box-shadow: inset 0 0 0 3px #0084ff;
  }
  /* Facebook icon */
  ._2pop {
    border-radius: 50%;
    box-shadow: inset 0 0 0 3px #929292;
  }
  /* Messenger/Facebook icon - Draw dark grey border over white border */
  ._2pon:after {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border-radius: 50%;
    border: 2px solid #282828;
  }
  /* Messenger/Facebook icons within the main wrapper */
  ._4sp8 ._2pon:after {
    border-color: #1e1e1e;
  }

  /* convo info, user list */
  ._4_j5, ._5l37 {
    background-color: #282828 !important;
  }
  ._4_j5 {
    border-left: none !important;
  }
  /* convo name, mute label, user in user list, section headings */
  ._2jnv,._2jnx,._2jnz,._2jnx ._30e7 ._5j5f, ._3szq, ._364g, ._1lj0 {
    color: #ddd !important;
  }

  /* convo list */
  ._li ._1enh {
    /* fix convo list hiders */
    background-color: #1e1e1e;
  }
  /* inactive convo */
  ._1ht1 {
    background-color: #222 !important;
  }
  /* unread convo */
  ._1ht1._1ht3 {
    background-color: #1c2e4a !important;
    transition: background-color .5s;
  }
  /* active convo */
  ._1ht1._1ht2 {
    background-color: #2d2d30 !important;
  }
  /* convo name */
  ._1ht6, ._3q34 {
    color: #eee !important;
  }
  /* group chat icon dps */
  ._57pl, ._57pm {
    border-color: transparent !important;
  }
  /* message request from */
  ._2kt ._3xsd {
    color: #ddd !important;
  }
  /* timestamp */
  ._1ht7.timestamp {
    color: #999;
  }
  ._1ht3 ._1ht7 {
    color: #0084cc !important;
  }
  /* convo new message */
  ._1ht3 ._1htf {
    color: #ddd !important;
  }
  /* search header */
  ._5t4c, ._225b {
    background-color: #1e1e1e !important;
  }
  /* search keyboard selection */
  ._1k1p {
    background-color: #1e1e1e !important;
  }
  /* people list self online status */
  ._1u5d {
    background-color: transparent !important;
  }
  /* people list section tabs */
  ._2lp- {
    border-color: #0066aa !important;
  }
  ._48uj {
    background-color: #0066aa !important;
  }

  /* those menus and composer dialogs though */
  ._53ij, ._54nf, ._293j, ._4lh2 {
    background-color: #333 !important;
  }
  ._5r8a._5r8b, ._1uwz, ._3rh0 {
    background-color: #222 !important;
  }
  ._2i-c ._54nf ._54nh, ._4lh2, ._5jn1 {
    color: #ddd !important;
  }
  ._4lha ._4lhc, ._4lh7 {
    color: #aaa !important;
  }
  ._2i-c ._54ne ._54nh, ._2i-c ._54ne ._54nc, ._2i-c ._54ne {
    background-color: #0066aa !important;
  }
  /* more stickers */
  ._5r8e, ._5r86, ._37wu, ._37wv {
    border-color: #222;
  }
  ._eb3::before {
    background-color: #222;
  }
  ._3mts .uiScrollableArea.contentAfter::after,
  ._5r8l .uiScrollableArea.contentAfter::after {
    background-image: linear-gradient(transparent, #333);
  }
  /* sticker search bar */
  ._2pgc {
    background-color: #222 !important;
    border-color: rgba(255, 255, 255, 0.2) !important;
  }
  /* sticker and games buttons */
  ._4rv6, ._4ce_ {
    -webkit-filter: invert(1);
    filter: invert(1);
    opacity: .6 !important;
  }
  /* menu dropdown triangles */
  ._53ik ._53io, ._53il ._53io {
    -webkit-filter: brightness(20%);
    filter: brightness(20%);
  }
  /* delivery indicators */
  ._3i_m ._9ah ._57e_ {
    color: #1e1e1e !important;
  }
  /* misc icons */
  ._5iwm ._58ak::before,
  ._fl3:not(._20nb), ._4-0h, ._57gs, label > input + span::before {
    -webkit-filter: brightness(80%);
    filter: brightness(80%);
  }
  ._23ct, ._2xme,
  .sp_-dCYIpyXIre.sx_262edb,
  :not(._3no3) > ._uwa, ._5jdr ._5jds,
  ._5nxe .img, ._2t5t {
    -webkit-filter: invert(1);
    filter: invert(1);
  }

  /* messenger dialogs, very important */
  ._59s7 {
    background-color: #222;
    color: #eee;
  }
  ._4-hz, ._4eby, ._4jgp ._4jgu, ._12zw {
    background-color: #222 !important;
  }
  ._374c, ._4jgs, ._2c9i ._19jt, ._51l0 .uiInputLabel .__rm + .uiInputLabelLabel,
  ._5raa, ._5rab, ._4nv_ {
    color: #ddd !important;
  }
  /* chat emoji picker: selected emoji */
  ._-lj ._4rlt {
    background-color: #333 !important;
    border-color: #666 !important;
  }
  /* reactions list dialog: emoji list */
  ._koh {
    border-bottom-color: #333 !important;
  }
  ._koh > li:not(.selected) {
    color: #aaa;
  }
  /* reactions list dialog: emoji picture overlay */
  ._3s-4 {
    background-color: #222 !important;
  }
  /* report issue dialog, even more so */
  /* dialog head */
  ._4-i0 {
    background-color: #333 !important;
    border-bottom-color: #2e2e2e;
  }
  /* dialog heading, checkbox label */
  ._4-i0 ._52c9, ._5r5c ._5rq_, ._uvt {
    color: #ddd !important;
  }
  /* dialog body, footer */
  div._4-i2, div._5a8u {
    background-color: #222 !important;
    color: #eee;
  }
  ._4t2a {
    background-color: #222;
  }
  ._4-u8 {
    background-color: transparent !important;
  }
  /* event plan dialog: input labels, responses */
  ._4xd5, ._38wl, ._4x79 {
    color: rgba(255, 255, 255, .6) !important;
  }
  /* image info */
  ._2zn2 {
    color: rgba(255, 255, 255, .4) !important;
  }
  ._2zn6 {
    color: rgba(255, 255, 255, .6) !important;
  }
  /* sticker store */
  ._5rai {
    color: #eee !important;
  }
  ._4-u2 {
    border-color: rgba(255, 255, 255, .2) !important;
  }
  /* what about normal facebook dialogs? */
  ._t {
    background-color: #222 !important;
    color: #eee;
  }
  .fcb {
    color: white !important;
  }
  ._c24 {
    color: #ccc !important;
  }
  .uiBoxGray {
    background-color: #333 !important;
    border-color: #2e2e2e;
  }
  #captcha .captcha_refresh {
    color: lightgrey !important;
  }

  /* login page */
  ._3v_p, ._3v_o {
    background-color: #222 !important;
  }
  ._3v_p ._5hy4, ._3v_o ._5hy4 {
    color: #eee !important;
  }
  ._3v_p ._43di, ._3v_o ._43di, ._3v_p ._3403, ._3v_o ._3403 {
    color: #ddd !important;
  }
  ._3v_p ._210j ._43dj .uiInputLabelLabel, ._59h8, ._3v_p ._59h7 ._5hy9 {
    color: #aaa !important;
  }
  ._3v_p ._3v_w ._2m_r, ._3v_p ._5s4n ._2m_r {
    background-color: #0066aa !important;
  }

  /* call page */
  ._17cj, ._17cj ._3jne, ._38jq {
    background-color: #1e1e1e !important;
  }
  ._17cj ._3jnu, ._17cj ._3jnv, ._fjq {
    color: rgba(255, 255, 255, .4) !important;
  }
  ._17cj ._4j_k, ._fjp {
    color: #eee !important;
  }

  /* stuff that should be grey */
  ._4k7a, ._67tw, ._ih3, ._3tl0, ._3tl1 ._10w4, ._497p, ._3x6v, ._2v6o, ._3tky, ._5rh4, ._5qsj, ._jf4 ._jf3, ._5i_d .__6m, ._2y8z,
  ._4g0h, ._3xcx, ._225b, ._3q35, ._2r2v, ._2n1t, ._1n-e, ._3eus, ._2wy4, ._1u5d ._1u5k, ._3ggt,
  ._17cj ._2ze8, ._17cj ._cen, ._5sr7, ._4nw0 {
    color: rgba(255, 255, 255, .6) !important;
  }
`);