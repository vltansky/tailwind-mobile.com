import Link from 'next/link';

import { Device } from '../components/Device';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { GithubStats } from '../components/GithubStats';
import { Logo } from '../components/Logo';
import copyToClipboard from '../shared/copy-to-clipboard';

export default function Home() {
  const copyInstallCommand = (e) => {
    e.preventDefault();
    copyToClipboard('npm i tailwind-mobile');
  };

  const CopyIcon = ({ className }) => (
    <svg
      className={className || ''}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        d="M4,12 C4,13.886 4,14.828 4.586,15.414 C5.172,16 6.114,16 8,16 L12,16 C13.886,16 14.828,16 15.414,15.414 C16,14.828 16,13.886 16,12 L16,8 C16,6.114 16,5.172 15.414,4.586 C14.828,4 13.886,4 12,4 M4,12 L8,12 C9.886,12 10.828,12 11.414,11.414 C12,10.828 12,9.886 12,8 L12,4 M4,12 C2.114,12 1.172,12 0.586,11.414 C0,10.828 0,9.886 0,8 L0,4 C0,2.114 0,1.172 0.586,0.586 C1.172,0 2.114,0 4,0 L8,0 C9.886,0 10.828,0 11.414,0.586 C12,1.172 12,2.114 12,4"
        transform="translate(1 1)"
      />
    </svg>
  );

  const Section = (props) => {
    const { className, children, ...attrs } = props;
    return (
      <Container className={`my-24 md:my-32 ${className || ''}`} {...attrs}>
        {children}
      </Container>
    );
  };

  const SectionTitle = (props) => {
    const { className, children, ...attrs } = props;
    return (
      <h2
        className={`text-primary font-bold text-4xl sm:text-5xl text-center mb-8 ${
          className || ''
        }`}
        {...attrs}
      >
        {children}
      </h2>
    );
  };

  const SectionText = (props) => {
    const { className, children, ...attrs } = props;
    return (
      <p
        className={`font-medium text-lg sm:text-xl md:text-2xl text-center md:leading-relaxed mb-8 mx-auto max-w-screen-lg ${
          className || ''
        }`}
        {...attrs}
      >
        {children}
      </p>
    );
  };

  const SectionLogos = (props) => {
    const { className, logos = [], children, ...attrs } = props;
    return (
      <div
        className={`flex flex-wrap items-center content-center justify-center ${
          className || ''
        }`}
        {...attrs}
      >
        {logos.map((logo) => (
          <img
            className="w-24 h-24 md:w-32 md:h-32 mx-6 mt-6 md:mx-12 md:mt-8"
            key={logo.src}
            src={logo.src}
            alt={logo.alt}
          />
        ))}
        {children}
      </div>
    );
  };

  return (
    <>
      {/* Content */}
      <Container className="flex-col flex lg:flex-row items-center text-center lg:text-left mt-16 mb-16">
        <div className="max-w-2xl">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo className="w-32 h-32 md:w-48 md:h-48 home-logo-animated mx-auto lg:ml-auto lg:mr-0" />
          </div>
          {/* Content */}
          <div className="flex-shrink w-full lg:text-right">
            <div className="text-primary text-4xl sm:text-6xl font-bold leading-none mt-12">
              Tailwind Mobile
            </div>
            <div className="text-black text-3xl sm:text-4xl font-bold sm:leading-snug my-8">
              Pixel perfect mobile UI components built with Tailwind CSS
            </div>
            <div className="text-xl lg:text-2xl font-semibold my-8 lg:leading-normal">
              With iOS and Material Design components for
              <br /> React, Vue & Svelte
            </div>
            <div className="flex flex-col sm:flex-row items-center space-x-4 my-8 justify-center lg:justify-end">
              <Button href="#get-started" className="lg:px-6 xl:px-8">
                Get started
              </Button>
              <div className="bg-primary bg-opacity-10 font-mono text-black text-lg h-12 border border-primary rounded-xl items-center px-4 hidden sm:flex">
                <span className="select-none opacity-50 mr-4">$</span>
                <span>npm i tailwind-mobile</span>
                <span
                  className="ml-4 select-none cursor-pointer opacity-50 duration-200 hover:opacity-100 hover:text-primary transform-gpu"
                  onClick={copyInstallCommand}
                >
                  <CopyIcon />
                </span>
              </div>
            </div>
            <div className="my-4">
              MIT Licensed, v{process.env.tailwindMobileVersion} released on{' '}
              {process.env.tailwindMobileReleaseDate}
            </div>
            <div className="mt-4">
              <GithubStats />
            </div>
          </div>
        </div>
        {/* Phone */}
        <Device
          url="/kitchen-sink/react/dist/index.html"
          className="hidden ml-16 lg:block "
        />
      </Container>

      {/* Sections */}
      <Section className="!mt-16 lg:hidden">
        <SectionTitle>See it in action</SectionTitle>
        <div className="text-center">
          <Button
            className="md:hidden"
            inline
            href="/kitchen-sink/react/dist/index.html"
            target="_blank"
          >
            <span>Open in new tab</span>
            <svg
              className="w-6 h-6 ml-2 relative -top-px"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </Button>
        </div>
        <Device
          url="/kitchen-sink/react/dist/index.html"
          className="hidden md:block my-16 mx-auto"
        />
      </Section>

      <Section>
        <SectionTitle>iOS & Material Design themes</SectionTitle>
        <SectionText>
          All Tailwind Mobile components come with pixel perfect native-like iOS
          and Material Design themes created using official design guidelines.
          Everything you need for your iOS and Android apps!
        </SectionText>
        <SectionLogos
          logos={[
            {
              src: '/images/home/home-logos/google.svg',
              alt: 'google',
            },
            {
              src: '/images/home/home-logos/apple.svg',
              alt: 'apple',
            },
          ]}
        />
      </Section>

      <Section>
        <SectionTitle>Awesome set of UI components</SectionTitle>
        <SectionText>
          Tailwind Mobile comes with an awesome set of ready to use UI elements:
        </SectionText>
        <div className="flex flex-wrap items-center content-center justify-center">
          <img
            className="m-2"
            src="/images/home/home-ui/button.svg"
            alt="button"
          />
          <img
            className="m-2"
            src="/images/home/home-ui/input.svg"
            alt="input"
          />
          <img
            className="m-2"
            src="/images/home/home-ui/preloader.svg"
            alt="preloader"
          />
          <img
            className="m-2"
            src="/images/home/home-ui/range.svg"
            alt="range"
          />
          <img
            className="m-2"
            src="/images/home/home-ui/toggle-ios.svg"
            alt="toggle-ios"
          />
          <img
            className="m-2"
            src="/images/home/home-ui/toggle-md.svg"
            alt="toggle-md"
          />
        </div>
      </Section>

      <Section>
        <SectionTitle>Build with the tech you love!</SectionTitle>
        <SectionText>
          Tailwind Mobile components are currently available for React, and
          coming soon for Vue and Svelte.
        </SectionText>
        <SectionLogos
          logos={[
            {
              src: '/images/home/home-logos/react.svg',
              alt: 'react',
            },
            {
              src: '/images/home/home-logos/vue.svg',
              alt: 'vue',
            },
            {
              src: '/images/home/home-logos/svelte.svg',
              alt: 'svelte',
            },
            // {
            //   src: '/images/home/home-logos/angular.svg',
            //   alt: 'angular',
            // },
          ]}
        />
      </Section>

      <Section>
        <SectionTitle>Perfect fit for Ionic & Framework7</SectionTitle>
        <SectionText>
          Tailwind Mobile mostly designed to be used with "parent" frameworks
          like{' '}
          <a
            className="text-primary hover:underline"
            href="https://ionicframework.com"
            target="_blank"
          >
            Ionic
          </a>{' '}
          or{' '}
          <a
            className="text-primary hover:underline"
            href="https://framework7.io"
            target="_blank"
          >
            Framework7
          </a>
          . In this case you use "parent" framework as your app shell (routing,
          navigation, state management, native APIs, etc.) and Tailwind Mobile
          components for inner pages/views UIs.
        </SectionText>
        <SectionLogos
          className="md:hidden"
          logos={[
            {
              src: '/images/home/home-logos/framework7.svg',
              alt: 'framework7',
            },
            {
              src: '/images/home/home-logos/ionic.svg',
              alt: 'ionic',
            },
          ]}
        />
        <div className="hidden md:flex items-stretch justify-between mx-auto max-w-screen-lg mt-16">
          <div className="border-8 border-r-0 border-[#3880FF] w-full flex-shrink mr-8 ml-20 lg:ml-24 rounded-l-2xl">
            <div className="border-8 border-r-0 border-[#EE350F] h-full relative rounded-l-lg">
              <div className="flex absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 space-x-4 -ml-2 w-52">
                <img
                  className="w-24 h-24"
                  src="/images/home/home-logos/ionic.svg"
                  alt="ionic"
                />
                <img
                  className="w-24 h-24"
                  src="/images/home/home-logos/framework7.svg"
                  alt="framework7"
                />
              </div>
              <div className="top-[4.7%] bottom-[4.7%] w-1/4 lg:w-1/2 left-3/4 lg:left-1/2 absolute border-8 border-r-0 border-primary rounded-l-lg">
                <Logo className="w-24 h-24 absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2" />
              </div>
            </div>
          </div>
          <img
            className="w-[375px] home-app-shadow flex-shrink-0"
            src="/images/home/home-appstore-app.png"
            alt="mobile app"
          />
        </div>
      </Section>

      <Section>
        <SectionTitle>Go native</SectionTitle>
        <SectionText>
          Using it with frameworks like{' '}
          <a
            className="text-primary hover:underline"
            href="https://capacitorjs.com"
            target="_blank"
          >
            Capacitor
          </a>{' '}
          and{' '}
          <a
            className="text-primary hover:underline"
            href="https://cordova.apache.org"
            target="_blank"
          >
            Cordova
          </a>{' '}
          you can easily create real native apps with native look and feel.
        </SectionText>

        <SectionLogos
          logos={[
            {
              src: '/images/home/home-logos/capacitorjs.svg',
              alt: 'capacitorjs',
            },
            {
              src: '/images/home/home-logos/cordova.svg',
              alt: 'cordova',
            },
          ]}
        />
      </Section>

      <Section id="get-started">
        <SectionTitle>Get Started</SectionTitle>
        <div className="bg-primary border-primary border bg-opacity-10 font-mono text-black sm:text-lg py-6 rounded-xl items-center px-4 sm:px-8 justify-center flex max-w-2xl mx-auto">
          <span className="hidden sm:block select-none opacity-50 mr-4 pointer-events-none">
            $
          </span>
          <span>npm i tailwind-mobile</span>
          <span
            className="ml-2 sm:ml-4 select-none cursor-pointer opacity-50 duration-200 hover:opacity-100 hover:text-primary transform-gpu"
            onClick={copyInstallCommand}
          >
            <CopyIcon />
          </span>
        </div>
        <div className="items-stretch justify-center space-y-4 sm:space-y-0 sm:flex sm:space-x-4 md:space-x-8 mt-8 max-w-3xl mx-auto text-center">
          <Link href="/react">
            <a className="flex sm:flex-col items-center text-black border-black border-opacity-10 border rounded-xl px-4 py-6 relative w-full hover:border-opacity-0 hover:shadow-lg sm:hover:shadow-2xl duration-200">
              <img
                className="w-12 sm:w-auto sm:h-20 sm:mb-4 mr-4 sm:mr-0"
                src="/images/home/home-logos/react.svg"
                alt="react"
              />
              <span className="sm:mb-2 font-semibold">
                Tailwind Mobile React
              </span>
              <span className="hidden sm:block text-sm opacity-75">
                Documentation
              </span>
            </a>
          </Link>
          <Link href="/svelte">
            <a className="flex sm:flex-col items-center text-black border border-black border-opacity-10 rounded-xl px-4 py-6 relative w-full pointer-events-none select-none opacity-50">
              <img
                className="w-12 sm:w-auto sm:h-20 sm:mb-4 mr-4 sm:mr-0 grayscale"
                src="/images/home/home-logos/svelte.svg"
                alt="svelte"
              />
              <span className="sm:mb-2 font-semibold">
                Tailwind Mobile Svelte
              </span>
              <span className="hidden sm:block text-sm opacity-75">
                Documentation
              </span>
              <span className="absolute right-2 top-px text-xs font-medium opacity-50">
                Coming soon
              </span>
            </a>
          </Link>
          <Link href="/vue">
            <a className="flex sm:flex-col items-center text-black border border-black border-opacity-10 rounded-xl px-4 py-6 relative w-full pointer-events-none select-none opacity-50">
              <img
                className="w-12 sm:w-auto sm:h-20 sm:mb-4 mr-4 sm:mr-0 grayscale"
                src="/images/home/home-logos/vue.svg"
                alt="vue"
              />
              <span className="sm:mb-2 font-semibold">Tailwind Mobile Vue</span>
              <span className="hidden sm:block text-sm opacity-75">
                Documentation
              </span>
              <span className="absolute right-2 top-px text-xs font-medium opacity-50">
                Coming soon
              </span>
            </a>
          </Link>
        </div>
      </Section>

      <Section id="get-started">
        <SectionTitle>More Of Our Projects</SectionTitle>
        <div className="sm:flex items-stretch max-w-3xl mx-auto space-y-4 sm:space-y-0 sm:space-x-8 sm:text-center gr">
          {[
            {
              url: 'https://framework7.io',
              title: 'Framework7',
              description:
                'Full featured framework for building iOS, Android & desktop apps',
              logo: 'framework7.svg',
            },
            {
              url: 'https://swiperjs.com',
              title: 'Swiper',
              description: 'Most modern mobile touch slider',
              logo: 'swiper.svg',
            },
            {
              url: 'https://atroposjs.com',
              title: 'Atropos',
              description: 'Stunning touch-friendly 3D parallax hover effects',
              logo: 'atropos.svg',
            },
          ].map((item) => (
            <a
              className="flex sm:flex-col items-center w-full text-black border-black border-opacity-10 border rounded-xl px-4 py-6 duration-200 hover:shadow-lg sm:hover:shadow-2xl hover:border-opacity-0"
              href={item.url}
              target="_blank"
              key={item.title}
            >
              <img
                className="w-12 sm:w-32 sm:h-32 mr-4 sm:mr-0"
                src={`/images/our-projects/${item.logo}`}
                alt={item.title}
              />
              <div>
                <div className="font-semibold sm:mt-4 sm:mb-2 text-black">
                  {item.title}
                </div>
                <div className="text-sm opacity-75">{item.description}</div>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <Footer />
    </>
  );
}
