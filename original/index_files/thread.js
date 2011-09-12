/*jslint evil:true */
/**
 * Dynamic thread loader
 *
 * 
 * 
 * 
 * 
 * 
*/

// 
var DISQUS;
if (!DISQUS || typeof DISQUS == 'function') {
    throw "DISQUS object is not initialized";
}
// 

// json_data and default_json django template variables will close
// and re-open javascript comment tags

(function () {
    var jsonData, cookieMessages, session, key;

    /* */ jsonData = {"reactions": [{"body": "RT @Espenhh: Har skrevet en ny bloggpost p\u00e5 Bekk Open: \"Design av sikkert REST-API\": http://t.co/RPqGhU3 (var grunnlaget for #javazone-t ...", "author_name": "Christopher R\u00f8tnes", "source_url": "http://backtype.com/", "id": 65379722, "get_service_url": "http://twitter.com/", "title": "", "url": "http://twitter.com/crotnes/status/112146854950608896", "source": "backtype", "get_service_name": "twitter", "avatar_url": "http://a2.twimg.com/profile_images/75014602/Christopher_normal.jpg", "author_url": "#", "date_created": "3 dager siden", "retweets": [{"url": "http://twitter.com/follesoe/status/112133878554169344", "author_name": "Jonas Folles\u00f8"}, {"url": "http://twitter.com/hnilsen/status/112077718849458176", "author_name": "H\u00e5kon Nilsen"}, {"url": "http://twitter.com/MagnusRevang/status/112075699749261312", "author_name": "Magnus Revang"}]}, {"body": "RT @jonfageraas: RT @bekkopen: Ny artikkel p\u00e5 BEKK Open: \"Design av sikkert REST-API\": http://t.co/fNAh1ej (basert p\u00e5 en av BEKKs lyntal ...", "author_name": "\u00d8yvind Malin", "source_url": "http://backtype.com/", "id": 65359441, "get_service_url": "http://twitter.com/", "title": "", "url": "http://twitter.com/oyvindmal/status/112104266642096128", "source": "backtype", "get_service_name": "twitter", "avatar_url": "http://a0.twimg.com/profile_images/1512713698/oyvind_normal.jpg", "author_url": "#", "date_created": "3 dager siden", "retweets": []}, {"body": "RT @bekkopen: Ny artikkel p\u00e5 BEKK Open: \"Design av sikkert REST-API\": http://t.co/fNAh1ej (basert p\u00e5 en av BEKKs lyntaler p\u00e5 #JavaZone 2011)", "author_name": "Jon Fageraas", "source_url": "http://backtype.com/", "id": 65359166, "get_service_url": "http://twitter.com/", "title": "", "url": "http://twitter.com/jonfageraas/status/112103463839727617", "source": "backtype", "get_service_name": "twitter", "avatar_url": "http://a3.twimg.com/profile_images/824662718/Jon_Fageraas_august_09_normal.jpg", "author_url": "#", "date_created": "3 dager siden", "retweets": []}, {"body": "RT @bekkopen: Ny artikkel p\u00e5 BEKK Open: \"Design av sikkert REST-API\": http://t.co/Ubbbdo5 (basert p\u00e5 en av BEKKs lyntaler p\u00e5 #JavaZone 2011)", "author_name": "Mikkel Dan-Rognlie", "source_url": "http://backtype.com/", "id": 65354902, "get_service_url": "http://twitter.com/", "title": "", "url": "http://twitter.com/mikkelbd/status/112094623962378240", "source": "backtype", "get_service_name": "twitter", "avatar_url": "http://a0.twimg.com/profile_images/1360005141/Mikkel_normal.jpg", "author_url": "#", "date_created": "3 dager siden", "retweets": []}, {"body": "RT @steinim: RT @Espenhh Ny bloggpost p\u00e5 Bekk Open: &quot;Design av sikkert REST-API&quot;: http://t.co/3CA9UQL (var grunnlaget for #javazone-talken min)", "author_name": "joachimhs", "source_url": "http://backtype.com/", "id": 65344799, "get_service_url": "http://twitter.com/", "title": "", "url": "http://twitter.com/joachimhs/status/112057424831193088", "source": "backtype", "get_service_name": "twitter", "avatar_url": "http://a0.twimg.com/profile_images/1364760671/jhs_normal.png", "author_url": "#", "date_created": "3 dager siden", "retweets": []}, {"body": "RT @Espenhh: Har skrevet en ny bloggpost p\u00e5 Bekk Open: &quot;Design av sikkert REST-API&quot;: http://t.co/RPqGhU3 (var grunnlaget for #javazone-talken min)", "author_name": "olemartin", "source_url": "http://backtype.com/", "id": 65344800, "get_service_url": "http://twitter.com/", "title": "", "url": "http://twitter.com/olemartin/status/112051427773394944", "source": "backtype", "get_service_name": "twitter", "avatar_url": "http://a2.twimg.com/profile_images/299897119/IMG_3301_normal.jpg", "author_url": "#", "date_created": "3 dager siden", "retweets": []}, {"body": "RT @bekkopen: Ny artikkel p\u00e5 BEKK Open: &quot;Design av sikkert REST-API&quot;: http://t.co/Ubbbdo5 (basert p\u00e5 en av BEKKs lyntaler p\u00e5 #JavaZone 2011)", "author_name": "gnab", "source_url": "http://backtype.com/", "id": 65344801, "get_service_url": "http://twitter.com/", "title": "", "url": "http://twitter.com/gnab/status/112048446243999744", "source": "backtype", "get_service_name": "twitter", "avatar_url": "http://a2.twimg.com/profile_images/1305436325/birdie_normal.jpg", "author_url": "#", "date_created": "3 dager siden", "retweets": []}], "reactions_limit": 10, "ordered_highlighted": [], "posts": {"306287837": {"edited": false, "author_is_moderator": false, "from_request_user": false, "up_voted": false, "ip": "", "last_modified_date": null, "dislikes": 0, "has_replies": false, "vote": false, "votable": true, "last_modified_by": null, "real_date": "2011-09-09_18:39:56", "date": "2 dager siden", "message": "Lekker blog post. Det ille ekstra med bilder f\u00f8r hvert avsnitt gj\u00f8r seg veldig bra!<br><br>Har ikke lest hele, men dette er superrelevant, s\u00e5 skal lese den grundig :)", "approved": true, "is_last_child": false, "can_edit": false, "can_reply": true, "likes": 0, "user_voted": null, "num_replies": 0, "down_voted": false, "is_first_child": false, "has_been_anonymized": false, "highlighted": false, "parent_post_id": null, "depth": 0, "points": 0, "user_key": "twitter-10209472", "author_is_creator": false, "email": "", "killed": false, "is_realtime": false}}, "ordered_posts": [306287837], "realtime_enabled": false, "ready": true, "mediaembed": [], "has_more_reactions": true, "realtime_paused": false, "integration": {"receiver_url": "", "hide_user_votes": false, "reply_position": true, "disqus_logo": true}, "highlighted": {}, "reactions_start": 0, "media_url": "http://mediacdn.disqus.com/1315852078", "users": {"twitter-10209472": {"username": "twitter-10209472", "tumblr": "", "about": "", "display_name": "Jonas Folles\u00f8", "url": "http://disqus.com/twitter-10209472/", "registered": true, "remote_id": "10209472", "linkedin": "", "blog": "http://twitter.com/follesoe", "remote_domain": 2, "points": 3, "facebook": "", "avatar": "http://mediacdn.disqus.com/uploads/users/833/4473/avatar32.jpg?1315607983", "delicious": "", "is_remote": true, "verified": false, "flickr": "", "twitter": "http://twitter.com/follesoe", "remote_domain_name": "Twitter"}}, "messagesx": {"count": 0, "unread": []}, "thread": {"voters_count": 1, "offset_posts": 0, "slug": "hvordan_designe_et_sikkert_rest_api", "paginate": false, "num_pages": 1, "days_alive": 0, "moderate_none": false, "voters": {"pointnor": {"url": "http://disqus.com/pointnor/", "username": "pointnor", "is_moderator": false, "avatar": "http://mediacdn.disqus.com/1315852078/images/noavatar32.png?1314882939", "name": "pointnor"}}, "total_posts": 1, "realtime_paused": true, "queued": false, "pagination_type": "append", "user_vote": null, "likes": 5, "num_posts": 1, "closed": false, "per_page": 0, "id": 409051672, "killed": false, "moderate_all": false}, "forum": {"use_media": true, "avatar_size": 32, "apiKey": "xGGaxfk7zfcYF2kMYe28jM5QtadgVGXjyC7itXwkfkAIKeVFxOI9Ba6vTIxh0AD7", "comment_max_words": 0, "mobile_theme_disabled": false, "is_early_adopter": false, "login_buttons_enabled": true, "streaming_realtime": false, "reply_position": true, "id": 519932, "default_avatar_url": "http://mediacdn.disqus.com/1315852078/images/noavatar32.png", "template": {"mobile": {"url": "http://mediacdn.disqus.com/1315852078/build/themes/newmobile.js", "css": "http://mediacdn.disqus.com/1315852078/build/themes/newmobile.css"}, "url": "http://mediacdn.disqus.com/1315852078/build/themes/t_c4ca4238a0b923820dcc509a6f75849b.js?1", "api": "1.0", "name": "Narcissus", "css": "http://mediacdn.disqus.com/1315852078/build/themes/t_c4ca4238a0b923820dcc509a6f75849b.css?1"}, "max_depth": 0, "lastUpdate": 1302182005, "use_old_templates": false, "linkbacks_enabled": true, "allow_anon_votes": true, "revert_new_login_flow": false, "stylesUrl": "http://mediacdn.disqus.com/uploads/styles/51/9932/bekkopen.css", "show_avatar": true, "reactions_enabled": true, "disqus_auth_disabled": false, "name": "Bekk Open", "language": "nb", "mentions_enabled": true, "url": "bekkopen", "allow_anon_post": true, "thread_votes_disabled": false, "hasCustomStyles": false, "moderate_all": false}, "settings": {"realtimeHost": "qq.disqus.com", "uploads_url": "http://media.disqus.com/uploads", "ssl_media_url": "https://securecdn.disqus.com/1315852078", "realtime_url": "http://rt.disqus.com/forums/realtime-cached.js", "facebook_app_id": "52254943976", "minify_js": true, "recaptcha_public_key": "6LdKMrwSAAAAAPPLVhQE9LPRW4LUSZb810_iaa8u", "read_only": false, "facebook_api_key": "4aaa6c7038653ad2e4dbeba175a679ba", "realtimePort": "80", "debug": false, "disqus_url": "http://disqus.com", "media_url": "http://mediacdn.disqus.com/1315852078"}, "ranks": {}, "request": {"sort": 1, "is_authenticated": false, "user_type": "anon", "subscribe_on_post": 0, "missing_perm": null, "user_id": null, "remote_domain_name": "", "remote_domain": "", "is_verified": false, "email": "", "profile_url": "", "username": "", "is_global_moderator": false, "sharing": {}, "timestamp": "2011-09-12_17:03:50", "is_moderator": false, "forum": "bekkopen", "is_initial_load": true, "display_username": "", "points": null, "moderator_can_edit": false, "is_remote": false, "userkey": "", "page": 1}, "context": {"use_twitter_signin": true, "use_fb_connect": false, "show_reply": true, "active_switches": ["bespin", "community_icon", "embedapi", "google_auth", "mentions", "new_facebook_auth", "realtime_cached", "show_captcha_on_links", "ssl", "static_reply_frame", "static_styles", "statsd_created", "upload_media", "use_rs_paginator_60m"], "sigma_chance": 10, "use_google_signin": false, "switches": {"olark_admin_addons": true, "listactivity_replies": true, "olark_addons": true, "upload_media": true, "vip_read_slave": true, "embedapi": true, "ssl": true, "html_email": true, "moderate_ascending": true, "community_icon": true, "send_to_impermium": true, "show_captcha_on_links": true, "olark_admin_packages": true, "static_styles": true, "stats": true, "google_auth": true, "listactivity_replies_30d": true, "statsd.timings": true, "realtime_cached": true, "statsd_created": true, "bespin": true, "olark_support": true, "use_rs_paginator_60m": true, "mentions": true, "olark_install": true, "new_facebook_auth": true, "limit_get_posts_days_30d": true, "compare_spam": true, "static_reply_frame": true}, "forum_facebook_key": "", "use_yahoo": false, "subscribed": false, "active_gargoyle_switches": ["compare_spam", "html_email", "limit_get_posts_days_30d", "listactivity_replies", "listactivity_replies_30d", "moderate_ascending", "olark_addons", "olark_admin_addons", "olark_admin_packages", "olark_install", "olark_support", "send_to_impermium", "show_captcha_on_links", "stats", "statsd.timings", "vip_read_slave"], "realtime_speed": 15000, "use_openid": true}}; /* */
    /* */ cookieMessages = {"user_created": null, "post_has_profile": null, "post_twitter": null, "post_not_approved": null}; session = {"url": null, "name": null, "email": null}; /* */

    DISQUS.jsonData = jsonData;
    DISQUS.jsonData.cookie_messages = cookieMessages;
    DISQUS.jsonData.session = session;

    if (DISQUS.useSSL) {
        DISQUS.useSSL(DISQUS.jsonData.settings);
    }

    // The mappings below are for backwards compatibility--before we port all the code that
    // accesses jsonData.settings to DISQUS.settings

    var mappings = {
        debug:                'disqus.debug',
        minify_js:            'disqus.minified',
        read_only:            'disqus.readonly',
        recaptcha_public_key: 'disqus.recaptcha.key',
        facebook_app_id:      'disqus.facebook.appId',
        facebook_api_key:     'disqus.facebook.apiKey'
    };

    var urlMappings = {
        disqus_url:    'disqus.urls.main',
        media_url:     'disqus.urls.media',
        ssl_media_url: 'disqus.urls.sslMedia',
        realtime_url:  'disqus.urls.realtime',
        uploads_url:   'disqus.urls.uploads'
    };

    if (DISQUS.jsonData.context.switches.realtime_setting_change) {
        urlMappings.realtimeHost = 'realtime.host';
        urlMappings.realtimePort = 'realtime.port';
    }
    for (key in mappings) {
        if (mappings.hasOwnProperty(key)) {
            DISQUS.settings.set(mappings[key], DISQUS.jsonData.settings[key]);
        }
    }

    for (key in urlMappings) {
        if (urlMappings.hasOwnProperty(key)) {
            DISQUS.jsonData.settings[key] = DISQUS.settings.get(urlMappings[key]);
        }
    }
}());

