(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{423:function(t,a,s){"use strict";s.r(a);var e=s(38),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"api-guide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-guide"}},[t._v("#")]),t._v(" API Guide")]),t._v(" "),s("h2",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),s("ul",[s("li",[t._v("All requests require a "),s("code",[t._v("Content-Type")]),t._v(" of "),s("code",[t._v("application/json")]),t._v(".")]),t._v(" "),s("li",[t._v("The API is located at https://nextcloud.local/index.php/apps/libresign/api/v1.0")]),t._v(" "),s("li",[t._v("All request parameters are required, unless otherwise specified")])]),t._v(" "),s("h2",{attrs:{id:"examples-on-insomnia"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples-on-insomnia"}},[t._v("#")]),t._v(" Examples on Insomnia")]),t._v(" "),s("p",[t._v("You can "),s("a",{attrs:{href:"Insomnia_2021-11-24.json"}},[t._v("download here")]),t._v(" an example of request to API.")]),t._v(" "),s("h2",{attrs:{id:"headers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#headers"}},[t._v("#")]),t._v(" Headers")]),t._v(" "),s("p",[t._v("Read https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization")]),t._v(" "),s("p",[t._v("Example:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -X POST "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  http://localhost/index.php/apps/libresign/api/0.1/webhook/register "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -H "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Accept: application/json'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -H "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Basic YWRtaW46YWRtaW4='")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -H "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v("\n  -d "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n\t"file": {\n\t\t"url": "https://test.coop/test.pdf"\n\t},\n\t"name": "test",\n\t"callback": "https://test.coop/callbackWebhook",\n\t"users": [\n\t\t{\n\t\t\t"display_name": "Jhon Doe",\n\t\t\t"email": "jhondoe@test.coop",\n\t\t\t"description": "Lorem ipsum"\n\t\t}\n\t]\n}\'')]),t._v("\n")])])]),s("h2",{attrs:{id:"endpoints"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#endpoints"}},[t._v("#")]),t._v(" Endpoints")]),t._v(" "),s("p",[s("a",{attrs:{href:"api"}},[t._v("Api Documentation")])]),t._v(" "),s("h1",{attrs:{id:"sign-flow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sign-flow"}},[t._v("#")]),t._v(" Sign flow")]),t._v(" "),s("h3",{attrs:{id:"request-signature"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-signature"}},[t._v("#")]),t._v(" Request signature")]),t._v(" "),s("p",[t._v("POST /sign/register")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --request POST "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --url http://localhost/apps/libresign/api/0.1/sign/register "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Basic YWRtaW46YWRtaW4='")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --data "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n\t"file": {\n\t\t"base64": "JVBERi0xLjYKJcOkw7zDtsOfCjIgMCBvYmoKPDwvTGVuZ3RoIDMgMCBSL0ZpbHRlci9GbGF0ZURlY29kZT4+CnN0cmVhbQp4nDPQM1Qo5ypUMFAw0DMwslAwtTTVMzIxV7AwMdSzMDNUKErlCtdSyOMyVADBonQuA4iUhaVCLheKYqBIDlw7xLAcuLEgFlwVVwZXmhZXoAIAI+sZGAplbmRzdHJlYW0KZW5kb2JqCgozIDAgb2JqCjg2CmVuZG9iagoKNSAwIG9iago8PAo+PgplbmRvYmoKCjYgMCBvYmoKPDwvRm9udCA1IDAgUgovUHJvY1NldFsvUERGL1RleHRdCj4+CmVuZG9iagoKMSAwIG9iago8PC9UeXBlL1BhZ2UvUGFyZW50IDQgMCBSL1Jlc291cmNlcyA2IDAgUi9NZWRpYUJveFswIDAgNTk1LjI3NTU5MDU1MTE4MSA4NDEuODg5NzYzNzc5NTI4XS9Hcm91cDw8L1MvVHJhbnNwYXJlbmN5L0NTL0RldmljZVJHQi9JIHRydWU+Pi9Db250ZW50cyAyIDAgUj4+CmVuZG9iagoKNCAwIG9iago8PC9UeXBlL1BhZ2VzCi9SZXNvdXJjZXMgNiAwIFIKL01lZGlhQm94WyAwIDAgNTk1IDg0MSBdCi9LaWRzWyAxIDAgUiBdCi9Db3VudCAxPj4KZW5kb2JqCgo3IDAgb2JqCjw8L1R5cGUvQ2F0YWxvZy9QYWdlcyA0IDAgUgovT3BlbkFjdGlvblsxIDAgUiAvWFlaIG51bGwgbnVsbCAwXQo+PgplbmRvYmoKCjggMCBvYmoKPDwvQ3JlYXRvcjxGRUZGMDA0NDAwNzIwMDYxMDA3Nz4KL1Byb2R1Y2VyPEZFRkYwMDRDMDA2OTAwNjIwMDcyMDA2NTAwNEYwMDY2MDA2NjAwNjkwMDYzMDA2NTAwMjAwMDM3MDAyRTAwMzA+Ci9DcmVhdGlvbkRhdGUoRDoyMDIxMDIyMzExMDgwOS0wMycwMCcpPj4KZW5kb2JqCgp4cmVmCjAgOQowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAyNzAgMDAwMDAgbiAKMDAwMDAwMDAxOSAwMDAwMCBuIAowMDAwMDAwMTc2IDAwMDAwIG4gCjAwMDAwMDA0MzggMDAwMDAgbiAKMDAwMDAwMDE5NSAwMDAwMCBuIAowMDAwMDAwMjE3IDAwMDAwIG4gCjAwMDAwMDA1MzYgMDAwMDAgbiAKMDAwMDAwMDYxOSAwMDAwMCBuIAp0cmFpbGVyCjw8L1NpemUgOS9Sb290IDcgMCBSCi9JbmZvIDggMCBSCi9JRCBbIDw1RkQ4MDlEMTdFODMwQUU5OTRDODkxNDVBMTMwNUQyQz4KPDVGRDgwOUQxN0U4MzBBRTk5NEM4OTE0NUExMzA1RDJDPiBdCi9Eb2NDaGVja3N1bSAvRDZBQThGQTBBQjMwODg2QkQ5ODU0QzYyMTg5QjI2NDQKPj4Kc3RhcnR4cmVmCjc4NQolJUVPRgo="\n\t},\n\t"status": 0,\n\t"name": "Contract",\n\t"users": [\n\t\t{\n\t\t\t"email": "a@b.c"\n\t\t\t"displayName": "User Name"\n\t\t}\n\t]\n}\'')]),t._v("\n")])])]),s("p",[t._v("After this request the file will receive the status "),s("code",[t._v("draft")]),t._v(" and you need change the status of the document to notify all users.")]),t._v(" "),s("p",[t._v("You will receive the fileId or UUID, store this data to create visible elements.")]),t._v(" "),s("h3",{attrs:{id:"validate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#validate"}},[t._v("#")]),t._v(" Validate")]),t._v(" "),s("p",[t._v("Get data of a specific file, you can use "),s("code",[t._v("file_id")]),t._v(" or "),s("code",[t._v("uuid")]),t._v(" on path, both data you will receive after request to "),s("code",[t._v("POST /sign/register")])]),t._v(" "),s("p",[t._v("The association between user and file will result on a "),s("code",[t._v("fileUserId")]),t._v(". You will need this to sign the document or define the page and coordinates of place that the signature of the user will be filled.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --request GET "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --url http://localhost/apps/libresign/api/0.1/file/validate/file_id/1995 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Basic YWRtaW46YWRtaW4='")]),t._v("\n")])])]),s("h3",{attrs:{id:"list-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#list-files"}},[t._v("#")]),t._v(" List files")]),t._v(" "),s("p",[t._v("List all LibreSign files")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --request GET "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --url http://localhost/apps/libresign/api/0.1/file/list "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Basic YWRtaW46YWRtaW4='")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n")])])]),s("h3",{attrs:{id:"visible-elements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#visible-elements"}},[t._v("#")]),t._v(" Visible elements")]),t._v(" "),s("h4",{attrs:{id:"create"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create"}},[t._v("#")]),t._v(" Create")]),t._v(" "),s("p",[t._v("POST /file/{uuid}/elements")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --request POST "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --url http://localhost/apps/libresign/api/0.1/file/88968195-6f0a-4036-ac05-9680feb109e4/elements "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Basic YWRtaW46YWRtaW4='")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --data "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n    "coordinates": {\n        "top": 188,\n        "left": 4,\n        "width": 370,\n        "height": 90,\n        "page": 1\n    },\n    "type": "signature",\n    "fileUserId": 51\n}\'')]),t._v("\n")])])]),s("h4",{attrs:{id:"update"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update"}},[t._v("#")]),t._v(" Update")]),t._v(" "),s("p",[t._v("PATCH /file/{uuid}/elements/{elementId}")]),t._v(" "),s("p",[t._v("The UUID you will receive when you will do a request to "),s("code",[t._v("POST /sign/register")]),t._v(" and the "),s("code",[t._v("fileUserId")]),t._v(" is the relation between an user and the file to sign. You can check the "),s("code",[t._v("fileUserId")]),t._v(" doing a request to /validate")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --request PATCH "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --url http://localhost/apps/libresign/api/0.1/file/87e5d5f0-1a9b-48cd-8146-0ee8b3aafd83/elements/1 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Basic YWRtaW46YWRtaW4='")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --data "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n    "coordinates": {\n        "top": 188,\n        "left": 4,\n        "width": 370,\n        "height": 90,\n        "page": 1\n    },\n    "type": "signature",\n    "fileUserId": 1\n}\'')]),t._v("\n")])])]),s("h4",{attrs:{id:"delete"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delete"}},[t._v("#")]),t._v(" Delete")]),t._v(" "),s("p",[t._v("DELETE /file/{uuid}/elements/{elementId}")]),t._v(" "),s("h3",{attrs:{id:"define-sign-password"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#define-sign-password"}},[t._v("#")]),t._v(" Define sign password")]),t._v(" "),s("p",[t._v("If the system is enabled to sign using password, the user will need to create a password to sign the file.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --request POST "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --url http://localhost/apps/libresign/api/0.1/account/signature "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Basic YWRtaW46YWRtaW4='")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --data "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n  "signPassword": "password"\n}\'')]),t._v("\n")])])]),s("h3",{attrs:{id:"changing-status"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#changing-status"}},[t._v("#")]),t._v(" Changing status")]),t._v(" "),s("p",[t._v("You will need change the status of a file from draft to able to sign. When you change the status, all users will receive an email with URL to create account if the user don't exists or authenticate and sign the file.")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("PS")]),t._v(": The URL that all users will receive have an UUID, this is the UUID of the relation between the file and user, don't is the UUID of file.")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --request PATCH "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --url http://localhost/apps/libresign/api/0.1/sign/register "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Basic YWRtaW46YWRtaW4='")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --data "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n\t"file": {\n\t\t"fileId": 1995\n\t},\n\t"status": 1\n}\'')]),t._v("\n")])])]),s("h3",{attrs:{id:"define-user-signature"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#define-user-signature"}},[t._v("#")]),t._v(" Define user signature")]),t._v(" "),s("p",[t._v("This is necessary for all user to store the own signature or initial.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --request POST "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --url http://localhost/apps/libresign/api/0.1/account/signature/elements "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Basic YWRtaW46YWRtaW4='")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --data "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n  "elements": [\n    {\n      "type": "signature",\n      "file": {\n        "base64": "iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAIAAACzY+a1AAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TRSkVQTtIcchQnSyIFREnrUIRKpRaoVUHk0u/oElDkuLiKLgWHPxYrDq4OOvq4CoIgh8gbm5Oii5S4v+SQosYD4778e7e4+4dIDQqTDW7xgFVs4x0Ii5mc6tizysCCGMAMcxIzNTnUqkkPMfXPXx8vYvyLO9zf44+JW8ywCcSzzLdsIg3iKc2LZ3zPnGIlSSF+Jx4zKALEj9yXXb5jXPRYYFnhoxMep44RCwWO1juYFYyVOJJ4oiiapQvZF1WOG9xVis11ronf2Ewr60sc53mMBJYxBJSECGjhjIqsBClVSPFRJr24x7+sONPkUsmVxmMHAuoQoXk+MH/4He3ZiE24SYF40D3i21/jAA9u0Czbtvfx7bdPAH8z8CV1vZXG8D0J+n1thY5Avq3gYvrtibvAZc7wNCTLhmSI/lpCoUC8H5G35QDBm+BwJrbW2sfpw9AhrpK3gAHh8BokbLXPd7d29nbv2da/f0AA+Zy4dveUIkAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQflChoSNCP5pnpQAAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAAFhJREFUeNrtwTEBAAAAwqD1T20Hb6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAxCFEAAZDlHEoAAAAASUVORK5CYII="\n      }\n    },\n    {\n      "type": "initial",\n      "file": {\n        "base64": "iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAIAAACzY+a1AAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TRSkVQTtIcchQnSyIFREnrUIRKpRaoVUHk0u/oElDkuLiKLgWHPxYrDq4OOvq4CoIgh8gbm5Oii5S4v+SQosYD4778e7e4+4dIDQqTDW7xgFVs4x0Ii5mc6tizysCCGMAMcxIzNTnUqkkPMfXPXx8vYvyLO9zf44+JW8ywCcSzzLdsIg3iKc2LZ3zPnGIlSSF+Jx4zKALEj9yXXb5jXPRYYFnhoxMep44RCwWO1juYFYyVOJJ4oiiapQvZF1WOG9xVis11ronf2Ewr60sc53mMBJYxBJSECGjhjIqsBClVSPFRJr24x7+sONPkUsmVxmMHAuoQoXk+MH/4He3ZiE24SYF40D3i21/jAA9u0Czbtvfx7bdPAH8z8CV1vZXG8D0J+n1thY5Avq3gYvrtibvAZc7wNCTLhmSI/lpCoUC8H5G35QDBm+BwJrbW2sfpw9AhrpK3gAHh8BokbLXPd7d29nbv2da/f0AA+Zy4dveUIkAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQflChoSNCP5pnpQAAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAAFhJREFUeNrtwTEBAAAAwqD1T20Hb6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAxCFEAAZDlHEoAAAAASUVORK5CYII="\n      }\n    }\n  ]\n}\'')]),t._v("\n")])])]),s("h3",{attrs:{id:"sign-method"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sign-method"}},[t._v("#")]),t._v(" Sign method")]),t._v(" "),s("p",[t._v("You can change the sign method between "),s("code",[t._v("password")]),t._v(", "),s("code",[t._v("email")]),t._v(", "),s("code",[t._v("sms")]),t._v(", "),s("code",[t._v("telegram")]),t._v(" or "),s("code",[t._v("signal")]),t._v(".")]),t._v(" "),s("p",[t._v("To sign using SMS you will need install the app "),s("code",[t._v("twofactor_gateway")]),t._v(" and configure the gateway to SMS.")]),t._v(" "),s("p",[t._v("Example:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("docker-compose "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" --user www-data nextcloud php occ config:app:set libresign sign_method --value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("password\n\ndocker-compose "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" --user www-data nextcloud php occ config:app:set libresign sign_method --value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("email\n\ndocker-compose "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" --user www-data nextcloud php occ config:app:set libresign sign_method --value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("sms\n")])])]),s("h4",{attrs:{id:"sms"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sms"}},[t._v("#")]),t._v(" SMS")]),t._v(" "),s("p",[t._v("Configuring the SMS gateway.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("docker-compose "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" --user www-data nextcloud php occ twofactorauth:gateway:configure sms\n")])])]),s("p",[t._v("I recomend to use the "),s("a",{attrs:{href:"https://github.com/librecodecoop/playsms-docker",target:"_blank",rel:"noopener noreferrer"}},[t._v("playSMS"),s("OutboundLink")],1),t._v(" as a SMS gateway.")]),t._v(" "),s("h4",{attrs:{id:"define-phone-number"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#define-phone-number"}},[t._v("#")]),t._v(" Define phone number")]),t._v(" "),s("p",[t._v("To sign using SMS the user will need define the phone number.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --request PUT "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --url http://localhost/settings/users/admin/settings "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Basic YWRtaW46YWRtaW4='")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --data "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n\t"phone": "+1987654321"\n}\'')]),t._v("\n")])])]),s("h4",{attrs:{id:"request-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-code"}},[t._v("#")]),t._v(" Request code")]),t._v(" "),s("p",[t._v("If the sign method is a code, the authenticated user will need request a code to sign the file.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --request POST "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --url http://localhost/apps/libresign/api/0.1/sign/file_id/3051/code "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Basic YWRtaW46YWRtaW4='")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n")])])]),s("h4",{attrs:{id:"sign-using-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sign-using-code"}},[t._v("#")]),t._v(" Sign using code")]),t._v(" "),s("p",[t._v("To sign you only will need send the code that you received by email or SMS.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --request POST "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --url http://localhost/apps/libresign/api/0.1/sign/file_id/1995 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Basic YWRtaW46YWRtaW4='")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --data "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n  "code": "5150"\n}\'')]),t._v("\n")])])]),s("p",[t._v("You also can define the relation between the user and the file elements. You can receive the list of elements on validate endpoint and you will need create a relation between the user to sign and the element.")])])}),[],!1,null,null,null);a.default=n.exports}}]);