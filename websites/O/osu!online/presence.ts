var presence = new Presence({
    clientId: "714822481286004778"
  }),
  presenceData: PresenceData = {
    largeImageKey: "logo"
  },
  customData = false;

presence.on("UpdateData", async () => {
    customData = false;

    if (document.location.pathname == "/" || document.location.pathname.startsWith("/index")) {
        var pageHome = document.getElementsByClassName("title")[0];
        let pageText1;
        if (pageHome == null) {
            pageText1 = "Browsing...";
        } else {
            pageText1 = "Listening: " + pageHome.textContent;
        }
        var presenceData: PresenceData = {
            details: "Viewing the homepage",
            state: pageText1,
            largeImageKey: "logo"
        };
        presence.setActivity(presenceData);
    } else if (document.location.pathname.startsWith("/new")) {
        var pageNew = document.getElementsByClassName("title")[0];
        let pageText2;
        if (pageNew == null) {
            pageText2 = "Browsing...";
        } else {
            pageText2 = "Listening: " + pageNew.textContent;
        }
        var presenceData: PresenceData = {
            details: "Viewing new beatmaps",
            state: pageText2,
            largeImageKey: "logo"
        };
        presence.setActivity(presenceData);
    } else if (document.location.pathname.startsWith("/hot")) {
        var pageHot = document.getElementsByClassName("title")[0];
        let pageText3;
        if (pageHot == null) {
            pageText3 = "Browsing...";
        } else {
            pageText3 = "Listening: " + pageHot.textContent;
        }
        var presenceData: PresenceData = {
            details: "Viewing hot beatmaps",
            state: pageText3,
            largeImageKey: "logo"
        };
        presence.setActivity(presenceData);
    } else if (document.location.pathname.startsWith("/genre")) {
        var pageGen1 = document.getElementsByClassName("title")[2];
        var pageGen2 = document.getElementsByClassName("title")[0];
        var pageGen3 = document.getElementsByClassName("title")[1];
        var pageGen4 = document.getElementsByClassName("selitem active")[0];
        var pageGen5 = document.getElementsByClassName("selitem active")[1];
        if (pageGen1 != null) {
            let pageText4;
            pageText4 = "Listening: " + pageGen1.textContent;
            var presenceData: PresenceData = {
                details: "Searching by categories",
                state: pageText4,
                largeImageKey: "logo"
            };
            presence.setActivity(presenceData);
        } else {
            let pageText5;
            pageText5 = pageGen2.textContent + ": " + pageGen4.textContent + " " + pageGen3.textContent + ": " + pageGen5.textContent;
            var presenceData: PresenceData = {
                details: "Searching by categories",
                state: pageText5,
                largeImageKey: "logo"
            };
        };
        presence.setActivity(presenceData);
    } else if (document.location.pathname.startsWith("/search")) {
        var pageSch1 = document.getElementsByClassName("title")[0];
        var pageSch2 = document.getElementsByName("q")[0];
        let pageText6;
        let pageText7;
        if (pageSch1 != null) {
            pageText6 = "Listening: " + pageSch1.textContent;
            var presenceData: PresenceData = {
                details: "Searching for beatmaps",
                state: pageText6,
                largeImageKey: "logo"
            };
            presence.setActivity(presenceData);
        } else {
            if ((pageSch2 as HTMLInputElement).value == "") {
                pageText7 = "Browsing...";
            } else {
                pageText7 = "Keyword: " + (pageSch2 as HTMLInputElement).value;
            }
            var presenceData: PresenceData = {
                details: "Searching for beatmaps",
                state: pageText7,
                largeImageKey: "logo"
            };
            presence.setActivity(presenceData);
        }
    } else if (document.location.pathname.startsWith("/local")) {
        var pageFav = document.getElementsByClassName("title")[0];
        let pageText7;
        if (pageFav == null) {
            pageText7 = "Browsing...";
        } else {
            pageText7 = "Listening: " + pageFav.textContent;
        }
        var presenceData: PresenceData = {
            details: "Viewing my favourites",
            state: pageText7,
            largeImageKey: "logo"
        };
        presence.setActivity(presenceData);
    } else if (document.location.pathname.startsWith("/history")) {
        var presenceData: PresenceData = {
            details: "Viewing playing history",
            state: "Browsing...",
            largeImageKey: "logo"
        };
        presence.setActivity(presenceData);
    } else if (document.location.pathname.startsWith("/faq")) {
        var presenceData: PresenceData = {
            details: "Viewing FAQ",
            state: "Getting some information",
            largeImageKey: "logo"
        };
        presence.setActivity(presenceData);
    } else if (document.location.pathname.startsWith("/settings")) {
        var presenceData: PresenceData = {
            details: "Viewing settings",
            state: "Changing...",
            largeImageKey: "logo"
        };
        presence.setActivity(presenceData)
    }
    if (!customData) {
        presence.setActivity(presenceData);
    }
});