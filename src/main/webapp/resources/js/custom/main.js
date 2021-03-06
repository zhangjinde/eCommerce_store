$(function(){
    var lang = $.cookie("app");
    if(lang == undefined || lang.length < 2) lang = 'en';
    $('#locale').find('.lang-dropbtn').text(getLang(lang));
    window.onclick = function(event) {
        if (event.target.className.split(' ')[0] != 'dropbtn') {
            $('.dropdown-content').hide();
        }
    };
    "use strict";

    $('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
    //Checks if li has sub (ul) and adds class for toggle icon - just an UI


    $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
    //Checks if drodown menu's li elements have anothere level (ul), if not the dropdown is shown as regular dropdown, not a mega menu (thanks Luka Kladaric)

    $(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\">Navigation</a>");

    //Adds menu-mobile class (for mobile toggle menu) before the normal menu
    //Mobile menu is hidden if width is more then 959px, but normal menu is displayed
    //Normal menu is hidden if width is below 959px, and jquery adds mobile menu
    //Done this way so it can be used with wordpress without any trouble

    $(".menu > ul > li").hover(function (e) {
        if ($(window).width() > 943) {
            $(this).children("ul").stop(true, false).fadeToggle(1);
            e.preventDefault();
        }
    });
    //If width is more than 943px dropdowns are displayed on hover

    $(".menu > ul > li").click(function () {
        if ($(window).width() <= 943) {
            $(this).children("ul").fadeToggle(1);
        }
    });
    //If width is less or equal to 943px dropdowns are displayed on click (thanks Aman Jain from stackoverflow)

    $(".menu-mobile").click(function (e) {
        $(".menu > ul").toggleClass('show-on-mobile');
        e.preventDefault();
    });
    //when clicked on mobile-menu, normal menu is shown as a list, classic rwd menu story (thanks mwl from stackoverflow)

    $('li.home').mouseenter(function(){
        enter($('.home-main'),$('.homeBefore'));
    }).mouseleave(function(){
        leave($('.home-main'),$('.homeBefore'));
    }).click(function(){
        /*<![CDATA[*/
        var magic = /*[[@{context:}]]*/'';
        window.location = magic +'/';
        /*]]>*/
    });
    function enter(e, two){
        if(e.hasClass('home-st')) e.removeClass('home-st');
        e.addClass('home-hv');
        two.css('background', '#2d2d2d');
    }
    function leave(e, two){
        if(e.hasClass('home-hv')) e.removeClass('home-hv');
        e.addClass('home-st');
        two.css('background', '#111111');
    }
});
/*!
 * jQuery Cookie Plugin v1.4.1 *
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) define(['jquery'], factory);
    else if (typeof exports === 'object') module.exports = factory(require('jquery'));
    else factory(jQuery);
}(function ($) {
    var pluses = /\+/g;
    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }
    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }
    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }
    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }
        try {
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s;
        } catch(e) {}
    }
    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value;
    }
    var config = $.cookie = function (key, value, options) {
        if (arguments.length > 1 && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);
            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
            }
            return (document.cookie = [
                encode(key), '=', stringifyCookieValue(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path    ? '; path=' + options.path : '',
                options.domain  ? '; domain=' + options.domain : '',
                options.secure  ? '; secure' : ''
            ].join(''));
        }
        // Read
        var result = key ? undefined : {},
            cookies = document.cookie ? document.cookie.split('; ') : [],
            i = 0,
            l = cookies.length;

        for (; i < l; i++) {
            var parts = cookies[i].split('='),
                name = decode(parts.shift()),
                cookie = parts.join('=');
            if (key === name) {
                result = read(cookie, value);
                break;
            }
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }
        return result;
    };
    config.defaults = {};
    $.removeCookie = function (key, options) {
        $.cookie(key, '', $.extend({}, options, { expires: -1 }));
        return !$.cookie(key);
    };

}));
var a = {"/":"","Ё":"YO","Й":"I","Ц":"TS","У":"U","К":"K","Е":"E","Н":"N","Г":"G","Ш":"SH","Щ":"SCH","З":"Z","Х":"H","Ъ":"'","ё":"yo","й":"i","ц":"ts","у":"u","к":"k","е":"e","н":"n","г":"g","ш":"sh","щ":"sch","з":"z","х":"h","ъ":"'","Ф":"F","Ы":"I","В":"V","А":"a","П":"P","Р":"R","О":"O","Л":"L","Д":"D","Ж":"ZH","Э":"E","ф":"f","ы":"i","в":"v","а":"a","п":"p","р":"r","о":"o","л":"l","д":"d","ж":"zh","э":"e","Я":"Ya","Ч":"CH","С":"S","М":"M","И":"I","Т":"T","Ь":"_","Б":"B","Ю":"YU","я":"ya","ч":"ch","с":"s","м":"m","и":"i","т":"t","ь":"_","б":"b","ю":"yu", і:'i', І:'I'};
function transliterate(word){
    return word.split('').map(function (char) {
        return a[char] || char;
    }).join("");
}
var locale_en = {
    grid_items_number: "{0} {1} found",
    grid_view_items_per_page: "View {0} per page",
    grid_pagination_next: "Next >>",
    grid_pagination_prev: "<< Previous",
    single_item: "item",
    many_items: "items",
    view_all: "view all",
    grid_filter_product: "Product",
    grid_filter_gender: "Gender",
    grid_filter_category: "Category",
    grid_filter_price: "Price",
    grid_filter_salePrice: "Sale price",
    grid_filter_originPrice: "Origin price",
    grid_filter_brand: "Brand",
    grid_filter_size: "Size",
    grid_tabs_info_all_h2: "All items",
    grid_tabs_info_active_h2: "Active items",
    grid_tabs_info_inactive_h2: "Inactive items",
    grid_tabs_info_sale_h2: "Sale items",
    grid_tabs_info_all_h5: "Here is all of your items. Choose a filter on the left panel to refine your search. By default all the items sorted by it's arrival.",
    grid_tabs_info_active_h5: "Active items. All the items that currently available for customers. By default all the items sorted by it's arrival.",
    grid_tabs_info_inactive_h5: "Inactive items. This status is assigned when item is out of stock or waiting for approval by moderator after it has been uploaded.",
    grid_tabs_info_issale_h5: "Sale items. All the items that currently available for customers and has some discount.",
    no_results_found: "No results found :(",
    label_sortBy : "Sort by",
    label_color: "Color",
    itemName: "Item name",
    qty: "Qty.",
    status: "Status",
    date: "Date",
    discount: "Discount",
    origin: "Origin",
    sale: "Sale",
    options: "Options",
    expressEdit: "Express edit",
    price: "Price",
    add_to_group: "Add to group",
    group_jeans: 'Jeans',
    group_chinos: 'Chinos',
    group_shorts: 'Shorts',
    group_t_shirts: 'T-Shirts',
    group_vests: 'Vests',
    group_long_sleeves: 'Long Sleeves',
    group_shirts: 'Shirts',
    group_jumpers: 'Jumpers',
    group_jackets: 'Jackets',
    group_shoes: 'Shoes',
    group_boots: 'Boots',
    group_trainers: 'Trainers',
    group_accessories: 'Accessories',
    group_beanies: 'Beanies',
    label_choose: 'choose',
    label_addPhotos: 'Add photos',
    label_waist: 'Waist',
    label_length: 'Length',
    label_bottom: 'Bottom',
    label_shoulders: 'Shoulders',
    label_chest: 'Chest',
    label_sleeve: 'Sleeve',
    label_insole: 'Insole',
    label_cat_men: 'Men',
    label_cat_women: 'Women',
    new_item_add_title: 'Add New Item',
    new_item_edit_title: 'Edit Item'
};

var locale_ru = {
    grid_items_number: "Найдено {0} {1}",
    grid_view_items_per_page: "{0} на странице",
    grid_pagination_next: "След. >>",
    grid_pagination_prev: "<< Пред.",
    single_item: "позиция",
    many_items: "позиций",
    view_all: "показать все",
    grid_filter_product: "Продукция",
    grid_filter_gender: "Для кого",
    grid_filter_category: "Категория",
    grid_filter_price: "Цена",
    grid_filter_salePrice: "Продажная цена",
    grid_filter_originPrice: "Закупочная цена",
    grid_filter_brand: "Бренд",
    grid_filter_size: "Размер",
    grid_tabs_info_all_h2: "Весь товар",
    grid_tabs_info_active_h2: "Активный товар",
    grid_tabs_info_inactive_h2: "Неактивный товар",
    grid_tabs_info_sale_h2: "Распродажа",
    grid_tabs_info_all_h5: "Здесь находится полный список товара. Выбери фильтр на левой панели для того чтобы отсеять лишний товар из списка. По умолчанию товар отсортирован по дате добавления.",
    grid_tabs_info_active_h5: "Список активного товара. Весь товар который доступен покупателям (есть в наличии). По умолчанию товар отсортирован по дате добавления.",
    grid_tabs_info_inactive_h5: "Список неактивного товара. Этот статус обычно присваивается сразу после добавления товара или в случае отсутствия товара на складе. По умолчанию товар отсортирован по дате добавления.",
    grid_tabs_info_issale_h5: "Скидочный товар. Список активного товара со скидкой больше 1%. По умолчанию товар отсортирован по дате добавления.",
    no_results_found: "Ничего не найдено :(",
    label_sortBy : "Показать",
    label_color: "Цвет",
    itemName: "Наименование",
    qty: "Кол.",
    status: "Статус",
    date: "Дата",
    discount: "Скидка",
    origin: "Закупка",
    sale: "Продажа",
    options: "Опции",
    expressEdit: "Редактировать",
    price: "Цена",
    add_to_group: "Добавить в группу",
    group_jeans: 'Джинсы',
    group_chinos: 'Брюки',
    group_shorts: 'Шорты',
    group_t_shirts: 'Футболки',
    group_vests: 'Майки',
    group_long_sleeves: 'Лонгсливы',
    group_shirts: 'Рубашки',
    group_jumpers: 'Джемпера',
    group_jackets: 'Пиджаки/куртки',
    group_shoes: 'Туфли',
    group_boots: 'Ботинки',
    group_trainers: 'Кросовки',
    group_accessories: 'Аксессуары',
    group_beanies: 'Головные уборы',
    label_choose: 'выбрать',
    label_addPhotos: 'Добавить фото',
    label_waist: 'Пояс',
    label_length: 'Длина',
    label_bottom: 'Низ',
    label_shoulders: 'Плечи',
    label_chest: 'Грудь',
    label_sleeve: 'Рукав',
    label_insole: 'Стелька',
    label_cat_men: 'Мужское',
    label_cat_women: 'Женское',
    new_item_add_title: 'Добавить новый товар',
    new_item_edit_title: 'Редактировать товар'
};

var locale_ua = {
    grid_items_number: "Знайдено {0} {1}",
    grid_view_items_per_page: "{0} на сторінці",
    grid_pagination_next: "Далі >>",
    grid_pagination_prev: "<< Назад",
    single_item: "позиція",
    many_items: "позицій",
    view_all: "показати всі",
    grid_filter_product: "Продукція",
    grid_filter_gender: "Для кого",
    grid_filter_category: "Категорія",
    grid_filter_price: "Ціна",
    grid_filter_salePrice: "Продажна ціна",
    grid_filter_originPrice: "Закупна ціна",
    grid_filter_brand: "Бренд",
    grid_filter_size: "Розмір",
    grid_tabs_info_all_h2: "Увесь товар",
    grid_tabs_info_active_h2: "Активний товар",
    grid_tabs_info_inactive_h2: "Неактивний товар",
    grid_tabs_info_sale_h2: "Розпродаж",
    grid_tabs_info_all_h5: "Тут знаходиться повний список товару. Обери фільтр на лівій панелі для того щоб відсіяти лишній товар із списку. По замовчуванню товар відсортований по даті додавання.",
    grid_tabs_info_active_h5: "Список активного товару. Увесь товар який доступний покупцям (тобто є в наявності). По замовчуванню товар відсортований по даті додавання.",
    grid_tabs_info_inactive_h5: "Список неактивного товару. Цей статус зазвичай додається одразу після ддавання товару або у випадку закінчення товару на складі. По замовчуванню товар відсортований по даті додавання.",
    grid_tabs_info_issale_h5: "Товари зі знижками. Список активного товару зі знижкою більше 1%. По замовчуванню товар відсортований по даті додавання.",
    no_results_found: "Нічого не знайдено :(",
    label_sortBy : "Показати",
    label_color: "Колір",
    itemName: "Найменування",
    qty: "Кіл.",
    status: "Статус",
    date: "Дата",
    discount: "Знижка",
    origin: "Закупка",
    sale: "Продажа",
    options: "Опції",
    expressEdit: "Редагувати",
    price: "Ціна",
    add_to_group: "Добавити в групу",
    group_jeans: 'Джинси',
    group_chinos: 'Брюки',
    group_shorts: 'Шорти',
    group_t_shirts: 'Футболки',
    group_vests: 'Майки',
    group_long_sleeves: 'Лонгсліви',
    group_shirts: 'Сорочки',
    group_jumpers: 'Джемпера',
    group_jackets: 'Піджаки / куртки',
    group_shoes: 'Взуття',
    group_accessories: 'Аксесуари',
    group_beanies: 'Шапки',
    label_choose: 'обрати',
    label_addPhotos: 'Додати фото',
    label_waist: 'Пояс',
    label_length: 'Довжина',
    label_bottom: 'Низ',
    label_shoulders: 'Плечі',
    label_chest: 'Груди',
    label_sleeve: 'Рукав',
    label_insole: 'Стелька',
    label_cat_men: 'Чоловіче',
    label_cat_women: 'Жіноче',
    new_item_add_title: 'Додати новий товар',
    new_item_edit_title: 'Редагувати товар'
};
var lang='en';
function getLocale(locale){
    lang = locale;
    if(locale == null || locale == undefined) return locale_en;
    switch (locale){
        case 'ru': return locale_ru;
        case 'en': return locale_en;
        case 'ua': return locale_ua;
        default: return locale_en;
    }
}
function getLang(lang){
    switch (lang){
        case 'ru': return 'РУС';
        case 'en': return 'EN';
        case 'ua': return 'УКР';
    }
}
function format (time) {
    var arr = time.substring(0,time.indexOf(" ")).split('/');
    return arr[1]+'.'+arr[0]+'.'+arr[2].replace(',','');
}
function resolveLocale(obj){
    if(obj == null || obj == undefined) return '';
    switch (lang){
        case 'en': return obj.locale_en;
        case 'ru': return obj.locale_ru;
        case 'ua': return obj.locale_ua;
        default:   return obj.locale_en;
    }
}

var filer ={
    box: '<ul class="jFiler-items-list jFiler-items-grid"></ul>',
    item: '<li class="jFiler-item">\
                    <div class="jFiler-item-container">\
                        <div class="jFiler-item-inner">\
                            <div class="jFiler-item-thumb">\
                                <div class="jFiler-item-status"></div>\
                                <div class="jFiler-item-info">\
                                    <span class="jFiler-item-title"><b title="{{fi-name}}">{{fi-name | limitTo: 25}}</b></span>\
                                    <span class="jFiler-item-others">{{fi-size2}}</span>\
                                </div>\
                                {{fi-image}}\
                            </div>\
                            <div class="jFiler-item-assets jFiler-row">\
                                <ul class="list-inline pull-left"></ul>\
                                <ul class="list-inline pull-right">\
                                    <li><a class="icon-jfi-trash jFiler-item-trash-action"></a></li>\
                                </ul>\
                            </div>\
                        </div>\
                    </div>\
                </li>',
    itemAppend: '<li class="jFiler-item">\
                        <div class="jFiler-item-container">\
                            <div class="jFiler-item-inner">\
                                <div class="jFiler-item-thumb">\
                                    <div class="jFiler-item-status"></div>\
                                    <div class="jFiler-item-info">\
                                        <span class="jFiler-item-title"><b title="{{fi-name}}">{{fi-name | limitTo: 25}}</b></span>\
                                        <span class="jFiler-item-others">{{fi-size2}}</span>\
                                    </div>\
                                    {{fi-image}}\
                                </div>\
                                <div class="jFiler-item-assets jFiler-row">\
                                    <ul class="list-inline pull-left">\
                                        <li><span class="jFiler-item-others">{{fi-icon}}</span></li>\
                                    </ul>\
                                    <ul class="list-inline pull-right">\
                                        <li><a class="icon-jfi-trash jFiler-item-trash-action"></a></li>\
                                    </ul>\
                                </div>\
                            </div>\
                        </div>\
                    </li>'
};
function checkLength (form){
    return form != undefined && !form.val().length <= 0
}
function unlock (b, enable){
    b.prop('disabled', !enable)
}
function resolveGenderToValue(text){
    if(text=='MEN' ||text == 'Men' || text =='Мужское' || text == 'Чоловіче') return 0;
    else if(text == 'WOMEN' || text == 'Women' || text == 'Женское' || text =='Жіноче') return 1;
}
function resolveGenderToText(value, locale){
    switch (value) {
        case 'MEN': return locale.label_cat_men;
        case 'WOMEN': return locale.label_cat_women;
    }
}
function getAllURLParameters(){
    var search = location.search.substring(1);
    return search?JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}',
        function(key, value) { return key===""?value:decodeURIComponent(value) }):{}
}
function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}