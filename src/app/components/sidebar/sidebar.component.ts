import { Component } from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import { Entities } from 'modules/entities.module';
import 'rxjs/Rx';

@Component({
    selector: 'sidebar',
    viewProviders: [HTTP_PROVIDERS],
    template: `
    <div class="col-md-3 left_col">

        <div class="left_col scroll-view">
            <div class="navbar nav_title" style="border: 0;">
                <a href="index.html" class="site_title"><i class="fa fa-paw"></i> <span>Dashboard</span></a>
            </div>
    
            <div class="clearfix"></div>
    
            <!-- menu profile quick info -->
            <div class="profile">
                <div class="profile_pic">
                    <img src="src/assets/images/img.jpg" alt="..." class="img-circle profile_img">
                </div>
                <div class="profile_info">
                    <span>Welcome,</span>
                    <h2>John Doe</h2>
                </div>
            </div>
            <!-- /menu profile quick info -->

            <br />

            <!-- sidebar menu -->
            <div id="sidebar-menu" class="main_menu_side hidden-print main_menu" *ngIf="menuAreas" *ngFor="let menuAreas of menuTree">
                <div class="menu_section">
                    <h3>{{ menuAreas.area }}</h3>
                    <ul class="nav side-menu">
                        <li *ngFor="let menu of menuAreas.children" [class.active]="isActive([menu.link])"><a><i class="fa {{ menu.icon ? menu.icon : '' }}"></i> {{ menu.name }} <span class="fa fa-chevron-down" *ngIf="menu.children"></span></a>
                            <ul class="nav child_menu">
                                <li *ngFor="let submenu of menu.children"><a >{{ submenu.name }}</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            
            <!-- /menu footer buttons -->
            <div class="sidebar-footer hidden-small">
                <a data-toggle="tooltip" data-placement="top" title="Settings">
                    <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
                </a>
                <a data-toggle="tooltip" data-placement="top" title="FullScreen">
                    <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
                </a>
                <a data-toggle="tooltip" data-placement="top" title="Lock">
                    <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
                </a>
                <a data-toggle="tooltip" data-placement="top" title="Logout">
                    <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
                </a>
            </div>
            <!-- /menu footer buttons -->
        </div>
    `

})
export class SidebarComponent {
    menuTree: Entities.Menu[];

    constructor(http: Http) {
        http.get('src/app/components/sidebar/menu.json')
            .map(res => res.json())
            .subscribe(menu => this.initView(menu));
    }

    isActive(path) {
        return true;
        /*
        var currentPath = this.currentPath();
        if (path == '/')
            return currentPath == '/';
        return currentPath.indexOf(path) == 0;
        */
    }
/*
    currentPath() {
        var currentPath = this.locationPath.split('#')[0];
        if (currentPath.indexOf('?') !== -1) {
            currentPath = currentPath.split('?')[0];
        }
        return currentPath;
    }
*/
    initView(menu: Entities.Menu[]) {
        this.menuTree = menu;
/*
        var $BODY = $('body'),
            $MENU_TOGGLE = $('#menu_toggle'),
            $SIDEBAR_MENU = $('#sidebar-menu'),
            $SIDEBAR_FOOTER = $('.sidebar-footer'),
            $LEFT_COL = $('.left_col'),
            $RIGHT_COL = $('.right_col'),
            $NAV_MENU = $('.nav_menu'),
            $FOOTER = $('footer');


        var setContentHeight = function () {
            // reset height
            $RIGHT_COL.css('min-height', $(window).height());

            var bodyHeight = $BODY.height(),
                leftColHeight = $LEFT_COL.eq(1).height() + $SIDEBAR_FOOTER.height(),
                contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;

            // normalize content
            contentHeight -= $NAV_MENU.height() + $FOOTER.height();

            $RIGHT_COL.css('min-height', contentHeight);
        };

        $SIDEBAR_MENU.find('a').on('click', function(ev) {
            var $li = $(this).parent();

            if ($li.is('.active')) {
                $li.removeClass('active');
                $('ul:first', $li).slideUp(function() {
                    setContentHeight();
                });
            } else {
                // prevent closing menu if we are on child menu
                if (!$li.parent().is('.child_menu')) {
                    $SIDEBAR_MENU.find('li').removeClass('active');
                    $SIDEBAR_MENU.find('li ul').slideUp();
                }

                $li.addClass('active');

                $('ul:first', $li).slideDown(function() {
                    setContentHeight();
                });
            }
        });

        // toggle small or large menu
        $MENU_TOGGLE.on('click', function() {
            if ($BODY.hasClass('nav-md')) {
                $BODY.removeClass('nav-md').addClass('nav-sm');

                if ($SIDEBAR_MENU.find('li').hasClass('active')) {
                    $SIDEBAR_MENU.find('li.active').addClass('active-sm').removeClass('active');
                }
            } else {
                $BODY.removeClass('nav-sm').addClass('nav-md');

                if ($SIDEBAR_MENU.find('li').hasClass('active-sm')) {
                    $SIDEBAR_MENU.find('li.active-sm').addClass('active').removeClass('active-sm');
                }
            }

            setContentHeight();
        });

        $SIDEBAR_MENU.find('a[href="#' + this.currentPath() + '"]').parent('li').addClass('current-page').parents('ul').slideDown(function() {
            setContentHeight();
        }).parent().addClass('active');

        // fixed sidebar
        if ($.fn.mCustomScrollbar) {
            $('.menu_fixed').mCustomScrollbar({
                autoHideScrollbar: true,
                theme: 'minimal',
                mouseWheel:{ preventDefault: true }
            });
        }
        */
    }
}