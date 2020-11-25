import Image from "next/image"
import Head from "next/head"
import { useLayoutEffect, useState } from "react"

export default function HomePage() {
  const [offset, setOffset] = useState(0)

  useLayoutEffect(() => {
    const doc = document.documentElement
    const scrollListener = () => {
      setOffset((window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0))
    }

    window.addEventListener("scroll", scrollListener)

    return () => {
      window.removeEventListener("scroll", scrollListener)
    }
  })

  return (
    <>
      <Head>
        <title>Oakland 2018</title>
      </Head>
      <h1 className="title">
        <picture className="title-image" title="Oakland">
          <source
            sizes="100vw"
            media="(max-width: 570px)"
            srcSet="/images/oak_skinny.svg"
          />
          <source sizes="100vw" srcSet="/images/oak_wide.svg" />
          <img src="/images/oak_wide.svg" />
        </picture>
        <span>California</span> <span>2018</span>
      </h1>
      <div className="grid">
        <div className="grid__item">
          <Image
            layout="responsive"
            width={6}
            height={4}
            src="/photos/01.jpg"
          />
        </div>
        <div className="grid__item--portrait">
          <p>
            Since 2016, I’ve created a playlist of music for each month of the
            year, with corresponding cover art. For 2018’s cover art series, I
            chose to photograph the street life of Chinatown in Oakland,
            California, my current home.
          </p>
          <p>
            All images were shot on a Leica Q or Sony α6000 and edited in Adobe
            Lightroom. For more links to my work, go to{" "}
            <a href="https://daneden.me">my website</a>.
          </p>
          <details>
            <summary>Links to playlists</summary>
            <ol>
              <li>
                <a href="https://open.spotify.com/user/daneden/playlist/1nX5BEREXXrrGKDJ4GqGF3?si=5tXq6_23SDeftOOspvhtqw">
                  January
                </a>
              </li>
              <li>
                <a href="https://open.spotify.com/user/daneden/playlist/379mOZblgm1SHbioWCNN46?si=szhjvwETQ3eyiS-CgL3aXQ">
                  February
                </a>
              </li>
              <li>
                <a href="https://open.spotify.com/user/daneden/playlist/4XAA4bwQfZUqL1hk3TnW7f?si=Ee5rcBU3TWu0N-_bUoEIUQ">
                  March
                </a>
              </li>
              <li>
                <a href="https://open.spotify.com/user/daneden/playlist/2c4vcs0AWZ8titm0CktPy1?si=mSGWDYX-TpetoZHkj-cMNQ">
                  April
                </a>
              </li>
              <li>
                <a href="https://open.spotify.com/user/daneden/playlist/3TlqcpvPkjqpT6F2qe8vJ8?si=uY0uFlwIQzugU6bNaAosaA">
                  May
                </a>
              </li>
              <li>
                <a href="https://open.spotify.com/user/daneden/playlist/7j34go4jYfNKbj0bFRvikN?si=Wgoc5GjZSRixTi8p0TF7Uw">
                  June
                </a>
              </li>
              <li>
                <a href="https://open.spotify.com/user/daneden/playlist/0yA2yfChFIaWC9uPLQNfsZ?si=nZIamjYxSvq7ATwX0Ls76A">
                  July
                </a>
              </li>
              <li>
                <a href="https://open.spotify.com/user/daneden/playlist/0psbWZSL1dVW0pBpQL8SJd?si=G8OS0niXQKuGcQ0BZg7T4A">
                  August
                </a>
              </li>
              <li>
                <a href="https://open.spotify.com/user/daneden/playlist/5eiyd0tmNxvUElaUf6B7Yj?si=Q5YSm_RxQuGrIFx0-2OowA">
                  September
                </a>
              </li>
              <li>
                <a href="https://open.spotify.com/user/daneden/playlist/6I0zLyj3BRdpb2UnCZk6pp?si=XHw8QP_5QgWNnfeY4yT9zw">
                  October
                </a>
              </li>
              <li>
                <a href="https://open.spotify.com/user/daneden/playlist/2gZE8RqP3S94ZczoSwaNaJ?si=zUtPL6dzReGff9O22Zpeyg">
                  November
                </a>
              </li>
              <li>
                <a href="https://open.spotify.com/user/daneden/playlist/7gis8Tk9kOhOv4ObYBPySH?si=8AZsQ-2ATbSpKjC1gja0Pg">
                  December
                </a>
              </li>
              <li>
                <a href="https://open.spotify.com/user/daneden/playlist/1l8cBeDUZeggj3gBUsMTNs?si=ad_vMF5lQemnKuuRa4jrjQ">
                  2018
                </a>
              </li>
            </ol>
          </details>
        </div>
        <div className="grid__item">
          <Image
            layout="responsive"
            width={6}
            height={4}
            src="/photos/02.jpg"
          />
        </div>
        <div className="grid__item--portrait">
          <Image
            layout="responsive"
            width={4}
            height={6}
            src="/photos/03.jpg"
          />
        </div>
        <div className="grid__item--portrait">
          <Image
            layout="responsive"
            width={4}
            height={6}
            src="/photos/04.jpg"
          />
        </div>
        <div className="grid__item">
          <Image
            layout="responsive"
            width={6}
            height={4}
            src="/photos/05.jpg"
          />
        </div>
        <div className="grid__item--portrait">
          <Image
            layout="responsive"
            width={4}
            height={6}
            src="/photos/06.jpg"
          />
        </div>
        <div className="grid__item--portrait">
          <Image
            layout="responsive"
            width={4}
            height={6}
            src="/photos/07.jpg"
          />
        </div>
        <div className="grid__item--portrait">
          <Image
            layout="responsive"
            width={4}
            height={6}
            src="/photos/08.jpg"
          />
        </div>
        <div className="grid__item">
          <Image
            layout="responsive"
            width={6}
            height={4}
            src="/photos/09.jpg"
          />
        </div>
        <div className="grid__item">
          <Image
            layout="responsive"
            width={6}
            height={4}
            src="/photos/10.jpg"
          />
        </div>
        <div className="grid__item--portrait">
          <Image
            layout="responsive"
            width={4}
            height={6}
            src="/photos/11.jpg"
          />
        </div>
        <div className="grid__item--portrait">
          <Image
            layout="responsive"
            width={4}
            height={6}
            src="/photos/12.jpg"
          />
        </div>
      </div>
      <style jsx>{`
        :global(img) {
          background-color: rgba(128, 128, 128, 0.1);
        }
      `}</style>
      <style jsx>{`
        .title {
          transform: translate3d(0, ${offset / 2}px, 0);
        }
      `}</style>
    </>
  )
}
