// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: e2GgHvNkZGeWD3TYfD2fCA
// Component: ZnnaFHEfrleH

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

import Header from "../../Header"; // plasmic-import: PLLQt4_FpBqa/component
import TextInput from "../../TextInput"; // plasmic-import: X6N1m0i3iM_P/component
import Button from "../../Button"; // plasmic-import: EVsuyY9hL0ZI/component

import { useScreenVariants as useScreenVariantspL2E2Q3I59M } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: pL2E2q-3I59m/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../t_9_imported_dep_4/plasmic.module.css"; // plasmic-import: rJmrvZ8rTbZpYCx9aXq6iH/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: e2GgHvNkZGeWD3TYfD2fCA/projectcss
import sty from "./PlasmicAbout.module.css"; // plasmic-import: ZnnaFHEfrleH/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: z39WBW-ZOeZp/icon
import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: my-Br3gGNOMM/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: HqJ-VM8Sxwat/icon
import AngleRightsvgIcon from "./icons/PlasmicIcon__AngleRightsvg"; // plasmic-import: 18unQJZ4NKQ_/icon
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: Rj3-GR60VACs/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: f_dhCgafprL5/icon
import Icon28Icon from "./icons/PlasmicIcon__Icon28"; // plasmic-import: TxUEHziDkPd3/icon

createPlasmicElementProxy;

export type PlasmicAbout__VariantMembers = {};
export type PlasmicAbout__VariantsArgs = {};
type VariantPropType = keyof PlasmicAbout__VariantsArgs;
export const PlasmicAbout__VariantProps = new Array<VariantPropType>();

export type PlasmicAbout__ArgsType = {};
type ArgPropType = keyof PlasmicAbout__ArgsType;
export const PlasmicAbout__ArgProps = new Array<ArgPropType>();

export type PlasmicAbout__OverridesType = {
  root?: Flex__<"div">;
  header?: Flex__<typeof Header>;
  _2?: Flex__<"a"> & Partial<LinkProps>;
  textInput?: Flex__<typeof TextInput>;
};

