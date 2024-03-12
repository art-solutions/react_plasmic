// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tzfnvjdGSoPvRBYt36kabC
// Component: xGkEx2csebzc
import * as React from "react";
import {
  PlasmicImg as PlasmicImg__,
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
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: tzfnvjdGSoPvRBYt36kabC/projectcss
import sty from "./PlasmicValueProp.module.css"; // plasmic-import: xGkEx2csebzc/css

createPlasmicElementProxy;

export const PlasmicValueProp__VariantProps = new Array(
  "flatIcon",
  "vertical",
  "card",
  "noTitle",
  "darkBackground"
);

export const PlasmicValueProp__ArgProps = new Array(
  "description",
  "icon",
  "title"
);

const $$ = {};

function PlasmicValueProp__RenderFunc(props) {
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
        path: "flatIcon",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.flatIcon
      },
      {
        path: "vertical",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.vertical
      },
      {
        path: "card",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.card
      },
      {
        path: "noTitle",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noTitle
      },
      {
        path: "darkBackground",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.darkBackground
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
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootcard]: hasVariant($state, "card", "card"),
          [sty.rootflatIcon]: hasVariant($state, "flatIcon", "flatIcon"),
          [sty.rootnoTitle]: hasVariant($state, "noTitle", "noTitle"),
          [sty.rootvertical]: hasVariant($state, "vertical", "vertical"),
          [sty.rootvertical_card]:
            hasVariant($state, "card", "card") &&
            hasVariant($state, "vertical", "vertical")
        }
      )}
    >
      <div
        data-plasmic-name={"iconContainer"}
        data-plasmic-override={overrides.iconContainer}
        className={classNames(projectcss.all, sty.iconContainer, {
          [sty.iconContainercard]: hasVariant($state, "card", "card"),
          [sty.iconContainerflatIcon]: hasVariant(
            $state,
            "flatIcon",
            "flatIcon"
          ),
          [sty.iconContainervertical]: hasVariant(
            $state,
            "vertical",
            "vertical"
          ),
          [sty.iconContainervertical_card]:
            hasVariant($state, "card", "card") &&
            hasVariant($state, "vertical", "vertical")
        })}
      >
        {renderPlasmicSlot({
          defaultContents: (
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__g3CFc)}
              displayHeight={"56px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"none"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"56px"}
              src={
                "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/twitter/281/red-apple_1f34e.png"
              }
            />
          ),

          value: args.icon
        })}
      </div>
      <Stack__
        as={"div"}
        data-plasmic-name={"contentContainer"}
        data-plasmic-override={overrides.contentContainer}
        hasGap={true}
        className={classNames(projectcss.all, sty.contentContainer, {
          [sty.contentContainerflatIcon]: hasVariant(
            $state,
            "flatIcon",
            "flatIcon"
          ),
          [sty.contentContainernoTitle]: hasVariant(
            $state,
            "noTitle",
            "noTitle"
          )
        })}
      >
        {(hasVariant($state, "noTitle", "noTitle") ? false : true)
          ? renderPlasmicSlot({
              defaultContents: "Label",
              value: args.title,
              className: classNames(sty.slotTargetTitle, {
                [sty.slotTargetTitledarkBackground]: hasVariant(
                  $state,
                  "darkBackground",
                  "darkBackground"
                ),
                [sty.slotTargetTitlenoTitle]: hasVariant(
                  $state,
                  "noTitle",
                  "noTitle"
                )
              })
            })
          : null}
        {renderPlasmicSlot({
          defaultContents:
            "Porttitor feugiat a scelerisque nullam parturient vestibulum tempor a litora suscipit arcu potenti varius venenatis venenatis dapibus fames adipiscing in in taciti.",
          value: args.description,
          className: classNames(sty.slotTargetDescription, {
            [sty.slotTargetDescriptioncard]: hasVariant($state, "card", "card"),
            [sty.slotTargetDescriptiondarkBackground]: hasVariant(
              $state,
              "darkBackground",
              "darkBackground"
            ),
            [sty.slotTargetDescriptionnoTitle]: hasVariant(
              $state,
              "noTitle",
              "noTitle"
            )
          })
        })}
      </Stack__>
    </Stack__>
  );
}

const PlasmicDescendants = {
  root: ["root", "iconContainer", "contentContainer"],
  iconContainer: ["iconContainer"],
  contentContainer: ["contentContainer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicValueProp__ArgProps,
          internalVariantPropNames: PlasmicValueProp__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicValueProp__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicValueProp";
  } else {
    func.displayName = `PlasmicValueProp.${nodeName}`;
  }
  return func;
}

export const PlasmicValueProp = Object.assign(
  // Top-level PlasmicValueProp renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    iconContainer: makeNodeComponent("iconContainer"),
    contentContainer: makeNodeComponent("contentContainer"),
    // Metadata about props expected for PlasmicValueProp
    internalVariantProps: PlasmicValueProp__VariantProps,
    internalArgProps: PlasmicValueProp__ArgProps
  }
);

export default PlasmicValueProp;
/* prettier-ignore-end */
