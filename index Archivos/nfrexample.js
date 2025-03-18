istar.models = istar.models || {};  //prevents overriding the variable, while also preventing working with a null variable

istar.models.welcome = {
    "actors": [],
    "orphans": [
        {
            "id": "b79575b1-2b32-466b-bd0f-2f2f41cbcf41",
            "text": "Security",
            "type": "nfr.NFR",
            "x": 204,
            "y": 213,
            "customProperties": {
                "Description": ""
            }
        },
        {
            "id": "cdfac142-9e92-403f-a3c9-b1858a5e6e77",
            "text": "Confidenciality",
            "type": "nfr.NFR",
            "x": 172,
            "y": 302,
            "customProperties": {
                "Description": ""
            }
        },
        {
            "id": "c578c382-617b-4f83-9454-5f0019d759c1",
            "text": "Authentication",
            "type": "nfr.NFR",
            "x": 286,
            "y": 293,
            "customProperties": {
                "Description": ""
            }
        },
        {
            "id": "67e5a5df-ff16-4fae-bbfa-235881aa03e1",
            "text": "Encrypt with RSA 128 bits",
            "type": "nfr.Operationalization",
            "x": 128,
            "y": 422,
            "customProperties": {
                "Description": ""
            }
        },
        {
            "id": "1f16044e-7b7a-49c3-b8ac-8b3bb2410b3c",
            "text": "Encrypt with RSA 260 bits",
            "type": "nfr.Operationalization",
            "x": 229,
            "y": 457,
            "customProperties": {
                "Description": ""
            }
        },
        {
            "id": "77371218-ae0f-4043-b500-9c75894788ee",
            "text": "Can be broken quickly",
            "type": "nfr.Claim",
            "x": 31,
            "y": 342,
            "customProperties": {
                "Description": ""
            }
        },
        {
            "id": "ba10f8ed-95c2-4b35-b7da-9d31c4750a0e",
            "text": "Usability",
            "type": "nfr.NFR",
            "x": 431,
            "y": 140,
            "customProperties": {
                "Description": ""
            }
        },
        {
            "id": "457b4872-538b-458d-8bd2-71564f69f1ee",
            "text": "Login with Username and Password",
            "type": "nfr.Operationalization",
            "x": 292,
            "y": 402,
            "customProperties": {
                "Description": ""
            }
        },
        {
            "id": "8d514b0b-be68-418b-bb80-3d119509c939",
            "text": "Example of a big, colored NFR",
            "type": "nfr.NFR",
            "x": 466,
            "y": 476,
            "customProperties": {
                "Description": "This example shows lack of distortion on resized elements"
            }
        }
    ],
    "dependencies": [],
    "links": [
        {
            "id": "34099a1a-dd1f-42aa-97ac-9b66612dbf12",
            "type": "nfr.AndRefinementLink",
            "source": "cdfac142-9e92-403f-a3c9-b1858a5e6e77",
            "target": "b79575b1-2b32-466b-bd0f-2f2f41cbcf41"
        },
        {
            "id": "b0681ddc-b225-4c46-9b46-f2ec98ad6174",
            "type": "nfr.AndRefinementLink",
            "source": "c578c382-617b-4f83-9454-5f0019d759c1",
            "target": "b79575b1-2b32-466b-bd0f-2f2f41cbcf41"
        },
        {
            "id": "41e1958b-0636-4be3-ba5f-5d62eb96b4f2",
            "type": "nfr.ContributionLink",
            "source": "1f16044e-7b7a-49c3-b8ac-8b3bb2410b3c",
            "target": "cdfac142-9e92-403f-a3c9-b1858a5e6e77",
            "label": "+"
        },
        {
            "id": "3a57f4d9-a905-4b55-9d17-82e951a79558",
            "type": "nfr.ContributionLink",
            "source": "67e5a5df-ff16-4fae-bbfa-235881aa03e1",
            "target": "cdfac142-9e92-403f-a3c9-b1858a5e6e77",
            "label": "–"
        },
        {
            "id": "07253b02-57e8-44aa-8b61-2e08b5710198",
            "type": "nfr.ContributionLink",
            "source": "457b4872-538b-458d-8bd2-71564f69f1ee",
            "target": "c578c382-617b-4f83-9454-5f0019d759c1",
            "label": "+"
        },
        {
            "id": "475c8651-9281-4653-855a-e268868173ca",
            "type": "nfr.CorrelationLink",
            "source": "c578c382-617b-4f83-9454-5f0019d759c1",
            "target": "ba10f8ed-95c2-4b35-b7da-9d31c4750a0e",
            "label": "some+"
        },
        {
            "id": "fb3215c7-154c-41ab-bcf8-f2145aa8af1c",
            "type": "nfr.ArgumentLink",
            "source": "77371218-ae0f-4043-b500-9c75894788ee",
            "target": "3a57f4d9-a905-4b55-9d17-82e951a79558"
        }
    ],
    "display": {
        "cdfac142-9e92-403f-a3c9-b1858a5e6e77": {
            "width": 103.08329772949219,
            "height": 52.986724853515625
        },
        "c578c382-617b-4f83-9454-5f0019d759c1": {
            "width": 97.0841064453125,
            "height": 60.985260009765625
        },
        "67e5a5df-ff16-4fae-bbfa-235881aa03e1": {
            "width": 121.08137512207031,
            "height": 53.9871826171875
        },
        "1f16044e-7b7a-49c3-b8ac-8b3bb2410b3c": {
            "width": 116.08197021484375,
            "height": 55.9866943359375
        },
        "457b4872-538b-458d-8bd2-71564f69f1ee": {
            "width": 145.07916259765625,
            "height": 54.487335205078125
        },
        "8d514b0b-be68-418b-bb80-3d119509c939": {
            "backgroundColor": "#FAD0FA",
            "width": 494.0437927246094,
            "height": 283.9316711425781
        },
        "475c8651-9281-4653-855a-e268868173ca": {
            "vertices": [
                {
                    "x": 459,
                    "y": 263
                }
            ]
        }
    },
    "tool": "dsm3-goals",
    "metamodelVersion": "1.0",
    "saveDate": "Sun, 28 Apr 2019 23:24:47 GMT",
    "diagram": {
        "width": 2000,
        "height": 1300,
        "name": "Example NFR model",
        "customProperties": {
            "Description": "This tool supports two things that are often troublesome to develop with generic modelling frameworks:\n - draw complex shapes (clouds) without distorting when they are resized\n - create links from an element to a link (claim links)"
        }
    }
};