export interface DefaultAboutProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAbout__RenderFunc(props: {
  variants: PlasmicAbout__VariantsArgs;
  args: PlasmicAbout__ArgsType;
  overrides: PlasmicAbout__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "textInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantspL2E2Q3I59M()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__txMUi)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__ls7Bk)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__ucNd8)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__tkZdb
                  )}
                >
                  {"Get 55% off Lorem Ipsum enough lorem discount"}
                </div>
              </Stack__>
              {false ? (
                <div className={classNames(projectcss.all, sty.freeBox__p7FEr)}>
                  <button
                    className={classNames(
                      projectcss.all,
                      projectcss.button,
                      projectcss.__wab_text,
                      sty.button__srqa6
                    )}
                  >
                    {"Sign up"}
                  </button>
                  <Stack__
                    as={PlasmicLink__}
                    hasGap={true}
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__eub0F
                    )}
                    component={Link}
                    platform={"nextjs"}
                  >
                    {false ? (
                      <IconIcon
                        className={classNames(projectcss.all, sty.svg___7HkdD)}
                        role={"img"}
                      />
                    ) : null}
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__gkLiD
                      )}
                    >
                      {"Log in"}
                    </div>
                    {false ? (
                      <IconIcon
                        className={classNames(projectcss.all, sty.svg__nVoBi)}
                        role={"img"}
                      />
                    ) : null}
                  </Stack__>
                </div>
              ) : null}
            </Stack__>
          </Stack__>
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <div className={classNames(projectcss.all, sty.freeBox__v7K5R)}>
            <div className={classNames(projectcss.all, sty.freeBox__xfBae)}>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__yji3J)}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__xHcbI)}
                >
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__tRJck
                    )}
                  >
                    {"Making a difference"}
                  </h2>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ovDgQ
                    )}
                  >
                    {
                      "High standards and ethically sourced, we're changing the world \none bean at a time."
                    }
                  </div>
                </Stack__>
              </Stack__>
              <div className={classNames(projectcss.all, sty.columns__hG7O8)}>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.column__dwaHp)}
                >
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__sY1Qe
                    )}
                  >
                    {"In the heart of the bay"}
                  </h2>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__t9NHs
                    )}
                  >
                    {
                      "In the beautiful San Francisco bay, our caf\u00e9 is visited by locals and tourists from all over the world. We started off as a small roaster with a few seats. Over the years, we expanded into the outlet with over 100 seats and beautiful outside lounge area.\n"
                    }
                  </div>
                </Stack__>
                <div className={classNames(projectcss.all, sty.column__xtsDy)}>
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__uqyla)}
                    displayHeight={"100%"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"100%"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/copy_of_t_9/images/priscillaDuPreezELnxUdFs6EcUnsplashjpg.jpg",
                      fullWidth: 1920,
                      fullHeight: 1280,
                      aspectRatio: undefined
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox___0Ug0)}>
            <div className={classNames(projectcss.all, sty.freeBox__nqnmq)}>
              <div className={classNames(projectcss.all, sty.columns__vvCA)}>
                <div className={classNames(projectcss.all, sty.column__yjnCo)}>
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img___24IHq)}
                    displayHeight={"100%"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"100%"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/copy_of_t_9/images/mikeKenneallyTNaLoIZhqVmUnsplash1Jpg.jpg",
                      fullWidth: 1920,
                      fullHeight: 1260,
                      aspectRatio: undefined
                    }}
                  />
                </div>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.column___9FHu)}
                >
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__nHy4Q
                    )}
                  >
                    {"Roasting and wholesale"}
                  </h2>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__iAmPp
                    )}
                  >
                    {
                      "We're obsessed about producing great coffee and sharing it with the world. We roast weekly and hold many tasting events. Come learn about the process and try out our different blends."
                    }
                  </div>
                </Stack__>
              </div>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__dEdgK)}>
            <div className={classNames(projectcss.all, sty.freeBox__rPy50)}>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___2BpvY)}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___09Hzz)}
                >
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__duns1
                    )}
                  >
                    {"The journey"}
                  </h2>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox___5IivU)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___9Ji7M
                      )}
                    >
                      {
                        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,"
                      }
                    </div>
                  </Stack__>
                </Stack__>
              </Stack__>
            </div>
          </div>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__zLaPv)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__o7Tnz)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__uhcVh)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__oplIw)}>
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__bavAg
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "Lorem founders"
                      : "Lorem founders"}
                  </h2>
                </div>
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__nm7Cj)}
              >
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__nScwQ)}
                  displayHeight={"100%"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"none"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"100%"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/copy_of_t_9/images/istockphoto1264694710170667Ajpg.jpg",
                    fullWidth: 553,
                    fullHeight: 311,
                    aspectRatio: undefined
                  }}
                />
              </Stack__>
            </Stack__>
          </Stack__>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__opGfi)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__sxjon)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__fAocQ)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__wWsSt)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__jr4O
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "Contact us\n"
                      : "Contact us\n"}
                  </div>
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link__rwI4
                    )}
                    component={Link}
                    platform={"nextjs"}
                  >
                    {hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "(555) 555-5555"
                      : "(555) 555-5555"}
                  </PlasmicLink__>
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link__tsVpg
                    )}
                    component={Link}
                    platform={"nextjs"}
                  >
                    {"support@example.com"}
                  </PlasmicLink__>
                </div>
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__mbTvm)}
              >
                <PlasmicLink__
                  data-plasmic-name={"_2"}
                  data-plasmic-override={overrides._2}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty._2
                  )}
                  component={Link}
                  href={
                    hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "#"
                      : `/shop`
                  }
                  platform={"nextjs"}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "Shop"
                    : "Shop"}
                </PlasmicLink__>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__pPhok
                  )}
                  component={Link}
                  href={`/academy`}
                  platform={"nextjs"}
                >
                  {"The Academy"}
                </PlasmicLink__>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link___8JczQ
                  )}
                  component={Link}
                  href={`/about`}
                  platform={"nextjs"}
                >
                  {"About"}
                </PlasmicLink__>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__xYn8T
                  )}
                  component={Link}
                  href={`/help`}
                  platform={"nextjs"}
                >
                  {"Help"}
                </PlasmicLink__>
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__iuvDu)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ipylF
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "Email newsletter"
                    : "Email newsletter"}
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__nrypU)}>
                  <TextInput
                    data-plasmic-name={"textInput"}
                    data-plasmic-override={overrides.textInput}
                    className={classNames("__wab_instance", sty.textInput)}
                    endIcon={
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__yOrsg
                        )}
                        submitsForm={true}
                      >
                        <AngleRightsvgIcon
                          className={classNames(projectcss.all, sty.svg__kcdJ0)}
                          role={"img"}
                        />
                      </Button>
                    }
                    onChange={(...eventArgs) => {
                      generateStateOnChangeProp($state, ["textInput", "value"])(
                        (e => e.target?.value).apply(null, eventArgs)
                      );
                    }}
                    placeholder={
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? "E-mail"
                        : "E-mail"
                    }
                    showEndIcon={
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? true
                        : true
                    }
                    value={
                      generateStateValueProp($state, ["textInput", "value"]) ??
                      ""
                    }
                  />
                </div>
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__ctMxx)}
              >
                <Stack__
                  as={PlasmicLink__}
                  hasGap={true}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__st4LU
                  )}
                  component={Link}
                  platform={"nextjs"}
                >
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg___8PsrD)}
                      role={"img"}
                    />
                  ) : null}
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__ghoJ)}
                  >
                    <PlasmicIcon__
                      PlasmicIconType={
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? Icon3Icon
                          : Icon3Icon
                      }
                      className={classNames(projectcss.all, sty.svg__lbKne)}
                      role={"img"}
                    />

                    <Icon2Icon
                      className={classNames(projectcss.all, sty.svg__lHwb)}
                      role={"img"}
                    />

                    <PlasmicIcon__
                      PlasmicIconType={
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? Icon28Icon
                          : Icon28Icon
                      }
                      className={classNames(projectcss.all, sty.svg__pri0G)}
                      role={"img"}
                    />
                  </Stack__>
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__zvShQ)}
                      role={"img"}
                    />
                  ) : null}
                </Stack__>
              </Stack__>
              {false ? (
                <div className={classNames(projectcss.all, sty.freeBox__kPxL5)}>
                  <button
                    className={classNames(
                      projectcss.all,
                      projectcss.button,
                      projectcss.__wab_text,
                      sty.button__rerCw
                    )}
                  >
                    {"Sign up"}
                  </button>
                  <Stack__
                    as={PlasmicLink__}
                    hasGap={true}
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__vSloo
                    )}
                    component={Link}
                    platform={"nextjs"}
                  >
                    {false ? (
                      <IconIcon
                        className={classNames(projectcss.all, sty.svg__zWrwP)}
                        role={"img"}
                      />
                    ) : null}
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__ty8Sx
                      )}
                    >
                      {"Log in"}
                    </div>
                    {false ? (
                      <IconIcon
                        className={classNames(projectcss.all, sty.svg__bU7F)}
                        role={"img"}
                      />
                    ) : null}
                  </Stack__>
                </div>
              ) : null}
            </Stack__>
            <div className={classNames(projectcss.all, sty.freeBox__nq0XA)}>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__nlxnN)}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__oBqS3)}
                >
                  <div
                    className={classNames(projectcss.all, sty.freeBox__tvPuO)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__wkr3V
                      )}
                    >
                      {"\u00a9 Company. All rights reserved."}
                    </div>
                  </div>
                </Stack__>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__cK7Ql)}
                >
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__jacIp)}
                  >
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__qq2Dr)}
                    >
                      <Stack__
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__ga51O
                        )}
                      >
                        <Stack__
                          as={PlasmicLink__}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            projectcss.a,
                            sty.link__kc3K9
                          )}
                          component={Link}
                          href={
                            hasVariant(globalVariants, "screen", "mobileOnly")
                              ? `/shipping`
                              : `/shipping`
                          }
                          platform={"nextjs"}
                        >
                          {false ? (
                            <IconIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__ghZhp
                              )}
                              role={"img"}
                            />
                          ) : null}
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__uxTjm
                            )}
                          >
                            {hasVariant(globalVariants, "screen", "mobileOnly")
                              ? "shop"
                              : "Shipping & Returns"}
                          </div>
                          {false ? (
                            <IconIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__xje5R
                              )}
                              role={"img"}
                            />
                          ) : null}
                        </Stack__>
                        <Stack__
                          as={PlasmicLink__}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            projectcss.a,
                            sty.link__pAaTw
                          )}
                          component={Link}
                          href={
                            hasVariant(globalVariants, "screen", "mobileOnly")
                              ? `/privacypolicy`
                              : `/privacypolicy`
                          }
                          platform={"nextjs"}
                        >
                          {false ? (
                            <IconIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__eonoj
                              )}
                              role={"img"}
                            />
                          ) : null}
                          {false ? (
                            <IconIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__sXc0W
                              )}
                              role={"img"}
                            />
                          ) : null}
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__imxOd
                            )}
                          >
                            {hasVariant(globalVariants, "screen", "mobileOnly")
                              ? "Privacy policy"
                              : "Privacy policy"}
                          </div>
                        </Stack__>
                        <Stack__
                          as={PlasmicLink__}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            projectcss.a,
                            sty.link__qTZtb
                          )}
                          component={Link}
                          href={
                            hasVariant(globalVariants, "screen", "mobileOnly")
                              ? `/terms`
                              : `/terms`
                          }
                          platform={"nextjs"}
                        >
                          {false ? (
                            <IconIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__uceM
                              )}
                              role={"img"}
                            />
                          ) : null}
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__seIJy
                            )}
                          >
                            {hasVariant(globalVariants, "screen", "mobileOnly")
                              ? "Terms & Conditions"
                              : "Terms & Conditions"}
                          </div>
                          {false ? (
                            <IconIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg___7XZe
                              )}
                              role={"img"}
                            />
                          ) : null}
                        </Stack__>
                      </Stack__>
                    </Stack__>
                  </Stack__>
                </Stack__>
              </Stack__>
            </div>
          </Stack__>
        </Stack__>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "_2", "textInput"],
  header: ["header"],
  _2: ["_2"],
  textInput: ["textInput"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  _2: "a";
  textInput: typeof TextInput;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAbout__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAbout__VariantsArgs;
    args?: PlasmicAbout__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAbout__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAbout__ArgsType,
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
          internalArgPropNames: PlasmicAbout__ArgProps,
          internalVariantPropNames: PlasmicAbout__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAbout__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAbout";
  } else {
    func.displayName = `PlasmicAbout.${nodeName}`;
  }
  return func;
}

export const PlasmicAbout = Object.assign(
  // Top-level PlasmicAbout renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    _2: makeNodeComponent("_2"),
    textInput: makeNodeComponent("textInput"),

    // Metadata about props expected for PlasmicAbout
    internalVariantProps: PlasmicAbout__VariantProps,
    internalArgProps: PlasmicAbout__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicAbout;
/* prettier-ignore-end */
