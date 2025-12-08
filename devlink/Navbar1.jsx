"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Navbar1.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-59":{"id":"e-59","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-87","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-60"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"63bb6256-65b6-b64a-00d3-c8826dd2afab","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"63bb6256-65b6-b64a-00d3-c8826dd2afab","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1755853884200},"e-60":{"id":"e-60","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-95","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-59"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"63bb6256-65b6-b64a-00d3-c8826dd2afab","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"63bb6256-65b6-b64a-00d3-c8826dd2afab","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1755853884200},"e-61":{"id":"e-61","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-97","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-62"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"63bb6256-65b6-b64a-00d3-c8826dd2afab","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"63bb6256-65b6-b64a-00d3-c8826dd2afab","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1755853884200},"e-62":{"id":"e-62","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-98","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-61"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"63bb6256-65b6-b64a-00d3-c8826dd2afab","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"63bb6256-65b6-b64a-00d3-c8826dd2afab","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1755853884200}},"actionLists":{"a-87":{"id":"a-87","title":"Navbar07 -> OPEN","actionItemGroups":[{"actionItems":[{"id":"a-87-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".uui-navbar07_dropdown-list","selectorGuids":["b175d56a-dd61-5c16-3217-df44c245e81d"]},"value":0,"unit":""}},{"id":"a-87-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".uui-navbar07_dropdown-list","selectorGuids":["b175d56a-dd61-5c16-3217-df44c245e81d"]},"yValue":-2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]},{"actionItems":[{"id":"a-87-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".uui-dropdown-icon","selectorGuids":["b175d56a-dd61-5c16-3217-df44c245e808"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-87-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".uui-navbar07_dropdown-list","selectorGuids":["b175d56a-dd61-5c16-3217-df44c245e81d"]},"value":1,"unit":""}},{"id":"a-87-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".uui-navbar07_dropdown-list","selectorGuids":["b175d56a-dd61-5c16-3217-df44c245e81d"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626161550593},"a-95":{"id":"a-95","title":"Navbar07 -> CLOSE","actionItemGroups":[{"actionItems":[{"id":"a-95-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".uui-dropdown-icon","selectorGuids":["b175d56a-dd61-5c16-3217-df44c245e808"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-95-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".uui-navbar07_dropdown-list","selectorGuids":["b175d56a-dd61-5c16-3217-df44c245e81d"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-95-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".uui-navbar07_dropdown-list","selectorGuids":["b175d56a-dd61-5c16-3217-df44c245e81d"]},"yValue":-2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626161607847},"a-97":{"id":"a-97","title":"Navbar07 dropdown (tablet) -> OPEN","actionItemGroups":[{"actionItems":[{"id":"a-97-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".uui-navbar07_dropdown-list","selectorGuids":["b175d56a-dd61-5c16-3217-df44c245e81d"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-97-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".uui-navbar07_dropdown-list","selectorGuids":["b175d56a-dd61-5c16-3217-df44c245e81d"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626242958157},"a-98":{"id":"a-98","title":"Navbar07 dropdown (tablet) -> CLOSE","actionItemGroups":[{"actionItems":[{"id":"a-98-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".uui-navbar07_dropdown-list","selectorGuids":["b175d56a-dd61-5c16-3217-df44c245e81d"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626242958157}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Navbar1({ as: _Component = _Builtin.NavbarWrapper }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "navbar")}
      tag="div"
      config={{
        animation: "default",
        collapse: "medium",
        docHeight: false,
        duration: 400,
        easing: "ease",
        easing2: "ease",
        noScroll: false,
      }}
    >
      <_Builtin.NavbarContainer
        className={_utils.cx(_styles, "container-16")}
        tag="div"
      >
        <_Builtin.NavbarBrand
          className={_utils.cx(_styles, "brand-2")}
          options={{
            href: "#",
          }}
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "home")}
            loading="lazy"
            width="154"
            height="auto"
            alt=""
            src="https://cdn.prod.website-files.com/6728c00a3dc736ab0bc51fde/6851315c0e9db06018e980c2_rosenlew2.png"
          />
        </_Builtin.NavbarBrand>
        <_Builtin.NavbarMenu
          className={_utils.cx(_styles, "uui-navbar07_menu")}
          tag="nav"
          role="navigation"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "uui-navbar07_menu-left")}
            tag="div"
          >
            <_Builtin.NavbarLink
              className={_utils.cx(_styles, "uui-navbar07_link")}
              options={{
                href: "#",
              }}
            >
              {"Blogi"}
            </_Builtin.NavbarLink>
            <_Builtin.DropdownWrapper
              className={_utils.cx(_styles, "uui-navbar07_menu-dropdown")}
              data-w-id="63bb6256-65b6-b64a-00d3-c8826dd2afab"
              tag="div"
              delay={300}
              hover={true}
            >
              <_Builtin.DropdownToggle
                className={_utils.cx(_styles, "uui-navbar07_dropdown-toggle")}
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "uui-dropdown-icon")}
                  value="%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewbox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.67%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-block-19")}
                  tag="div"
                >
                  {"Tuotteet"}
                </_Builtin.Block>
              </_Builtin.DropdownToggle>
              <_Builtin.DropdownList
                className={_utils.cx(_styles, "uui-navbar07_dropdown-list")}
                tag="nav"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "uui-navbar07_dropdown-link-list"
                  )}
                  tag="div"
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "uui-navbar07_dropdown-link")}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "uui-navbar07_icon-wrapper"
                      )}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "uui-icon-1x1-xsmall-2")}
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20256%20256%22%3E%3Crect%20width%3D%22256%22%20height%3D%22256%22%20fill%3D%22none%22%2F%3E%3Cline%20x1%3D%22128%22%20y1%3D%2264%22%20x2%3D%22128%22%20y2%3D%22192%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%2216%22%2F%3E%3Cpolyline%20points%3D%22104%2040%20128%2064%20152%2040%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%2216%22%2F%3E%3Cpolyline%20points%3D%22104%20216%20128%20192%20152%20216%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%2216%22%2F%3E%3Cline%20x1%3D%2272.57%22%20y1%3D%2296%22%20x2%3D%22183.43%22%20y2%3D%22160%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%2216%22%2F%3E%3Cpolyline%20points%3D%2240%20104%2072.57%2096%2064%2064%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%2216%22%2F%3E%3Cpolyline%20points%3D%22192%20192%20183.43%20160%20216%20152%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%2216%22%2F%3E%3Cline%20x1%3D%2272.57%22%20y1%3D%22160%22%20x2%3D%22183.43%22%20y2%3D%2296%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%2216%22%2F%3E%3Cpolyline%20points%3D%2264%20192%2072.57%20160%2040%20152%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%2216%22%2F%3E%3Cpolyline%20points%3D%22216%20104%20183.43%2096%20192%2064%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%2216%22%2F%3E%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "uui-navbar07_item-right")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "uui-navbar07_item-heading"
                        )}
                        tag="div"
                      >
                        {"Kylmälaitteet"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "uui-text-size-small-2")}
                        tag="div"
                      >
                        {"Tehokasta kylmäsäilytystä moderniin keittiöön."}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "uui-navbar07_dropdown-link-tiskari"
                    )}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "uui-navbar07_icon-wrapper"
                      )}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "uui-icon-1x1-xsmall-2")}
                        value="%3Csvg%20fill%3D%22%23000000%22%20viewBox%3D%220%20-15.87%20122.88%20122.88%22%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20style%3D%22enable-background%3Anew%200%200%20122.88%2091.14%22%20xml%3Aspace%3D%22preserve%22%3E%3Cg%20id%3D%22SVGRepo_bgCarrier%22%20stroke-width%3D%220%22%3E%3C%2Fg%3E%3Cg%20id%3D%22SVGRepo_tracerCarrier%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fg%3E%3Cg%20id%3D%22SVGRepo_iconCarrier%22%3E%20%3Cg%3E%20%3Cpath%20d%3D%22M59.78%2C88.76h53.35l5.79-6.09H54.89L59.78%2C88.76L59.78%2C88.76z%20M26.48%2C51.68c-0.17-0.56-0.76-0.88-1.31-0.71%20c-0.56%2C0.17-0.88%2C0.76-0.71%2C1.32c0.95%2C3.15%2C2.53%2C5.75%2C4.45%2C7.76c2.1%2C2.2%2C4.63%2C3.67%2C7.2%2C4.34c0.56%2C0.15%2C1.14-0.2%2C1.29-0.76%20c0.15-0.56-0.2-1.14-0.76-1.29c-2.21-0.57-4.38-1.85-6.2-3.76C28.73%2C56.82%2C27.33%2C54.49%2C26.48%2C51.68L26.48%2C51.68L26.48%2C51.68%20L26.48%2C51.68z%20M82.74%2C17.67h-0.28c0-2.32-0.87-4.35-2.6-6.09c-1.73-1.73-3.76-2.6-6.09-2.6V8.69c2.32%2C0%2C4.35-0.87%2C6.09-2.61%20c1.73-1.74%2C2.6-3.77%2C2.6-6.09h0.28c0%2C2.32%2C0.87%2C4.35%2C2.6%2C6.09s3.76%2C2.6%2C6.09%2C2.6v0.28c-2.32%2C0-4.35%2C0.87-6.09%2C2.6%20C83.61%2C13.31%2C82.74%2C15.34%2C82.74%2C17.67L82.74%2C17.67L82.74%2C17.67z%20M95.66%2C36.21h-0.13c0-1.06-0.4-2-1.2-2.79s-1.73-1.19-2.79-1.19%20v-0.13c1.06%2C0%2C2-0.4%2C2.79-1.19c0.8-0.8%2C1.2-1.73%2C1.2-2.79h0.13c0%2C1.06%2C0.4%2C2%2C1.2%2C2.79c0.79%2C0.8%2C1.72%2C1.2%2C2.79%2C1.2v0.13%20c-1.06%2C0-2%2C0.4-2.79%2C1.19C96.06%2C34.22%2C95.66%2C35.15%2C95.66%2C36.21L95.66%2C36.21L95.66%2C36.21z%20M107.32%2C23.78h-0.24%20c0-1.95-0.73-3.65-2.18-5.11c-1.46-1.46-3.16-2.19-5.11-2.19v-0.24c1.95%2C0%2C3.65-0.73%2C5.11-2.19c1.46-1.46%2C2.18-3.16%2C2.18-5.11h0.24%20c0%2C1.95%2C0.73%2C3.65%2C2.19%2C5.11s3.16%2C2.19%2C5.11%2C2.19v0.24c-1.95%2C0-3.65%2C0.73-5.11%2C2.19C108.04%2C20.13%2C107.32%2C21.83%2C107.32%2C23.78%20L107.32%2C23.78L107.32%2C23.78z%20M42.77%2C17.99c7.94%2C0%2C15.14%2C3.22%2C20.35%2C8.43c5.21%2C5.21%2C8.43%2C12.4%2C8.43%2C20.35c0%2C2.67-0.36%2C5.25-1.04%2C7.7%20H82c0.49-2.49%2C0.74-5.07%2C0.74-7.7c0-11.04-4.47-21.03-11.71-28.26l0%2C0l0%2C0C63.8%2C11.26%2C53.81%2C6.79%2C42.77%2C6.79%20c-11.04%2C0-21.03%2C4.48-28.26%2C11.71C7.27%2C25.73%2C2.8%2C35.72%2C2.8%2C46.76c0%2C11.04%2C4.48%2C21.03%2C11.71%2C28.26s17.23%2C11.71%2C28.26%2C11.71%20c3.85%2C0%2C7.57-0.54%2C11.09-1.56l-2.32-2.89c-0.2-0.21-0.32-0.5-0.32-0.81c0-0.66%2C0.53-1.19%2C1.19-1.19h4.44l-4.99-6.21%20c-2.86%2C0.95-5.91%2C1.47-9.09%2C1.47c-7.94%2C0-15.14-3.22-20.35-8.43s-8.43-12.4-8.43-20.35c0-7.94%2C3.22-15.14%2C8.43-20.35%20C27.63%2C21.21%2C34.83%2C17.99%2C42.77%2C17.99L42.77%2C17.99L42.77%2C17.99z%20M68%2C54.47c0.74-2.44%2C1.14-5.02%2C1.14-7.7%20c0-7.28-2.95-13.88-7.73-18.65l0%2C0c-4.78-4.77-11.37-7.73-18.65-7.73c-7.28%2C0-13.88%2C2.95-18.65%2C7.73%20c-4.78%2C4.78-7.73%2C11.37-7.73%2C18.65s2.95%2C13.88%2C7.73%2C18.65c4.77%2C4.77%2C11.37%2C7.73%2C18.65%2C7.73c4.59%2C0%2C8.9-1.17%2C12.66-3.23L51.49%2C65%20c-0.41-0.51-0.33-1.26%2C0.18-1.67c0.22-0.18%2C0.48-0.26%2C0.74-0.26v0h4.44l-5.36-6.68c-0.41-0.51-0.33-1.26%2C0.18-1.67%20c0.22-0.18%2C0.48-0.26%2C0.74-0.26v0H68L68%2C54.47z%20M57.47%2C68.66l0.15-0.1l0.16%2C0.49l2.12%2C2.64H113l5.92-6.23H54.89L57.47%2C68.66%20L57.47%2C68.66z%20M42.77%2C4c11.81%2C0%2C22.5%2C4.79%2C30.24%2C12.53c7.74%2C7.74%2C12.53%2C18.43%2C12.53%2C30.24c0%2C2.63-0.24%2C5.2-0.69%2C7.7h36.85%20c0.66%2C0%2C1.19%2C0.53%2C1.19%2C1.19c0%2C0.35-0.15%2C0.66-0.39%2C0.88l-6.22%2C6.54h5.42c0.66%2C0%2C1.19%2C0.53%2C1.19%2C1.19c0%2C0.35-0.15%2C0.66-0.39%2C0.88%20l-6.22%2C6.54h5.42c0.66%2C0%2C1.19%2C0.53%2C1.19%2C1.19c0%2C0.35-0.15%2C0.66-0.39%2C0.88l-6.22%2C6.54h5.42v0c0.29%2C0%2C0.59%2C0.11%2C0.82%2C0.33%20c0.47%2C0.45%2C0.49%2C1.2%2C0.04%2C1.68l-7.99%2C8.41c-0.22%2C0.27-0.55%2C0.43-0.92%2C0.43H59.22v0c-0.35%2C0-0.69-0.15-0.92-0.44l-2.54-3.17%20c-4.09%2C1.3-8.46%2C2.01-12.98%2C2.01c-11.81%2C0-22.5-4.79-30.24-12.53C4.79%2C69.27%2C0%2C58.58%2C0%2C46.76c0-11.81%2C4.79-22.5%2C12.53-30.24%20C20.26%2C8.78%2C30.96%2C4%2C42.77%2C4L42.77%2C4L42.77%2C4z%20M113%2C80.29l5.92-6.23H54.89l5%2C6.23H113L113%2C80.29z%20M113%2C63.07l5.92-6.23H54.89%20l5%2C6.23H113L113%2C63.07z%22%3E%3C%2Fpath%3E%20%3C%2Fg%3E%20%3C%2Fg%3E%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "uui-navbar07_item-right")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "uui-navbar07_item-heading"
                        )}
                        tag="div"
                      >
                        {"Astianpesukoneet"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "uui-text-size-small-2")}
                        tag="div"
                      >
                        {
                          "Nopeuta arkea tehokkaalla ja hiljaisella astianpesukoneilla."
                        }
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "uui-navbar07_dropdown-link")}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "uui-navbar07_icon-wrapper"
                      )}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "uui-icon-1x1-xsmall-2")}
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20256%20256%22%3E%3Crect%20width%3D%22256%22%20height%3D%22256%22%20fill%3D%22none%22%2F%3E%3Crect%20x%3D%2240%22%20y%3D%2240%22%20width%3D%22176%22%20height%3D%22176%22%20rx%3D%228%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%2216%22%2F%3E%3Ccircle%20cx%3D%2284%22%20cy%3D%2276%22%20r%3D%2212%22%2F%3E%3Ccircle%20cx%3D%22128%22%20cy%3D%2276%22%20r%3D%2212%22%2F%3E%3Ccircle%20cx%3D%22172%22%20cy%3D%2276%22%20r%3D%2212%22%2F%3E%3Crect%20x%3D%2272%22%20y%3D%22112%22%20width%3D%22112%22%20height%3D%2272%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%2216%22%2F%3E%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "uui-navbar07_item-right")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "uui-navbar07_item-heading"
                        )}
                        tag="div"
                      >
                        {"Uunit ja liedet"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "uui-text-size-small-2")}
                        tag="div"
                      >
                        {
                          "Valmista herkulliset ateriat helposti ja luotettavasti."
                        }
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "uui-navbar07_dropdown-link")}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "uui-navbar07_icon-wrapper"
                      )}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "uui-icon-1x1-xsmall-2")}
                        value="%3Csvg%20viewBox%3D%220%200%2032%2032%22%20id%3D%22svg5%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Asvg%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22%23000000%22%3E%3Cg%20id%3D%22SVGRepo_bgCarrier%22%20stroke-width%3D%220%22%3E%3C%2Fg%3E%3Cg%20id%3D%22SVGRepo_tracerCarrier%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fg%3E%3Cg%20id%3D%22SVGRepo_iconCarrier%22%3E%20%3Cdefs%20id%3D%22defs2%22%3E%3C%2Fdefs%3E%20%3Cg%20id%3D%22layer1%22%20transform%3D%22translate(-156%2C-340)%22%3E%20%3Cpath%20d%3D%22m%20169.5%2C357.01367%20a%201%2C1%200%200%200%20-0.70703%2C0.29297%201%2C1%200%200%200%200%2C1.41406%20l%205%2C5%20a%201%2C1%200%200%200%201.41406%2C0%201%2C1%200%200%200%200%2C-1.41406%20l%20-5%2C-5%20A%201%2C1%200%200%200%20169.5%2C357.01367%20Z%22%20id%3D%22path453523%22%20style%3D%22color%3A%23000000%3Bfill%3A%23000000%3Bfill-rule%3Aevenodd%3Bstroke-linecap%3Around%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A4.1%3B-inkscape-stroke%3Anone%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22m%20169.5%2C351.51367%20a%201%2C1%200%200%200%20-0.70703%2C0.29297%201%2C1%200%200%200%200%2C1.41406%20l%205%2C5%20a%201%2C1%200%200%200%201.41406%2C0%201%2C1%200%200%200%200%2C-1.41406%20l%20-5%2C-5%20A%201%2C1%200%200%200%20169.5%2C351.51367%20Z%22%20id%3D%22path453515%22%20style%3D%22color%3A%23000000%3Bfill%3A%23000000%3Bfill-rule%3Aevenodd%3Bstroke-linecap%3Around%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A4.1%3B-inkscape-stroke%3Anone%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22m%20168.07812%2C342.01562%20a%201.0001%2C1.0001%200%200%200%20-0.48437%2C0.084%20l%20-9%2C4%20a%201.0001%2C1.0001%200%200%200%20-0.58398%2C1.05469%20l%201%2C7%20a%201.0001%2C1.0001%200%200%200%201.4375%2C0.7539%20L%20163%2C353.63281%20v%2015.38086%20a%201.0001%2C1.0001%200%200%200%201%2C1%20h%2016%20a%201.0001%2C1.0001%200%200%200%201%2C-1%20v%20-15.38086%20l%202.55273%2C1.27539%20a%201.0001%2C1.0001%200%200%200%201.4375%2C-0.7539%20l%201%2C-7%20a%201.0001%2C1.0001%200%200%200%20-0.58398%2C-1.05469%20l%20-9%2C-4%20A%201.0001%2C1.0001%200%200%200%20175%2C343.01367%20c%200%2C1.6687%20-1.3313%2C3%20-3%2C3%20-1.6687%2C0%20-3%2C-1.3313%20-3%2C-3%20a%201.0001%2C1.0001%200%200%200%20-0.92188%2C-0.99805%20z%20m%20-0.79101%2C2.40821%20c%200.62208%2C2.05393%202.46313%2C3.58984%204.71289%2C3.58984%202.24976%2C0%204.09081%2C-1.53591%204.71289%2C-3.58984%20l%207.18945%2C3.19531%20-0.69726%2C4.87891%20-2.75781%2C-1.37891%20A%201.0001%2C1.0001%200%200%200%20179%2C352.01367%20v%2016%20h%20-14%20v%20-16%20a%201.0001%2C1.0001%200%200%200%20-1.44727%2C-0.89453%20l%20-2.75781%2C1.37891%20-0.69726%2C-4.87891%20z%22%20id%3D%22path453497%22%20style%3D%22color%3A%23000000%3Bfill%3A%23000000%3Bfill-rule%3Aevenodd%3Bstroke-linecap%3Around%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A4.1%3B-inkscape-stroke%3Anone%22%3E%3C%2Fpath%3E%20%3C%2Fg%3E%20%3C%2Fg%3E%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "uui-navbar07_item-right")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "uui-navbar07_item-heading"
                        )}
                        tag="div"
                      >
                        {"Pyykinpesu"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "uui-text-size-small-2")}
                        tag="div"
                      >
                        {
                          "Pidä vaatteesi raikkaina ja säästä aikaa älykkäillä ratkaisuilla."
                        }
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "uui-navbar07_dropdown-link")}
                    id={_utils.cx(
                      _styles,
                      "w-node-f62b6ca3-3a0f-3b37-d763-be2f51c61c2b-aa94d1a6"
                    )}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "uui-navbar07_icon-wrapper"
                      )}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "uui-icon-1x1-xsmall-2")}
                        value="%3Csvg%20fill%3D%22%23000000%22%20viewBox%3D%220%20-22.55%20122.88%20122.88%22%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20style%3D%22enable-background%3Anew%200%200%20122.88%2077.77%22%20xml%3Aspace%3D%22preserve%22%3E%3Cg%20id%3D%22SVGRepo_bgCarrier%22%20stroke-width%3D%220%22%3E%3C%2Fg%3E%3Cg%20id%3D%22SVGRepo_tracerCarrier%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fg%3E%3Cg%20id%3D%22SVGRepo_iconCarrier%22%3E%20%3Cstyle%20type%3D%22text%2Fcss%22%3E.st0%7Bfill-rule%3Aevenodd%3Bclip-rule%3Aevenodd%3B%7D%3C%2Fstyle%3E%20%3Cg%3E%20%3Cpath%20class%3D%22st0%22%20d%3D%22M95.45%2C13.68h3.94c0.49%2C0%2C0.89%2C0.4%2C0.89%2C0.89v3c0%2C0.49-0.4%2C0.89-0.89%2C0.89h-3.94c-0.49%2C0-0.89-0.4-0.89-0.89%20v-3C94.56%2C14.08%2C94.96%2C13.68%2C95.45%2C13.68L95.45%2C13.68z%20M24.22%2C75.44v1.14c0%2C0.65-0.53%2C1.18-1.18%2C1.18H17.2%20c-0.65%2C0-1.18-0.53-1.18-1.18v-1.15H4.7c-1.29%2C0-2.47-0.53-3.32-1.38C0.53%2C73.21%2C0%2C72.04%2C0%2C70.74V4.7c0-1.29%2C0.53-2.47%2C1.38-3.32%20C2.23%2C0.53%2C3.41%2C0%2C4.7%2C0h113.48c1.29%2C0%2C2.47%2C0.53%2C3.32%2C1.38c0.85%2C0.85%2C1.38%2C2.03%2C1.38%2C3.32v66.04c0%2C1.29-0.53%2C2.47-1.38%2C3.32%20c-0.85%2C0.85-2.03%2C1.38-3.32%2C1.38h-10.06v1.14c0%2C0.65-0.53%2C1.18-1.18%2C1.18h-5.84c-0.65%2C0-1.18-0.53-1.18-1.18v-1.15H24.22%20L24.22%2C75.44z%20M101.62%2C50.08c0.24%2C0%2C0.43%2C0.19%2C0.43%2C0.43c0%2C0.24-0.19%2C0.43-0.43%2C0.43c-0.24%2C0-0.43-0.19-0.43-0.43%20C101.19%2C50.27%2C101.38%2C50.08%2C101.62%2C50.08L101.62%2C50.08z%20M99.43%2C50.34c0.23-0.06%2C0.47%2C0.08%2C0.53%2C0.31c0.06%2C0.23-0.08%2C0.47-0.31%2C0.53%20c-0.23%2C0.06-0.47-0.08-0.53-0.31C99.07%2C50.64%2C99.2%2C50.4%2C99.43%2C50.34L99.43%2C50.34z%20M97.39%2C51.16c0.21-0.12%2C0.47-0.05%2C0.59%2C0.16%20c0.12%2C0.21%2C0.05%2C0.47-0.16%2C0.59c-0.21%2C0.12-0.47%2C0.05-0.59-0.16C97.11%2C51.54%2C97.18%2C51.28%2C97.39%2C51.16L97.39%2C51.16z%20M95.63%2C52.48%20c0.17-0.17%2C0.44-0.17%2C0.61%2C0c0.17%2C0.17%2C0.17%2C0.44%2C0%2C0.61c-0.17%2C0.17-0.44%2C0.17-0.61%2C0C95.46%2C52.93%2C95.46%2C52.65%2C95.63%2C52.48%20L95.63%2C52.48z%20M94.27%2C54.21c0.12-0.21%2C0.38-0.28%2C0.59-0.16c0.21%2C0.12%2C0.28%2C0.39%2C0.16%2C0.59c-0.12%2C0.21-0.38%2C0.28-0.59%2C0.16%20C94.22%2C54.69%2C94.14%2C54.42%2C94.27%2C54.21L94.27%2C54.21z%20M93.4%2C56.24c0.06-0.23%2C0.3-0.37%2C0.53-0.31c0.23%2C0.06%2C0.37%2C0.3%2C0.31%2C0.53%20c-0.06%2C0.23-0.3%2C0.37-0.53%2C0.31C93.47%2C56.71%2C93.34%2C56.47%2C93.4%2C56.24L93.4%2C56.24z%20M109.71%2C56.42c0.06%2C0.23-0.08%2C0.47-0.31%2C0.53%20c-0.23%2C0.06-0.47-0.08-0.53-0.31c-0.06-0.23%2C0.08-0.47%2C0.31-0.53C109.41%2C56.05%2C109.64%2C56.19%2C109.71%2C56.42L109.71%2C56.42z%20M108.89%2C54.38c0.12%2C0.21%2C0.05%2C0.47-0.16%2C0.59c-0.21%2C0.12-0.47%2C0.05-0.59-0.16c-0.12-0.21-0.05-0.47%2C0.16-0.59%20C108.5%2C54.1%2C108.77%2C54.17%2C108.89%2C54.38L108.89%2C54.38z%20M107.56%2C52.61c0.17%2C0.17%2C0.17%2C0.44%2C0%2C0.61c-0.17%2C0.17-0.44%2C0.17-0.61%2C0%20c-0.17-0.17-0.17-0.44%2C0-0.61C107.12%2C52.44%2C107.39%2C52.44%2C107.56%2C52.61L107.56%2C52.61z%20M105.83%2C51.25c0.21%2C0.12%2C0.28%2C0.38%2C0.16%2C0.59%20c-0.12%2C0.21-0.38%2C0.28-0.59%2C0.16c-0.21-0.12-0.28-0.38-0.16-0.59C105.36%2C51.2%2C105.62%2C51.13%2C105.83%2C51.25L105.83%2C51.25z%20M103.8%2C50.39c0.23%2C0.06%2C0.37%2C0.3%2C0.31%2C0.53c-0.06%2C0.23-0.3%2C0.37-0.53%2C0.31c-0.23-0.06-0.37-0.3-0.31-0.53%20C103.33%2C50.46%2C103.57%2C50.33%2C103.8%2C50.39L103.8%2C50.39z%20M16.4%2C32.11c-0.2%2C0.63-0.87%2C0.98-1.5%2C0.78c-0.63-0.2-0.98-0.87-0.78-1.5%20c0.57-1.79%2C1.91-4.46%2C3.64-6.74c1.38-1.81%2C3.02-3.42%2C4.77-4.24c0.59-0.28%2C1.3-0.02%2C1.58%2C0.57c0.28%2C0.59%2C0.02%2C1.3-0.57%2C1.58%20c-1.35%2C0.63-2.7%2C1.98-3.87%2C3.52C18.1%2C28.15%2C16.9%2C30.53%2C16.4%2C32.11L16.4%2C32.11z%20M90.11%2C6.82h23.07c0.79%2C0%2C1.5%2C0.32%2C2.02%2C0.84%20c0.52%2C0.52%2C0.84%2C1.23%2C0.84%2C2.02v55.7c0%2C0.79-0.32%2C1.5-0.84%2C2.02c-0.52%2C0.52-1.23%2C0.84-2.02%2C0.84H90.11c-0.79%2C0-1.5-0.32-2.02-0.84%20h0c-0.52-0.52-0.84-1.23-0.84-2.02V9.69c0-0.79%2C0.32-1.5%2C0.84-2.02C88.6%2C7.15%2C89.32%2C6.82%2C90.11%2C6.82L90.11%2C6.82z%20M113.18%2C9.21%20H90.11c-0.13%2C0-0.25%2C0.05-0.34%2C0.14c-0.09%2C0.09-0.14%2C0.21-0.14%2C0.34v55.7c0%2C0.13%2C0.05%2C0.25%2C0.14%2C0.34l0%2C0%20c0.09%2C0.09%2C0.21%2C0.14%2C0.34%2C0.14h23.07c0.13%2C0%2C0.25-0.05%2C0.34-0.14c0.09-0.09%2C0.14-0.21%2C0.14-0.34V9.69c0-0.13-0.05-0.25-0.14-0.34%20C113.42%2C9.26%2C113.31%2C9.21%2C113.18%2C9.21L113.18%2C9.21z%20M10.49%2C15.11h59.88c0.66%2C0%2C1.25%2C0.27%2C1.69%2C0.7c0.43%2C0.43%2C0.7%2C1.03%2C0.7%2C1.69%20v40.46c0%2C0.66-0.27%2C1.25-0.7%2C1.69c-0.43%2C0.43-1.03%2C0.7-1.69%2C0.7H10.49c-0.66%2C0-1.25-0.27-1.69-0.7c-0.43-0.43-0.7-1.03-0.7-1.69%20V17.49c0-0.66%2C0.27-1.25%2C0.7-1.69h0C9.24%2C15.37%2C9.83%2C15.11%2C10.49%2C15.11L10.49%2C15.11z%20M70.37%2C17.49H10.49h0l0%2C0c0%2C0%2C0%2C0%2C0%2C0v40.46%20c0%2C0%2C0%2C0%2C0%2C0c0%2C0%2C0%2C0%2C0%2C0h59.88c0%2C0%2C0%2C0%2C0%2C0c0%2C0%2C0%2C0%2C0%2C0L70.37%2C17.49C70.37%2C17.49%2C70.37%2C17.49%2C70.37%2C17.49%20C70.37%2C17.49%2C70.37%2C17.49%2C70.37%2C17.49L70.37%2C17.49z%20M82.59%2C2.39v70.67h35.59c0.63%2C0%2C1.21-0.26%2C1.63-0.68%20c0.42-0.42%2C0.68-1%2C0.68-1.63V4.7c0-0.64-0.26-1.21-0.68-1.63c-0.42-0.42-1-0.68-1.63-0.68H82.59L82.59%2C2.39z%20M77.79%2C73.06V2.39H4.7%20c-0.64%2C0-1.21%2C0.26-1.63%2C0.68c-0.42%2C0.42-0.68%2C1-0.68%2C1.63v66.04c0%2C0.63%2C0.26%2C1.21%2C0.68%2C1.63c0.42%2C0.42%2C1%2C0.68%2C1.63%2C0.68H77.79%20L77.79%2C73.06z%20M101.62%2C53c3.04%2C0%2C5.51%2C2.47%2C5.51%2C5.51c0%2C3.04-2.47%2C5.51-5.51%2C5.51c-3.04%2C0-5.51-2.46-5.51-5.51%20C96.12%2C55.46%2C98.58%2C53%2C101.62%2C53L101.62%2C53z%20M95.26%2C33.67h12.97c0.92%2C0%2C1.67%2C0.75%2C1.67%2C1.67v9.02c0%2C0.92-0.75%2C1.67-1.67%2C1.67H95.26%20c-0.92%2C0-1.67-0.75-1.67-1.67v-9.02C93.59%2C34.43%2C94.34%2C33.67%2C95.26%2C33.67L95.26%2C33.67z%20M104.1%2C22.45h3.94%20c0.49%2C0%2C0.89%2C0.4%2C0.89%2C0.89v3c0%2C0.49-0.4%2C0.89-0.89%2C0.89h-3.94c-0.49%2C0-0.89-0.4-0.89-0.89v-3%20C103.22%2C22.85%2C103.62%2C22.45%2C104.1%2C22.45L104.1%2C22.45z%20M95.45%2C22.45h3.94c0.49%2C0%2C0.89%2C0.4%2C0.89%2C0.89v3c0%2C0.49-0.4%2C0.89-0.89%2C0.89%20h-3.94c-0.49%2C0-0.89-0.4-0.89-0.89v-3C94.56%2C22.85%2C94.96%2C22.45%2C95.45%2C22.45L95.45%2C22.45z%20M104.1%2C13.68h3.94%20c0.49%2C0%2C0.89%2C0.4%2C0.89%2C0.89v3c0%2C0.49-0.4%2C0.89-0.89%2C0.89h-3.94c-0.49%2C0-0.89-0.4-0.89-0.89v-3%20C103.22%2C14.08%2C103.62%2C13.68%2C104.1%2C13.68L104.1%2C13.68z%22%3E%3C%2Fpath%3E%20%3C%2Fg%3E%20%3C%2Fg%3E%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "uui-navbar07_item-right")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "uui-navbar07_item-heading"
                        )}
                        tag="div"
                      >
                        {"Mikroaaltouunit"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "uui-text-size-small-2")}
                        tag="div"
                      >
                        {"Sulata, lämmitä ja kypsennä käden käänteessä."}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "uui-navbar07_dropdown-link-tuulettimet"
                    )}
                    id={_utils.cx(
                      _styles,
                      "w-node-_34892110-66c6-23e6-8791-32dd2b26ed9c-aa94d1a6"
                    )}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "uui-navbar07_icon-wrapper"
                      )}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "uui-icon-1x1-xsmall-2")}
                        value="%3Csvg%20fill%3D%22%23000000%22%20viewBox%3D%220%200%2032%2032%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20id%3D%22SVGRepo_bgCarrier%22%20stroke-width%3D%220%22%3E%3C%2Fg%3E%3Cg%20id%3D%22SVGRepo_tracerCarrier%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fg%3E%3Cg%20id%3D%22SVGRepo_iconCarrier%22%3E%20%3Ctitle%3E%3C%2Ftitle%3E%20%3Cg%20data-name%3D%22Exhaust%20Hood%22%20id%3D%22Exhaust_Hood%22%3E%20%3Cpath%20d%3D%22M12%2C30a1%2C1%2C0%2C0%2C1-.71-.29l-.86-.86a2.63%2C2.63%2C0%2C0%2C1%2C0-3.7.63.63%2C0%2C0%2C0%2C.16-.74l-.48-1a1%2C1%2C0%2C0%2C1%2C1.78-.9l.48%2C1a2.6%2C2.6%2C0%2C0%2C1-.49%2C3%2C.63.63%2C0%2C0%2C0%2C0%2C.9l.86.86a1%2C1%2C0%2C0%2C1%2C0%2C1.42A1%2C1%2C0%2C0%2C1%2C12%2C30Z%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22M17%2C30a1%2C1%2C0%2C0%2C1-.71-.29l-.86-.86a2.63%2C2.63%2C0%2C0%2C1%2C0-3.7.63.63%2C0%2C0%2C0%2C.16-.74l-.48-1a1%2C1%2C0%2C0%2C1%2C1.78-.9l.48%2C1a2.6%2C2.6%2C0%2C0%2C1-.49%2C3%2C.63.63%2C0%2C0%2C0%2C0%2C.9l.86.86a1%2C1%2C0%2C0%2C1%2C0%2C1.42A1%2C1%2C0%2C0%2C1%2C17%2C30Z%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22M22%2C30a1%2C1%2C0%2C0%2C1-.71-.29l-.86-.86a2.63%2C2.63%2C0%2C0%2C1%2C0-3.7.63.63%2C0%2C0%2C0%2C.16-.74l-.48-1a1%2C1%2C0%2C0%2C1%2C1.78-.9l.48%2C1a2.6%2C2.6%2C0%2C0%2C1-.49%2C3%2C.63.63%2C0%2C0%2C0%2C0%2C.9l.86.86a1%2C1%2C0%2C0%2C1%2C0%2C1.42A1%2C1%2C0%2C0%2C1%2C22%2C30Z%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22M3%2C21H29a1%2C1%2C0%2C0%2C0%2C1-1H2A1%2C1%2C0%2C0%2C0%2C3%2C21Z%22%3E%3C%2Fpath%3E%20%3Cpath%20d%3D%22M15%2C18a1%2C1%2C0%2C0%2C1-.71-.29%2C1%2C1%2C0%2C0%2C1%2C0-1.42l.92-.92a2.41%2C2.41%2C0%2C0%2C1-1.92-.66l-1-1a1%2C1%2C0%2C0%2C1%2C1.42-1.42l.9.9a2.37%2C2.37%2C0%2C0%2C1%2C.68-1.9l1-1a1%2C1%2C0%2C0%2C1%2C1.42%2C1.42l-.92.92a2.41%2C2.41%2C0%2C0%2C1%2C1.92.66l1%2C1a1%2C1%2C0%2C0%2C1%2C0%2C1.42%2C1%2C1%2C0%2C0%2C1-1.42%2C0l-.9-.9a2.37%2C2.37%2C0%2C0%2C1-.68%2C1.9l-1%2C1A1%2C1%2C0%2C0%2C1%2C15%2C18H30V12.44a1%2C1%2C0%2C0%2C0-.61-.92L21%2C8V3a1%2C1%2C0%2C0%2C0-1-1H12a1%2C1%2C0%2C0%2C0-1%2C1V8L2.61%2C11.52a1%2C1%2C0%2C0%2C0-.61.92V18Z%22%3E%3C%2Fpath%3E%20%3C%2Fg%3E%20%3C%2Fg%3E%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "uui-navbar07_item-right")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "uui-navbar07_item-heading"
                        )}
                        tag="div"
                      >
                        {"Liesituulettimet"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "uui-text-size-small-2")}
                        tag="div"
                      >
                        {"Tyylikästä käytännöllisyyttä keittiön ilmeeseen."}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.DropdownList>
            </_Builtin.DropdownWrapper>
            <_Builtin.NavbarLink
              className={_utils.cx(_styles, "uui-navbar07_link")}
              options={{
                href: "#",
              }}
            >
              {"Huolto"}
            </_Builtin.NavbarLink>
          </_Builtin.Block>
        </_Builtin.NavbarMenu>
        <_Builtin.NavbarButton
          className={_utils.cx(_styles, "menu-nappi")}
          tag="div"
        >
          <_Builtin.Icon
            widget={{
              type: "icon",
              icon: "nav-menu",
            }}
          />
        </_Builtin.NavbarButton>
      </_Builtin.NavbarContainer>
    </_Component>
  );
}
