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

    /* */ jsonData = {"reactions": [{"body": "Er maven treg? L\u00f8sning her: RT @bekkopen: New post on BEKK Open: &quot;Keeping your Maven build fast&quot;: http://t.co/Ctz31j2 by @steinim", "author_name": "vidarkongsli", "source_url": "http://backtype.com/", "id": 65663937, "get_service_url": "http://twitter.com/", "title": "", "url": "http://twitter.com/vidarkongsli/status/112876137314664448", "source": "backtype", "get_service_name": "twitter", "avatar_url": "http://a1.twimg.com/profile_images/1475935591/4c7cf25708dab80e4e7681eb9c0df5ba_normal.jpeg", "author_url": "#", "date_created": "2 dager siden", "retweets": []}, {"body": "RT @steinim: I have blogged: Keeping your Maven build fast \u2013 BEKK Open: http://t.co/pn33jBY @bekkopen", "author_name": "matsknutsen", "source_url": "http://backtype.com/", "id": 65663938, "get_service_url": "http://twitter.com/", "title": "", "url": "http://twitter.com/matsknutsen/status/112862914427363328", "source": "backtype", "get_service_name": "twitter", "avatar_url": "http://a1.twimg.com/profile_images/1164602047/418_c_thumb_normal.jpg", "author_url": "#", "date_created": "2 dager siden", "retweets": []}], "reactions_limit": 10, "ordered_highlighted": [], "posts": {"307120227": {"edited": false, "author_is_moderator": false, "from_request_user": false, "up_voted": false, "ip": "", "last_modified_date": "1 dag siden", "dislikes": 0, "has_replies": false, "vote": false, "votable": true, "last_modified_by": "author", "real_date": "2011-09-11_08:21:27", "date": "2 dager siden", "message": "Another tip for building war projects. Make the primary method jar. Then create a profile for building the war. This way you don't have to assemble the war file for each build.", "approved": true, "is_last_child": false, "can_edit": false, "can_reply": true, "likes": 1, "user_voted": null, "num_replies": 1, "down_voted": false, "is_first_child": false, "has_been_anonymized": false, "highlighted": false, "parent_post_id": null, "depth": 0, "points": 1, "user_key": "twitter-14286844", "author_is_creator": false, "email": "", "killed": false, "is_realtime": false}, "307606540": {"edited": false, "author_is_moderator": false, "from_request_user": false, "up_voted": false, "ip": "", "last_modified_date": null, "dislikes": 0, "has_replies": false, "vote": false, "votable": true, "last_modified_by": null, "real_date": "2011-09-12_01:40:36", "date": "1 dag siden", "message": "Make Jar not War :-) Great tip!", "approved": true, "is_last_child": true, "can_edit": false, "can_reply": true, "likes": 0, "user_voted": null, "num_replies": 0, "down_voted": false, "is_first_child": true, "has_been_anonymized": false, "highlighted": false, "parent_post_id": 307120227, "depth": 1, "points": 0, "user_key": "steinim", "author_is_creator": false, "email": "", "killed": false, "is_realtime": false}}, "ordered_posts": [307120227, 307606540], "realtime_enabled": false, "ready": true, "mediaembed": [], "has_more_reactions": false, "realtime_paused": false, "integration": {"receiver_url": "", "hide_user_votes": false, "reply_position": true, "disqus_logo": true}, "highlighted": {}, "reactions_start": 0, "media_url": "http://mediacdn.disqus.com/1315852078", "users": {"steinim": {"username": "steinim", "tumblr": "", "about": "", "display_name": "Stein Inge Morisbak", "url": "http://disqus.com/steinim/", "registered": true, "remote_id": null, "linkedin": "", "blog": "http://morisbak.net/people/stein", "remote_domain": "", "points": 1, "facebook": "", "avatar": "http://mediacdn.disqus.com/uploads/users/621/6045/avatar32.jpg?1315806037", "delicious": "", "is_remote": false, "verified": true, "flickr": "", "twitter": "", "remote_domain_name": ""}, "twitter-14286844": {"username": "twitter-14286844", "tumblr": "", "about": "", "display_name": "Eirik Wang", "url": "http://disqus.com/twitter-14286844/", "registered": true, "remote_id": "14286844", "linkedin": "", "blog": "http://twitter.com/eirikwang", "remote_domain": 2, "points": 2, "facebook": "", "avatar": "http://mediacdn.disqus.com/uploads/users/1604/7039/avatar32.jpg?1314280323", "delicious": "", "is_remote": true, "verified": false, "flickr": "", "twitter": "http://twitter.com/eirikwang", "remote_domain_name": "Twitter"}}, "messagesx": {"count": 0, "unread": []}, "thread": {"voters_count": 0, "offset_posts": 0, "slug": "keeping_your_maven_build_fast", "paginate": false, "num_pages": 1, "days_alive": 0, "moderate_none": false, "voters": {}, "total_posts": 2, "realtime_paused": true, "queued": false, "pagination_type": "append", "user_vote": null, "likes": 3, "num_posts": 2, "closed": false, "per_page": 0, "id": 411128498, "killed": false, "moderate_all": false}, "forum": {"use_media": true, "avatar_size": 32, "apiKey": "xGGaxfk7zfcYF2kMYe28jM5QtadgVGXjyC7itXwkfkAIKeVFxOI9Ba6vTIxh0AD7", "comment_max_words": 0, "mobile_theme_disabled": false, "is_early_adopter": false, "login_buttons_enabled": true, "streaming_realtime": false, "reply_position": true, "id": 519932, "default_avatar_url": "http://mediacdn.disqus.com/1315852078/images/noavatar32.png", "template": {"mobile": {"url": "http://mediacdn.disqus.com/1315852078/build/themes/newmobile.js", "css": "http://mediacdn.disqus.com/1315852078/build/themes/newmobile.css"}, "url": "http://mediacdn.disqus.com/1315852078/build/themes/t_c4ca4238a0b923820dcc509a6f75849b.js?1", "api": "1.0", "name": "Narcissus", "css": "http://mediacdn.disqus.com/1315852078/build/themes/t_c4ca4238a0b923820dcc509a6f75849b.css?1"}, "max_depth": 0, "lastUpdate": 1302182005, "use_old_templates": false, "linkbacks_enabled": true, "allow_anon_votes": true, "revert_new_login_flow": false, "stylesUrl": "http://mediacdn.disqus.com/uploads/styles/51/9932/bekkopen.css", "show_avatar": true, "reactions_enabled": true, "disqus_auth_disabled": false, "name": "Bekk Open", "language": "nb", "mentions_enabled": true, "url": "bekkopen", "allow_anon_post": true, "thread_votes_disabled": false, "hasCustomStyles": false, "moderate_all": false}, "settings": {"realtimeHost": "qq.disqus.com", "uploads_url": "http://media.disqus.com/uploads", "ssl_media_url": "https://securecdn.disqus.com/1315852078", "realtime_url": "http://rt.disqus.com/forums/realtime-cached.js", "facebook_app_id": "52254943976", "minify_js": true, "recaptcha_public_key": "6LdKMrwSAAAAAPPLVhQE9LPRW4LUSZb810_iaa8u", "read_only": false, "facebook_api_key": "4aaa6c7038653ad2e4dbeba175a679ba", "realtimePort": "80", "debug": false, "disqus_url": "http://disqus.com", "media_url": "http://mediacdn.disqus.com/1315852078"}, "ranks": {}, "request": {"sort": 1, "is_authenticated": false, "user_type": "anon", "subscribe_on_post": 0, "missing_perm": null, "user_id": null, "remote_domain_name": "", "remote_domain": "", "is_verified": false, "email": "", "profile_url": "", "username": "", "is_global_moderator": false, "sharing": {}, "timestamp": "2011-09-13_10:35:35", "is_moderator": false, "forum": "bekkopen", "is_initial_load": true, "display_username": "", "points": null, "moderator_can_edit": false, "is_remote": false, "userkey": "", "page": 1}, "context": {"use_twitter_signin": true, "use_fb_connect": false, "show_reply": true, "active_switches": ["bespin", "community_icon", "embedapi", "google_auth", "mentions", "new_facebook_auth", "realtime_cached", "show_captcha_on_links", "ssl", "static_reply_frame", "static_styles", "statsd_created", "upload_media", "use_rs_paginator_60m"], "sigma_chance": 10, "use_google_signin": false, "switches": {"olark_admin_addons": true, "listactivity_replies": true, "olark_addons": true, "upload_media": true, "vip_read_slave": true, "embedapi": true, "ssl": true, "html_email": true, "moderate_ascending": true, "community_icon": true, "send_to_impermium": true, "show_captcha_on_links": true, "olark_admin_packages": true, "static_styles": true, "stats": true, "google_auth": true, "listactivity_replies_30d": true, "statsd.timings": true, "realtime_cached": true, "statsd_created": true, "bespin": true, "olark_support": true, "use_rs_paginator_60m": true, "mentions": true, "olark_install": true, "new_facebook_auth": true, "limit_get_posts_days_30d": true, "compare_spam": true, "static_reply_frame": true}, "forum_facebook_key": "", "use_yahoo": false, "subscribed": false, "active_gargoyle_switches": ["compare_spam", "html_email", "limit_get_posts_days_30d", "listactivity_replies", "listactivity_replies_30d", "moderate_ascending", "olark_addons", "olark_admin_addons", "olark_admin_packages", "olark_install", "olark_support", "send_to_impermium", "show_captcha_on_links", "stats", "statsd.timings", "vip_read_slave"], "realtime_speed": 15000, "use_openid": true}}; /* */
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

DISQUS.jsonData.context.csrf_token = '21bc467119200cb06806902fa8e2f5b0';

DISQUS.jsonData.urls = {
    login: 'http://disqus.com/profile/login/',
    logout: 'http://disqus.com/logout/',
    upload_remove: 'http://bekkopen.disqus.com/thread/keeping_your_maven_build_fast/async_media_remove/',
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
    forum_view: 'http://bekkopen.disqus.com/keeping_your_maven_build_fast',
    cnn_saml_try: 'http://disqus.com/saml/cnn/try/',
    realtime: DISQUS.jsonData.settings.realtime_url,
    thread_view: 'http://bekkopen.disqus.com/thread/keeping_your_maven_build_fast/',
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
