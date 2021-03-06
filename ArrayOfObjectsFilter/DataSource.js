var dataSource = [
    {
        "ID": 0,
        "City": "Leyner",
        "State": "MA",
        "Date": "2014-01-07T11:18:30+00:00",
        "HighTemp": 105,
        "LowTemp": 2,
        "Precipitation": "0.23",
        "Humidity": "0.37",
        "Wind": 78,
        "Description": "Partially Cloudy"
    },
    {
        "ID": 1,
        "City": "Leola",
        "State": "IN",
        "Date": "2005-07-06T06:11:30+00:00",
        "HighTemp": 68,
        "LowTemp": 11,
        "Precipitation": "0.67",
        "Humidity": "0.15",
        "Wind": 82,
        "Description": "Hail"
    },
    {
        "ID": 2,
        "City": "Strong",
        "State": "IL",
        "Date": "2011-10-07T02:48:56+00:00",
        "HighTemp": 100,
        "LowTemp": 59,
        "Precipitation": "0.8",
        "Humidity": "0.23",
        "Wind": 60,
        "Description": "Thunderstorms"
    },
    {
        "ID": 3,
        "City": "Marion",
        "State": "NE",
        "Date": "2014-01-02T21:18:59+00:00",
        "HighTemp": 84,
        "LowTemp": 41,
        "Precipitation": "0.67",
        "Humidity": "0.51",
        "Wind": 38,
        "Description": "Mostly Cloudy"
    },
    {
        "ID": 4,
        "City": "Dixonville",
        "State": "CO",
        "Date": "2011-09-18T05:45:17+00:00",
        "HighTemp": 66,
        "LowTemp": 54,
        "Precipitation": "0.35",
        "Humidity": "0.63",
        "Wind": 54,
        "Description": "Rain"
    },
    {
        "ID": 5,
        "City": "Turah",
        "State": "VA",
        "Date": "2013-02-06T17:55:58+00:00",
        "HighTemp": 104,
        "LowTemp": 29,
        "Precipitation": "0.34",
        "Humidity": "0.41",
        "Wind": 40,
        "Description": "Partially Cloudy"
    },
    {
        "ID": 6,
        "City": "Hall",
        "State": "KY",
        "Date": "2012-06-03T20:38:56+00:00",
        "HighTemp": 72,
        "LowTemp": 26,
        "Precipitation": "0.17",
        "Humidity": "0.28",
        "Wind": 28,
        "Description": "Snow"
    },
    {
        "ID": 7,
        "City": "Esmont",
        "State": "TN",
        "Date": "2012-08-14T15:51:57+00:00",
        "HighTemp": 89,
        "LowTemp": 16,
        "Precipitation": "0.58",
        "Humidity": "0.22",
        "Wind": 17,
        "Description": "Snow"
    },
    {
        "ID": 8,
        "City": "Oretta",
        "State": "WA",
        "Date": "2006-12-22T09:20:04+00:00",
        "HighTemp": 66,
        "LowTemp": 2,
        "Precipitation": "0.92",
        "Humidity": "0.38",
        "Wind": 22,
        "Description": "Sunny"
    },
    {
        "ID": 9,
        "City": "Bellamy",
        "State": "MO",
        "Date": "2001-10-23T20:34:29+00:00",
        "HighTemp": 105,
        "LowTemp": 59,
        "Precipitation": "0.08",
        "Humidity": "0.82",
        "Wind": 31,
        "Description": "Partially Cloudy"
    },
    {
        "ID": 10,
        "City": "Catharine",
        "State": "DE",
        "Date": "2014-06-27T04:47:23+00:00",
        "HighTemp": 83,
        "LowTemp": 20,
        "Precipitation": "0.06",
        "Humidity": "0.98",
        "Wind": 86,
        "Description": "Thunderstorms"
    },
    {
        "ID": 11,
        "City": "Accoville",
        "State": "ND",
        "Date": "2012-01-28T21:51:52+00:00",
        "HighTemp": 98,
        "LowTemp": 33,
        "Precipitation": "0.78",
        "Humidity": "0.57",
        "Wind": 5,
        "Description": "Mostly Cloudy"
    },
    {
        "ID": 12,
        "City": "Tibbie",
        "State": "MP",
        "Date": "2009-08-25T06:16:56+00:00",
        "HighTemp": 110,
        "LowTemp": 58,
        "Precipitation": "0.88",
        "Humidity": "0.68",
        "Wind": 35,
        "Description": "Snow"
    },
    {
        "ID": 13,
        "City": "Eastvale",
        "State": "NM",
        "Date": "2001-07-04T03:45:35+00:00",
        "HighTemp": 72,
        "LowTemp": 40,
        "Precipitation": "0.39",
        "Humidity": "0.41",
        "Wind": 64,
        "Description": "Mostly Cloudy"
    },
    {
        "ID": 14,
        "City": "Lorraine",
        "State": "PA",
        "Date": "2008-12-29T05:05:44+00:00",
        "HighTemp": 86,
        "LowTemp": 9,
        "Precipitation": "0.95",
        "Humidity": "0.85",
        "Wind": 8,
        "Description": "Mostly Cloudy"
    },
    {
        "ID": 15,
        "City": "Wikieup",
        "State": "AL",
        "Date": "2009-07-03T01:58:58+00:00",
        "HighTemp": 87,
        "LowTemp": 6,
        "Precipitation": "0.78",
        "Humidity": 1,
        "Wind": 9,
        "Description": "Flurries"
    },
    {
        "ID": 16,
        "City": "Brenton",
        "State": "ID",
        "Date": "2015-11-16T04:33:43+00:00",
        "HighTemp": 86,
        "LowTemp": 47,
        "Precipitation": "0.75",
        "Humidity": "0.12",
        "Wind": 5,
        "Description": "Rain"
    },
    {
        "ID": 17,
        "City": "Chamberino",
        "State": "VT",
        "Date": "2007-03-22T13:41:22+00:00",
        "HighTemp": 87,
        "LowTemp": 14,
        "Precipitation": "0.33",
        "Humidity": "0.95",
        "Wind": 55,
        "Description": "Flurries"
    },
    {
        "ID": 18,
        "City": "Marenisco",
        "State": "PR",
        "Date": "2010-05-07T00:09:17+00:00",
        "HighTemp": 108,
        "LowTemp": 6,
        "Precipitation": "0.41",
        "Humidity": "0.27",
        "Wind": 60,
        "Description": "Partially Cloudy"
    },
    {
        "ID": 19,
        "City": "Magnolia",
        "State": "MT",
        "Date": "2016-02-25T23:10:12+00:00",
        "HighTemp": 106,
        "LowTemp": 34,
        "Precipitation": "0.59",
        "Humidity": "0.51",
        "Wind": 6,
        "Description": "Sunny"
    },
    {
        "ID": 20,
        "City": "Southmont",
        "State": "ME",
        "Date": "2007-12-21T14:24:30+00:00",
        "HighTemp": 104,
        "LowTemp": 4,
        "Precipitation": "0.22",
        "Humidity": "0.71",
        "Wind": 12,
        "Description": "Sunny"
    },
    {
        "ID": 21,
        "City": "Newkirk",
        "State": "NJ",
        "Date": "2000-09-17T14:26:06+00:00",
        "HighTemp": 102,
        "LowTemp": 55,
        "Precipitation": "0.59",
        "Humidity": "0.58",
        "Wind": 59,
        "Description": "Flurries"
    },
    {
        "ID": 22,
        "City": "Lavalette",
        "State": "MS",
        "Date": "2011-01-14T12:14:58+00:00",
        "HighTemp": 61,
        "LowTemp": 36,
        "Precipitation": "0.95",
        "Humidity": "0.66",
        "Wind": 54,
        "Description": "Partially Cloudy"
    },
    {
        "ID": 23,
        "City": "Ebro",
        "State": "NY",
        "Date": "2013-09-05T01:19:44+00:00",
        "HighTemp": 93,
        "LowTemp": 31,
        "Precipitation": "0.41",
        "Humidity": "0.63",
        "Wind": 68,
        "Description": "Partially Cloudy"
    },
    {
        "ID": 24,
        "City": "Epworth",
        "State": "LA",
        "Date": "2009-07-28T22:30:09+00:00",
        "HighTemp": 101,
        "LowTemp": 41,
        "Precipitation": "0.77",
        "Humidity": "0.84",
        "Wind": 100,
        "Description": "Hail"
    },
    {
        "ID": 25,
        "City": "Hiko",
        "State": "PW",
        "Date": "2003-05-11T17:34:39+00:00",
        "HighTemp": 81,
        "LowTemp": 40,
        "Precipitation": "0.3",
        "Humidity": "0.2",
        "Wind": 76,
        "Description": "Rain"
    },
    {
        "ID": 26,
        "City": "Nash",
        "State": "RI",
        "Date": "2002-11-27T18:14:16+00:00",
        "HighTemp": 103,
        "LowTemp": 25,
        "Precipitation": "0.98",
        "Humidity": "0.85",
        "Wind": 36,
        "Description": "Flurries"
    },
    {
        "ID": 27,
        "City": "Olney",
        "State": "DC",
        "Date": "2001-04-19T08:44:53+00:00",
        "HighTemp": 75,
        "LowTemp": 31,
        "Precipitation": "0.77",
        "Humidity": "0.3",
        "Wind": 89,
        "Description": "Flurries"
    },
    {
        "ID": 28,
        "City": "Yorklyn",
        "State": "WV",
        "Date": "2007-08-18T22:08:15+00:00",
        "HighTemp": 65,
        "LowTemp": 17,
        "Precipitation": "0.04",
        "Humidity": "0.34",
        "Wind": 44,
        "Description": "Snow"
    },
    {
        "ID": 29,
        "City": "Lookingglass",
        "State": "NC",
        "Date": "2000-03-07T18:27:24+00:00",
        "HighTemp": 81,
        "LowTemp": 38,
        "Precipitation": "0.57",
        "Humidity": "0.18",
        "Wind": 19,
        "Description": "Flurries"
    },
    {
        "ID": 30,
        "City": "Linganore",
        "State": "OH",
        "Date": "2012-02-01T10:25:58+00:00",
        "HighTemp": 60,
        "LowTemp": 22,
        "Precipitation": "0.42",
        "Humidity": "0.31",
        "Wind": 37,
        "Description": "Snow"
    },
    {
        "ID": 31,
        "City": "Kylertown",
        "State": "OR",
        "Date": "2005-09-24T03:12:03+00:00",
        "HighTemp": 68,
        "LowTemp": 6,
        "Precipitation": "0.84",
        "Humidity": "0.15",
        "Wind": 78,
        "Description": "Hail"
    },
    {
        "ID": 32,
        "City": "Gratton",
        "State": "FM",
        "Date": "2012-12-15T01:47:41+00:00",
        "HighTemp": 105,
        "LowTemp": 6,
        "Precipitation": "0.2",
        "Humidity": "0.8",
        "Wind": 46,
        "Description": "Partially Cloudy"
    },
    {
        "ID": 33,
        "City": "Bethany",
        "State": "AZ",
        "Date": "2000-07-27T03:30:51+00:00",
        "HighTemp": 98,
        "LowTemp": 36,
        "Precipitation": "0.44",
        "Humidity": "0.96",
        "Wind": 69,
        "Description": "Rain"
    },
    {
        "ID": 34,
        "City": "Marshall",
        "State": "WY",
        "Date": "2000-01-01T07:54:34+00:00",
        "HighTemp": 106,
        "LowTemp": 6,
        "Precipitation": "0.32",
        "Humidity": "0.45",
        "Wind": 65,
        "Description": "Sunny"
    },
    {
        "ID": 35,
        "City": "Logan",
        "State": "AK",
        "Date": "2010-07-25T16:33:43+00:00",
        "HighTemp": 74,
        "LowTemp": 16,
        "Precipitation": "0.55",
        "Humidity": "0.56",
        "Wind": 87,
        "Description": "Mostly Cloudy"
    },
    {
        "ID": 36,
        "City": "Charco",
        "State": "UT",
        "Date": "2003-06-20T06:07:34+00:00",
        "HighTemp": 85,
        "LowTemp": 13,
        "Precipitation": "0.39",
        "Humidity": "0.97",
        "Wind": 8,
        "Description": "Thunderstorms"
    },
    {
        "ID": 37,
        "City": "Waterloo",
        "State": "HI",
        "Date": "2001-08-14T23:30:25+00:00",
        "HighTemp": 77,
        "LowTemp": 46,
        "Precipitation": "0.2",
        "Humidity": "0.99",
        "Wind": 72,
        "Description": "Rain"
    },
    {
        "ID": 38,
        "City": "Blackgum",
        "State": "GA",
        "Date": "2010-01-09T07:23:13+00:00",
        "HighTemp": 85,
        "LowTemp": 51,
        "Precipitation": "0.28",
        "Humidity": "0.94",
        "Wind": 88,
        "Description": "Rain"
    },
    {
        "ID": 39,
        "City": "Rockbridge",
        "State": "NV",
        "Date": "2000-10-16T01:24:54+00:00",
        "HighTemp": 98,
        "LowTemp": 15,
        "Precipitation": "0.68",
        "Humidity": "0.66",
        "Wind": 67,
        "Description": "Flurries"
    },
    {
        "ID": 40,
        "City": "Frizzleburg",
        "State": "MH",
        "Date": "2010-08-06T03:11:04+00:00",
        "HighTemp": 70,
        "LowTemp": 25,
        "Precipitation": "0.26",
        "Humidity": "0.89",
        "Wind": 47,
        "Description": "Thunderstorms"
    },
    {
        "ID": 41,
        "City": "Kidder",
        "State": "FL",
        "Date": "2016-07-21T20:40:47+00:00",
        "HighTemp": 84,
        "LowTemp": 6,
        "Precipitation": "0.55",
        "Humidity": "0.93",
        "Wind": 26,
        "Description": "Thunderstorms"
    },
    {
        "ID": 42,
        "City": "Broadlands",
        "State": "AS",
        "Date": "2014-11-03T23:33:15+00:00",
        "HighTemp": 89,
        "LowTemp": 26,
        "Precipitation": "0.8",
        "Humidity": "0.76",
        "Wind": 15,
        "Description": "Mostly Cloudy"
    },
    {
        "ID": 43,
        "City": "Oneida",
        "State": "SC",
        "Date": "2010-02-13T08:36:17+00:00",
        "HighTemp": 90,
        "LowTemp": 42,
        "Precipitation": "0.53",
        "Humidity": "0.67",
        "Wind": 94,
        "Description": "Mostly Cloudy"
    },
    {
        "ID": 44,
        "City": "Juarez",
        "State": "IA",
        "Date": "2000-05-14T02:10:18+00:00",
        "HighTemp": 88,
        "LowTemp": 18,
        "Precipitation": "0.78",
        "Humidity": "0.7",
        "Wind": 51,
        "Description": "Sunny"
    },
    {
        "ID": 45,
        "City": "Fingerville",
        "State": "KS",
        "Date": "2008-06-18T23:51:44+00:00",
        "HighTemp": 98,
        "LowTemp": 26,
        "Precipitation": "0.27",
        "Humidity": "0.52",
        "Wind": 25,
        "Description": "Partially Cloudy"
    },
    {
        "ID": 46,
        "City": "Sugartown",
        "State": "GU",
        "Date": "2010-06-30T05:30:42+00:00",
        "HighTemp": 78,
        "LowTemp": 31,
        "Precipitation": "0.48",
        "Humidity": "0.08",
        "Wind": 72,
        "Description": "Snow"
    },
    {
        "ID": 47,
        "City": "Healy",
        "State": "MD",
        "Date": "2009-03-14T14:46:26+00:00",
        "HighTemp": 88,
        "LowTemp": 31,
        "Precipitation": "0.67",
        "Humidity": "0.79",
        "Wind": 17,
        "Description": "Hail"
    },
    {
        "ID": 48,
        "City": "Hackneyville",
        "State": "MI",
        "Date": "2015-01-06T20:22:58+00:00",
        "HighTemp": 82,
        "LowTemp": 48,
        "Precipitation": "0.5",
        "Humidity": "0.62",
        "Wind": 76,
        "Description": "Thunderstorms"
    },
    {
        "ID": 49,
        "City": "Levant",
        "State": "VI",
        "Date": "2013-12-06T08:06:15+00:00",
        "HighTemp": 77,
        "LowTemp": 27,
        "Precipitation": "0.12",
        "Humidity": "0.26",
        "Wind": 80,
        "Description": "Mostly Cloudy"
    },
    {
        "ID": 50,
        "City": "Gila",
        "State": "AR",
        "Date": "2013-12-24T08:24:17+00:00",
        "HighTemp": 77,
        "LowTemp": 27,
        "Precipitation": "0.66",
        "Humidity": "0.62",
        "Wind": 2,
        "Description": "Hail"
    },
    {
        "ID": 51,
        "City": "Elwood",
        "State": "CA",
        "Date": "2001-07-16T23:51:43+00:00",
        "HighTemp": 108,
        "LowTemp": 32,
        "Precipitation": "0.09",
        "Humidity": "0.95",
        "Wind": 4,
        "Description": "Snow"
    },
    {
        "ID": 52,
        "City": "Dexter",
        "State": "OK",
        "Date": "2016-11-05T00:20:31+00:00",
        "HighTemp": 91,
        "LowTemp": 19,
        "Precipitation": "0.46",
        "Humidity": "0.82",
        "Wind": 57,
        "Description": "Partially Cloudy"
    },
    {
        "ID": 53,
        "City": "Iola",
        "State": "NH",
        "Date": "2013-09-28T00:21:58+00:00",
        "HighTemp": 80,
        "LowTemp": 2,
        "Precipitation": "0.46",
        "Humidity": "0.44",
        "Wind": 47,
        "Description": "Hail"
    },
    {
        "ID": 54,
        "City": "Lupton",
        "State": "SD",
        "Date": "2001-09-26T17:55:35+00:00",
        "HighTemp": 62,
        "LowTemp": 25,
        "Precipitation": "0.98",
        "Humidity": "0.29",
        "Wind": 73,
        "Description": "Partially Cloudy"
    },
    {
        "ID": 55,
        "City": "Wattsville",
        "State": "TX",
        "Date": "2010-11-08T22:32:22+00:00",
        "HighTemp": 71,
        "LowTemp": 0,
        "Precipitation": "0.39",
        "Humidity": "0.03",
        "Wind": 45,
        "Description": "Thunderstorms"
    },
    {
        "ID": 56,
        "City": "Henrietta",
        "State": "CT",
        "Date": "2004-09-07T14:59:00+00:00",
        "HighTemp": 85,
        "LowTemp": 9,
        "Precipitation": "0.66",
        "Humidity": "0.04",
        "Wind": 73,
        "Description": "Snow"
    },
    {
        "ID": 57,
        "City": "Beechmont",
        "State": "MN",
        "Date": "2003-10-03T00:01:45+00:00",
        "HighTemp": 109,
        "LowTemp": 33,
        "Precipitation": "0.86",
        "Humidity": "0.72",
        "Wind": 28,
        "Description": "Thunderstorms"
    },
    {
        "ID": 58,
        "City": "Kansas",
        "State": "MA",
        "Date": "2010-06-13T03:42:35+00:00",
        "HighTemp": 73,
        "LowTemp": 48,
        "Precipitation": "0.04",
        "Humidity": "0.8",
        "Wind": 90,
        "Description": "Snow"
    },
    {
        "ID": 59,
        "City": "Norfolk",
        "State": "IN",
        "Date": "2010-07-19T03:06:49+00:00",
        "HighTemp": 64,
        "LowTemp": 9,
        "Precipitation": "0.12",
        "Humidity": "0.95",
        "Wind": 22,
        "Description": "Rain"
    },
    {
        "ID": 60,
        "City": "Boykin",
        "State": "IL",
        "Date": "2002-08-26T00:14:12+00:00",
        "HighTemp": 102,
        "LowTemp": 24,
        "Precipitation": "0.83",
        "Humidity": "0.63",
        "Wind": 7,
        "Description": "Rain"
    },
    {
        "ID": 61,
        "City": "Sylvanite",
        "State": "NE",
        "Date": "2015-03-31T02:38:25+00:00",
        "HighTemp": 79,
        "LowTemp": 46,
        "Precipitation": "0.68",
        "Humidity": "0.99",
        "Wind": 41,
        "Description": "Rain"
    },
    {
        "ID": 62,
        "City": "Whitehaven",
        "State": "CO",
        "Date": "2010-03-07T03:30:38+00:00",
        "HighTemp": 101,
        "LowTemp": 16,
        "Precipitation": "0.43",
        "Humidity": "0.28",
        "Wind": 67,
        "Description": "Hail"
    },
    {
        "ID": 63,
        "City": "Rote",
        "State": "VA",
        "Date": "2002-11-27T04:54:06+00:00",
        "HighTemp": 75,
        "LowTemp": 44,
        "Precipitation": "0.58",
        "Humidity": "0.24",
        "Wind": 52,
        "Description": "Rain"
    },
    {
        "ID": 64,
        "City": "Hartsville/Hartley",
        "State": "KY",
        "Date": "2013-01-01T00:29:52+00:00",
        "HighTemp": 95,
        "LowTemp": 33,
        "Precipitation": "0.57",
        "Humidity": "0.14",
        "Wind": 42,
        "Description": "Mostly Cloudy"
    },
    {
        "ID": 65,
        "City": "Bluffview",
        "State": "TN",
        "Date": "2001-04-28T15:51:30+00:00",
        "HighTemp": 80,
        "LowTemp": 25,
        "Precipitation": "0.07",
        "Humidity": "0.81",
        "Wind": 38,
        "Description": "Partially Cloudy"
    },
    {
        "ID": 66,
        "City": "Garfield",
        "State": "WA",
        "Date": "2009-03-10T16:07:11+00:00",
        "HighTemp": 105,
        "LowTemp": 43,
        "Precipitation": "0.11",
        "Humidity": 1,
        "Wind": 31,
        "Description": "Hail"
    },
    {
        "ID": 67,
        "City": "Shepardsville",
        "State": "MO",
        "Date": "2008-07-29T13:19:01+00:00",
        "HighTemp": 86,
        "LowTemp": 50,
        "Precipitation": "0.44",
        "Humidity": "0.49",
        "Wind": 17,
        "Description": "Thunderstorms"
    },
    {
        "ID": 68,
        "City": "Loomis",
        "State": "DE",
        "Date": "2015-12-12T21:52:24+00:00",
        "HighTemp": 69,
        "LowTemp": 47,
        "Precipitation": "0.28",
        "Humidity": "0.78",
        "Wind": 91,
        "Description": "Mostly Cloudy"
    },
    {
        "ID": 69,
        "City": "Beaverdale",
        "State": "ND",
        "Date": "2015-11-24T08:02:04+00:00",
        "HighTemp": 74,
        "LowTemp": 7,
        "Precipitation": "0.48",
        "Humidity": "0.71",
        "Wind": 31,
        "Description": "Flurries"
    },
    {
        "ID": 70,
        "City": "Brethren",
        "State": "MP",
        "Date": "2011-08-23T21:57:59+00:00",
        "HighTemp": 91,
        "LowTemp": 38,
        "Precipitation": "0.56",
        "Humidity": "0.42",
        "Wind": 20,
        "Description": "Mostly Cloudy"
    },
    {
        "ID": 71,
        "City": "Valmy",
        "State": "NM",
        "Date": "2011-07-10T20:27:25+00:00",
        "HighTemp": 99,
        "LowTemp": 1,
        "Precipitation": "0.32",
        "Humidity": "0.83",
        "Wind": 51,
        "Description": "Thunderstorms"
    },
    {
        "ID": 72,
        "City": "Bellfountain",
        "State": "PA",
        "Date": "2006-10-04T21:04:45+00:00",
        "HighTemp": 66,
        "LowTemp": 44,
        "Precipitation": "0.93",
        "Humidity": "0.74",
        "Wind": 16,
        "Description": "Sunny"
    },
    {
        "ID": 73,
        "City": "Tivoli",
        "State": "AL",
        "Date": "2002-11-15T03:09:17+00:00",
        "HighTemp": 83,
        "LowTemp": 25,
        "Precipitation": "0.45",
        "Humidity": "0.97",
        "Wind": 66,
        "Description": "Mostly Cloudy"
    },
    {
        "ID": 74,
        "City": "Holtville",
        "State": "ID",
        "Date": "2003-12-19T05:18:09+00:00",
        "HighTemp": 66,
        "LowTemp": 23,
        "Precipitation": "0.36",
        "Humidity": "0.28",
        "Wind": 1,
        "Description": "Rain"
    },
    {
        "ID": 75,
        "City": "Cecilia",
        "State": "VT",
        "Date": "2011-01-21T22:36:36+00:00",
        "HighTemp": 105,
        "LowTemp": 28,
        "Precipitation": "0.3",
        "Humidity": "0.58",
        "Wind": 19,
        "Description": "Rain"
    },
    {
        "ID": 76,
        "City": "Coloma",
        "State": "PR",
        "Date": "2012-09-25T02:55:18+00:00",
        "HighTemp": 79,
        "LowTemp": 23,
        "Precipitation": "0.96",
        "Humidity": "0.25",
        "Wind": 48,
        "Description": "Sunny"
    },
    {
        "ID": 77,
        "City": "Holcombe",
        "State": "MT",
        "Date": "2007-05-05T13:03:06+00:00",
        "HighTemp": 104,
        "LowTemp": 3,
        "Precipitation": "0.29",
        "Humidity": "0.44",
        "Wind": 33,
        "Description": "Rain"
    },
    {
        "ID": 78,
        "City": "Manila",
        "State": "ME",
        "Date": "2015-07-08T18:34:09+00:00",
        "HighTemp": 97,
        "LowTemp": 33,
        "Precipitation": "0.3",
        "Humidity": "0.44",
        "Wind": 36,
        "Description": "Sunny"
    },
    {
        "ID": 79,
        "City": "Bloomington",
        "State": "NJ",
        "Date": "2014-04-12T14:40:37+00:00",
        "HighTemp": 104,
        "LowTemp": 17,
        "Precipitation": "0.69",
        "Humidity": "0.07",
        "Wind": 10,
        "Description": "Thunderstorms"
    },
    {
        "ID": 80,
        "City": "Fruitdale",
        "State": "MS",
        "Date": "2000-02-11T22:00:39+00:00",
        "HighTemp": 85,
        "LowTemp": 31,
        "Precipitation": "0.55",
        "Humidity": "0.51",
        "Wind": 93,
        "Description": "Hail"
    },
    {
        "ID": 81,
        "City": "Sattley",
        "State": "NY",
        "Date": "2000-05-14T21:26:51+00:00",
        "HighTemp": 108,
        "LowTemp": 49,
        "Precipitation": "0.94",
        "Humidity": "0.52",
        "Wind": 42,
        "Description": "Thunderstorms"
    },
    {
        "ID": 82,
        "City": "Weedville",
        "State": "LA",
        "Date": "2001-04-25T01:40:32+00:00",
        "HighTemp": 63,
        "LowTemp": 40,
        "Precipitation": "0.48",
        "Humidity": "0.72",
        "Wind": 7,
        "Description": "Flurries"
    },
    {
        "ID": 83,
        "City": "Kraemer",
        "State": "PW",
        "Date": "2003-03-02T06:33:27+00:00",
        "HighTemp": 110,
        "LowTemp": 56,
        "Precipitation": "0.19",
        "Humidity": "0.74",
        "Wind": 90,
        "Description": "Flurries"
    },
    {
        "ID": 84,
        "City": "Fontanelle",
        "State": "RI",
        "Date": "2014-10-28T14:40:10+00:00",
        "HighTemp": 88,
        "LowTemp": 31,
        "Precipitation": "0.3",
        "Humidity": "0.14",
        "Wind": 9,
        "Description": "Hail"
    },
    {
        "ID": 85,
        "City": "Brandywine",
        "State": "DC",
        "Date": "2008-09-20T08:57:10+00:00",
        "HighTemp": 100,
        "LowTemp": 7,
        "Precipitation": "0.93",
        "Humidity": "0.06",
        "Wind": 35,
        "Description": "Flurries"
    },
    {
        "ID": 86,
        "City": "Linwood",
        "State": "WV",
        "Date": "2005-05-04T06:54:13+00:00",
        "HighTemp": 101,
        "LowTemp": 40,
        "Precipitation": "0.55",
        "Humidity": "0.25",
        "Wind": 52,
        "Description": "Thunderstorms"
    },
    {
        "ID": 87,
        "City": "Lumberton",
        "State": "NC",
        "Date": "2006-06-20T06:14:02+00:00",
        "HighTemp": 82,
        "LowTemp": 38,
        "Precipitation": "0.61",
        "Humidity": "0.09",
        "Wind": 71,
        "Description": "Hail"
    },
    {
        "ID": 88,
        "City": "Farmers",
        "State": "OH",
        "Date": "2014-03-01T04:09:53+00:00",
        "HighTemp": 63,
        "LowTemp": 42,
        "Precipitation": "0.55",
        "Humidity": "0.72",
        "Wind": 4,
        "Description": "Mostly Cloudy"
    },
    {
        "ID": 89,
        "City": "Fillmore",
        "State": "OR",
        "Date": "2008-02-12T20:54:55+00:00",
        "HighTemp": 102,
        "LowTemp": 41,
        "Precipitation": "0.77",
        "Humidity": "0.91",
        "Wind": 6,
        "Description": "Hail"
    },
    {
        "ID": 90,
        "City": "Washington",
        "State": "FM",
        "Date": "2005-10-06T19:55:17+00:00",
        "HighTemp": 91,
        "LowTemp": 36,
        "Precipitation": "0.79",
        "Humidity": "0.26",
        "Wind": 62,
        "Description": "Sunny"
    },
    {
        "ID": 91,
        "City": "Carlos",
        "State": "AZ",
        "Date": "2009-06-06T11:57:01+00:00",
        "HighTemp": 72,
        "LowTemp": 33,
        "Precipitation": "0.05",
        "Humidity": "0.86",
        "Wind": 91,
        "Description": "Hail"
    },
    {
        "ID": 92,
        "City": "Vienna",
        "State": "WY",
        "Date": "2005-11-26T09:07:01+00:00",
        "HighTemp": 86,
        "LowTemp": 25,
        "Precipitation": "0.32",
        "Humidity": "0.71",
        "Wind": 52,
        "Description": "Sunny"
    },
    {
        "ID": 93,
        "City": "Reno",
        "State": "AK",
        "Date": "2006-10-19T21:43:31+00:00",
        "HighTemp": 73,
        "LowTemp": 46,
        "Precipitation": "0.74",
        "Humidity": "0.46",
        "Wind": 81,
        "Description": "Thunderstorms"
    },
    {
        "ID": 94,
        "City": "Vallonia",
        "State": "UT",
        "Date": "2003-08-18T14:59:57+00:00",
        "HighTemp": 89,
        "LowTemp": 2,
        "Precipitation": "0.77",
        "Humidity": "0.47",
        "Wind": 73,
        "Description": "Partially Cloudy"
    },
    {
        "ID": 95,
        "City": "Roland",
        "State": "HI",
        "Date": "2012-03-16T02:56:12+00:00",
        "HighTemp": 85,
        "LowTemp": 42,
        "Precipitation": "0.72",
        "Humidity": "0.42",
        "Wind": 29,
        "Description": "Hail"
    },
    {
        "ID": 96,
        "City": "Genoa",
        "State": "GA",
        "Date": "2006-04-20T12:15:19+00:00",
        "HighTemp": 94,
        "LowTemp": 50,
        "Precipitation": "0.46",
        "Humidity": "0.89",
        "Wind": 41,
        "Description": "Mostly Cloudy"
    },
    {
        "ID": 97,
        "City": "Trucksville",
        "State": "NV",
        "Date": "2000-01-06T22:34:18+00:00",
        "HighTemp": 75,
        "LowTemp": 40,
        "Precipitation": "0.87",
        "Humidity": "0.44",
        "Wind": 87,
        "Description": "Sunny"
    },
    {
        "ID": 98,
        "City": "Emison",
        "State": "MH",
        "Date": "2000-09-23T22:04:26+00:00",
        "HighTemp": 85,
        "LowTemp": 48,
        "Precipitation": "0.99",
        "Humidity": "0.15",
        "Wind": 73,
        "Description": "Sunny"
    },
    {
        "ID": 99,
        "City": "Mansfield",
        "State": "FL",
        "Date": "2009-07-06T06:54:59+00:00",
        "HighTemp": 64,
        "LowTemp": 27,
        "Precipitation": "0.37",
        "Humidity": "0.92",
        "Wind": 0,
        "Description": "Sunny"
    },
    {
        "ID": 100,
        "City": "Sameville",
        "State": "VA",
        "Date": "2016-11-07T17:55:58+00:00",
        "HighTemp": 99,
        "LowTemp": 15,
        "Precipitation": "0.14",
        "Humidity": "0.2",
        "Wind": 10,
        "Description": "Sunny"
    },
    {
        "ID": 101,
        "City": "Sameville",
        "State": "KY",
        "Date": "2014-05-05T05:45:17+00:00",
        "HighTemp": 60,
        "LowTemp": 30,
        "Precipitation": "0.21",
        "Humidity": "0.91",
        "Wind": 50,
        "Description": "Mostly Cloudy"
    }
]
// Test case info
var dataResult = {
    TestCase1: {
        Description: "should give me States matching VA",
        Filters: [{
            "Field": "State",
            "Values": ["VA"]
        }],
        ExpectedData: [{
            "ID": 5,
            "City": "Turah",
            "State": "VA",
            "Date": "2013-02-06T17:55:58+00:00",
            "HighTemp": 104,
            "LowTemp": 29,
            "Precipitation": "0.34",
            "Humidity": "0.41",
            "Wind": 40,
            "Description": "Partially Cloudy"
        }, {
            "ID": 63,
            "City": "Rote",
            "State": "VA",
            "Date": "2002-11-27T04:54:06+00:00",
            "HighTemp": 75,
            "LowTemp": 44,
            "Precipitation": "0.58",
            "Humidity": "0.24",
            "Wind": 52,
            "Description": "Rain"
        }, {
            "ID": 100,
            "City": "Sameville",
            "State": "VA",
            "Date": "2016-11-07T17:55:58+00:00",
            "HighTemp": 99,
            "LowTemp": 15,
            "Precipitation": "0.14",
            "Humidity": "0.2",
            "Wind": 10,
            "Description": "Sunny"
        }]
    },
    TestCase2: {
        Description: "should give me States matching VA and Cities matching Rote",
        Filters: [{
            "Field": "State",
            "Values": ["VA"]
        }, {
            "Field": "City",
            "Values": ["Rote"]
        }],
        ExpectedData: [{
            "ID": 63,
            "City": "Rote",
            "State": "VA",
            "Date": "2002-11-27T04:54:06+00:00",
            "HighTemp": 75,
            "LowTemp": 44,
            "Precipitation": "0.58",
            "Humidity": "0.24",
            "Wind": 52,
            "Description": "Rain"
        }]
    },
    TestCase3: {
        Description: "should give me States matching VA and CO",
        Filters: [{
            "Field": "State",
            "Values": ["VA", "CO"]
        }],
        ExpectedData: [{
            "ID": 63,
            "City": "Rote",
            "State": "VA",
            "Date": "2002-11-27T04:54:06+00:00",
            "HighTemp": 75,
            "LowTemp": 44,
            "Precipitation": "0.58",
            "Humidity": "0.24",
            "Wind": 52,
            "Description": "Rain"
        }, {
            "ID": 5,
            "City": "Turah",
            "State": "VA",
            "Date": "2013-02-06T17:55:58+00:00",
            "HighTemp": 104,
            "LowTemp": 29,
            "Precipitation": "0.34",
            "Humidity": "0.41",
            "Wind": 40,
            "Description": "Partially Cloudy"
        }, {
            "ID": 4,
            "City": "Dixonville",
            "State": "CO",
            "Date": "2011-09-18T05:45:17+00:00",
            "HighTemp": 66,
            "LowTemp": 54,
            "Precipitation": "0.35",
            "Humidity": "0.63",
            "Wind": 54,
            "Description": "Rain"
        }, {
            "ID": 62,
            "City": "Whitehaven",
            "State": "CO",
            "Date": "2010-03-07T03:30:38+00:00",
            "HighTemp": 101,
            "LowTemp": 16,
            "Precipitation": "0.43",
            "Humidity": "0.28",
            "Wind": 67,
            "Description": "Hail"
        }, {
            "ID": 100,
            "City": "Sameville",
            "State": "VA",
            "Date": "2016-11-07T17:55:58+00:00",
            "HighTemp": 99,
            "LowTemp": 15,
            "Precipitation": "0.14",
            "Humidity": "0.2",
            "Wind": 10,
            "Description": "Sunny"
        }]
    },
    TestCase4: {
        Description: "should give me States matching VA and CO and Cities matching Sameville",
        Filters: [{
            "Field": "State",
            "Values": ["VA", "CO"]
        }, {
            "Field": "City",
            "Values": ["Sameville"]
        }],
        ExpectedData: [{
            "ID": 100,
            "City": "Sameville",
            "State": "VA",
            "Date": "2016-11-07T17:55:58+00:00",
            "HighTemp": 99,
            "LowTemp": 15,
            "Precipitation": "0.14",
            "Humidity": "0.2",
            "Wind": 10,
            "Description": "Sunny"
        }]
    }
};