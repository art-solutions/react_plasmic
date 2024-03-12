// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tzfnvjdGSoPvRBYt36kabC
// Component: NEz8g8cclxXy
import * as React from "react";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  renderPlasmicSlot,
  useCurrentUser,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import Divider from "../../Divider"; // plasmic-import: WWiLqvE83Bf_/component
import ValueProp from "../../ValueProp"; // plasmic-import: xGkEx2csebzc/component
import Button from "../../Button"; // plasmic-import: UcW2nQ3YUMuW/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: tzfnvjdGSoPvRBYt36kabC/projectcss
import sty from "./PlasmicPriceCard.module.css"; // plasmic-import: NEz8g8cclxXy/css
import CheckIcon from "./icons/PlasmicIcon__Check"; // plasmic-import: Cq8u1ZqEfJLq/icon

createPlasmicElementProxy;

export const PlasmicPriceCard__VariantProps = new Array("primary", "borders");

export const PlasmicPriceCard__ArgProps = new Array(
  "label",
  "dollars",
  "description",
  "action"
);

const $$ = {};

function PlasmicPriceCard__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = useCurrentUser?.() || {};
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "primary",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.primary
      },
      {
        path: "borders",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.borders
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootborders_flatLeft]: hasVariant($state, "borders", "flatLeft"),
          [sty.rootborders_flatRight]: hasVariant(
            $state,
            "borders",
            "flatRight"
          ),
          [sty.rootprimary]: hasVariant($state, "primary", "primary")
        }
      )}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___18N9K)}
      >
        <div className={classNames(projectcss.all, sty.freeBox___7LIom)}>
          <div className={classNames(projectcss.all, sty.freeBox__i3FEj)}>
            {renderPlasmicSlot({
              defaultContents: "Starter",
              value: args.label,
              className: classNames(sty.slotTargetLabel)
            })}
          </div>
        </div>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__aiuPv)}
        >
          <div className={classNames(projectcss.all, sty.freeBox__aUpOk)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ejlAy
              )}
            >
              {"$"}
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__mYuP7)}>
              {renderPlasmicSlot({
                defaultContents: "8",
                value: args.dollars,
                className: classNames(sty.slotTargetDollars)
              })}
            </div>
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__vas13
            )}
          >
            {"/month"}
          </div>
        </Stack__>
      </Stack__>
      <Divider
        data-plasmic-name={"divider"}
        data-plasmic-override={overrides.divider}
        className={classNames("__wab_instance", sty.divider)}
      />

      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__uamPq)}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___7Mct5)}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <ValueProp
                  className={classNames("__wab_instance", sty.valueProp__wTe51)}
                  description={
                    "Vestibulum mollis odio dictum ultrices facilisis molestie vestibulum"
                  }
                  icon={
                    <CheckIcon
                      className={classNames(projectcss.all, sty.svg___9Xbod)}
                      role={"img"}
                    />
                  }
                />

                <ValueProp
                  className={classNames("__wab_instance", sty.valueProp__yHJqG)}
                  description={"Mus consequat a justo"}
                  icon={
                    <CheckIcon
                      className={classNames(projectcss.all, sty.svg__qTr9)}
                      role={"img"}
                    />
                  }
                />
              </React.Fragment>
            ),

            value: args.description
          })}
        </Stack__>
        <Button
          data-plasmic-name={"button"}
          data-plasmic-override={overrides.button}
          color={hasVariant($state, "primary", "primary") ? "green" : "white"}
          extraSmallShadow={true}
          submitsForm={true}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__jJ4G0
                )}
              >
                {"Buy starter"}
              </div>
            ),

            value: args.action
          })}
        </Button>
      </Stack__>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "divider", "button"],
  divider: ["divider"],
  button: ["button"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicPriceCard__ArgProps,
          internalVariantPropNames: PlasmicPriceCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPriceCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPriceCard";
  } else {
    func.displayName = `PlasmicPriceCard.${nodeName}`;
  }
  return func;
}

export const PlasmicPriceCard = Object.assign(
  // Top-level PlasmicPriceCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    divider: makeNodeComponent("divider"),
    button: makeNodeComponent("button"),
    // Metadata about props expected for PlasmicPriceCard
    internalVariantProps: PlasmicPriceCard__VariantProps,
    internalArgProps: PlasmicPriceCard__ArgProps
  }
);

export default PlasmicPriceCard;
/* prettier-ignore-end */