DISQUS.jsonData.context.csrf_token = '4b03afe818f69407fc605b9499e57770';

DISQUS.jsonData.urls = {
    login: 'http://disqus.com/profile/login/',
    logout: 'http://disqus.com/logout/',
    upload_remove: 'http://bekkopen.disqus.com/thread/hvordan_designe_et_sikkert_rest_api/async_media_remove/',
    request_user_profile: 'http://disqus.com/AnonymousUser/',
    request_user_avatar: 'http://mediacdn.disqus.com/1315852078/images/noavatar92.png',
    verify_email: 'http://disqus.com/verify/',
    remote_settings: 'http://bekkopen.disqus.com/_auth/embed/remote_settings/',
    embed_thread: 'http://bekkopen.disqus.com/thread.js',
    embed_vote: 'http://bekkopen.disqus.com/vote.js',
    embed_thread_vote: 'http://bekkopen.disqus.com/thread_vote.js',
    embed_thread_share: 'http://bekkopen.disqus.com/thread_share.js',
    embed_queueurl: 'http://bekkopen.disqus.com/queueurl.js',
    embed_hidereaction: 'http://bekkopen.disqus.com/hidereaction.js',
    embed_more_reactions: 'http://bekkopen.disqus.com/more_reactions.js',
    embed_subscribe: 'http://bekkopen.disqus.com/subscribe.js',
    embed_highlight: 'http://bekkopen.disqus.com/highlight.js',
    embed_block: 'http://bekkopen.disqus.com/block.js',
    update_moderate_all: 'http://bekkopen.disqus.com/update_moderate_all.js',
    update_days_alive: 'http://bekkopen.disqus.com/update_days_alive.js',
    show_user_votes: 'http://bekkopen.disqus.com/show_user_votes.js',
    forum_view: 'http://bekkopen.disqus.com/hvordan_designe_et_sikkert_rest_api',
    cnn_saml_try: 'http://disqus.com/saml/cnn/try/',
    realtime: DISQUS.jsonData.settings.realtime_url,
    thread_view: 'http://bekkopen.disqus.com/thread/hvordan_designe_et_sikkert_rest_api/',
    twitter_connect: DISQUS.jsonData.settings.disqus_url + '/_ax/twitter/begin/',
    yahoo_connect: DISQUS.jsonData.settings.disqus_url + '/_ax/yahoo/begin/',
    openid_connect: DISQUS.jsonData.settings.disqus_url + '/_ax/openid/begin/',
    googleConnect: DISQUS.jsonData.settings.disqus_url + '/_ax/google/begin/',
    community: 'http://bekkopen.disqus.com/community.html',
    admin: 'http://bekkopen.disqus.com/admin/moderate/',
    moderate: 'http://bekkopen.disqus.com/admin/moderate/',
    moderate_threads: 'http://bekkopen.disqus.com/admin/moderate-threads/',
    settings: 'http://bekkopen.disqus.com/admin/settings/',
    unmerged_profiles: 'http://disqus.com/embed/profile/unmerged_profiles/',

    channels: {
        def:      'http://disqus.com/default.html', /* default channel */
        auth:     'https://secure.disqus.com/embed/login.html',
        tweetbox: 'http://disqus.com/forums/integrations/twitter/tweetbox.html?f=bekkopen',
        edit:     'http://bekkopen.disqus.com/embed/editcomment.html',

        
        
        reply:    'http://mediacdn.disqus.com/1315852078/build/system/reply.html',
        upload:   'http://mediacdn.disqus.com/1315852078/build/system/upload.html',
        sso:      'http://mediacdn.disqus.com/1315852078/build/system/sso.html',
        facebook: 'http://mediacdn.disqus.com/1315852078/build/system/facebook.html'
        
        
    }
};
