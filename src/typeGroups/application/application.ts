import type { TApplicationTypeGroup } from './types'

import { createTypeGroup } from '../createTypeGroup'

export const application: TApplicationTypeGroup = createTypeGroup(
  'application',
  {
    atomXml: 'atom+xml',
    atomcatXml: 'atomcat+xml',
    ecmascript: 'ecmascript',
    epubZip: 'epub+zip',
    gzip: 'gzip',
    javaArchive: 'java-archive',
    javascript: 'javascript',
    json: 'json',
    ldJson: 'ld+json',
    mp4: 'mp4',
    msword: 'msword',
    octetStream: 'octet-stream',
    ogg: 'ogg',
    pdf: 'pdf',
    pkcs7Mime: 'pkcs7-mime',
    pkcs7Signature: 'pkcs7-signature',
    pkcs8: 'pkcs8',
    pkcs10: 'pkcs10',
    postscript: 'postscript',
    rdfXml: 'rdf+xml',
    rssXml: 'rss+xml',
    rtf: 'rtf',
    smilXml: 'smil+xml',
    vndAmazonEbook: 'vnd.amazon.ebook',
    vndAppleInstallerXml: 'vnd.apple.installer+xml',
    vndMozillaXulXml: 'vnd.mozilla.xul+xml',
    vndMsExcel: 'vnd.ms-excel',
    vndMsFontobject: 'vnd.ms-fontobject',
    vndMsPowerpoint: 'vnd.ms-powerpoint',
    // eslint-disable-next-line id-length
    vndOasisOpendocumentPresentation: 'vnd.oasis.opendocument.presentation',
    // eslint-disable-next-line id-length
    vndOasisOpendocumentSpreadsheet: 'vnd.oasis.opendocument.spreadsheet',
    vndOasisOpendocumentText: 'vnd.oasis.opendocument.text',
    // eslint-disable-next-line id-length
    vndOpenxmlformatsOfficedocumentPresentationmlPresentation:
      'vnd.openxmlformats-officedocument.presentationml.presentation',
    // eslint-disable-next-line id-length
    vndOpenxmlformatsOfficedocumentSpreadsheetmlSheet:
      'vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    // eslint-disable-next-line id-length
    vndOpenxmlformatsOfficedocumentWordprocessingmlDocument:
      'vnd.openxmlformats-officedocument.wordprocessingml.document',
    vndRar: 'vnd.rar',
    vndVisio: 'vnd.visio',
    x7zCompressed: 'x-7z-compressed',
    xAbiword: 'x-abiword',
    xBzip: 'x-bzip',
    xBzip2: 'x-bzip2',
    xCdf: 'x-cdf',
    xCsh: 'x-csh',
    xFontOff: 'x-font-off',
    xFreearc: 'x-freearc',
    xHttpdPhp: 'x-httpd-php',
    xPkcs12: 'x-pkcs12',
    xSh: 'x-sh',
    xShockwaveFlash: 'x-shockwave-flash',
    xSilverlightApp: 'x-silverlight-app',
    xTar: 'x-tar',
    xWwwFormUrlencoded: 'x-www-form-urlencoded',
    xhtmlXml: 'xhtml+xml',
    xml: 'xml',
    xmlDtd: 'xml-dtd',
    xsltXml: 'xslt+xml',
    zip: 'zip'
  }
)
