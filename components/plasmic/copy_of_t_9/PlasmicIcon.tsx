// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: e2GgHvNkZGeWD3TYfD2fCA
// Component: EnYmsiK_5pqc

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../t_9_imported_dep_4/plasmic.module.css"; // plasmic-import: rJmrvZ8rTbZpYCx9aXq6iH/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: e2GgHvNkZGeWD3TYfD2fCA/projectcss
import sty from "./PlasmicIcon.module.css"; // plasmic-import: EnYmsiK_5pqc/css

import Icon14Icon from "./icons/PlasmicIcon__Icon14"; // plasmic-import: IRZcNpq7HLJd/icon

createPlasmicElementProxy;

export type PlasmicIcon__VariantMembers = {};
export type PlasmicIcon__VariantsArgs = {};
type VariantPropType = keyof PlasmicIcon__VariantsArgs;
export const PlasmicIcon__VariantProps = new Array<VariantPropType>();

export type PlasmicIcon__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
};
type ArgPropType = keyof PlasmicIcon__ArgsType;
export const PlasmicIcon__ArgProps = new Array<ArgPropType>("children", "slot");

export type PlasmicIcon__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultIconProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicIcon__RenderFunc(props: {
  variants: PlasmicIcon__VariantsArgs;
  args: PlasmicIcon__ArgsType;
  overrides: PlasmicIcon__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

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
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__h19Jx)}>
        {renderPlasmicSlot({
          defaultContents: (
            <Icon14Icon
              className={classNames(projectcss.all, sty.svg__mlhkz)}
              role={"img"}
            />
          ),

          value: args.children
        })}
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__fleZ4)}>
        {renderPlasmicSlot({
          defaultContents: (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__goilp
              )}
            >
              {"Lorem Ipsum"}
            </div>
          ),
          value: args.slot
        })}
      </div>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicIcon__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicIcon__VariantsArgs;
    args?: PlasmicIcon__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicIcon__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicIcon__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicIcon__ArgProps,
          internalVariantPropNames: PlasmicIcon__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicIcon__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicIcon";
  } else {
    func.displayName = `PlasmicIcon.${nodeName}`;
  }
  return func;
}

export const PlasmicIcon = Object.assign(
  // Top-level PlasmicIcon renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicIcon
    internalVariantProps: PlasmicIcon__VariantProps,
    internalArgProps: PlasmicIcon__ArgProps
  }
);

export default PlasmicIcon;
/* prettier-ignore-end */