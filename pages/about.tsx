import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import image01 from "../public/img/01.png";
import image02 from "../public/img/02.png";
import diagram1000 from "../public/img/diagram-1000.png";
import diagram1500 from "../public/img/diagram-1500.png";
import diagram2000 from "../public/img/diagram-2000.png";
import { useState } from "react";
import LargeRadio from "../components/largeRadio";

const About: NextPage = () => {
  const [imgIndex, setImgIndex] = useState<number>(0);
  const diagrams = [diagram1000, diagram1500, diagram2000];
  return (
    <>
      <Head>
        <title>About | Tokyo Textile</title>
        <meta
          name="description"
          content="This page visualize bike share information via Public Transportation Open Data Center."
        />
      </Head>
      <main>
        <div className="container">
          <h1>Tokyo Textile</h1>
          <p>Author: Kanata Yamagishi</p>
          <section>
            <div className="text-container">
              <p>
                シェアサイクルは何を可能にしたのだろうか。
                <br />
                私は、東京都内の主要な移動手段である電車とシェアサイクルを比較した上で、シェアサイクルがもたらす移動の変化、ならびに都市空間に対する人々の認識の変化を可視化することを試みた。
                電車を使用した駅から駅への移動は、その移動経路が路線に拘束される。人々は好き勝手に駅と駅の間を接続することはできず、そのため空間的には近くにあっても遠くにあるように感じる、降りる駅が変われば全く別の空間のように感じるといった歪な空間認識がしばしば生じる。
                <br />
                一方で、自転車を使用したシェアサイクル用のステーション間の移動は、道のある限り自由に、無数の経路で接続することが可能である。こうした無数の経路が織りなすネットワークは、電車の「線」が強く意識されるネットワークとは異なり、一つの巨大な「面」を構成する。このようなネットワークを利用できるようになった人々は、従来の駅を中心とした断片的な空間ではなく、ある程度の広さをもった「陸地」を獲得したのではないだろうか。
                <br />
                本作品は、シェアサイクルのステーション間の直線距離に基づいて、移動可能な近隣のステーションを結ぶネットワークを可視化している。徐々に編み込まれていくネットワークに、電車移動との違いを感じ取ってもらいたい。
              </p>
              <br />
              <p>
                What has the shared cycle made possible? <br />I attempted to
                visualize the changes in mobility brought about by shared
                bicycles, as well as changes in people&apos;s perceptions of
                urban space, by comparing trains, the main means of
                transportation in Tokyo, and shared bicycles.
                <br /> When people travel from station to station by train,
                their travel routes are constrained by the train line. People
                cannot connect between stations as they wish, and this often
                results in distorted perceptions of space, such as feeling as if
                a place is far away even though it is spatially close, or
                feeling as if it is a completely different space if the station
                where you get off the train is different. On the other hand, the
                bicycle can be freely connected to the shared bike stations via
                a myriad of routes, as long as there are roads available. The
                network of these myriad paths constitutes one huge
                &quot;surface. This is different from the &quot;linear&quot;
                network constructed by train line. People who have access to
                such a network may have acquired a &quot;land&quot; of some
                extent, rather than the conventional fragmented space centered
                on a station. This work visualizes a network connecting mobile
                neighborhood stations based on the linear distance between
                shared cycle stations. I want the viewer to sense the difference
                from train travel through the gradually knitted network.
              </p>
            </div>
            <div className="image-container">
              <Image src={image01} alt="01" placeholder="blur" />
              <Image src={image02} alt="02" placeholder="blur" />
            </div>
          </section>

          <section>
            <div className="text-container">
              <h2>Usage</h2>
              <p>
                画面内の白い丸は東京都内の駅、その白い丸から伸びる線は、それぞれの駅から直接移動できる駅（＝同じ路線の隣接する駅）へと繋がっています。また、緑色の小さい丸は、ドコモ・バイクシェアによって提供されている、シェアサイクルのステーションの位置を表しています。
              </p>
              <p>
                画面最下部にあるラジオボタンのうち一つを選択すると、それぞれの自転車のステーションから、ラジオボタンによって選択された距離の範囲内で到達可能なすべてのステーションが線で結ばれます。
              </p>
              <p></p>
            </div>
            <div className="image-container">
              <Image src={diagrams[imgIndex]} alt="01" placeholder="blur" />
              <div
                style={{
                  display: "flex",
                  width: "30%",
                  margin: "15px auto",
                  justifyContent: "space-between",
                }}
              >
                <LargeRadio
                  txt="1km"
                  value="0"
                  currentValue={imgIndex}
                  onclick={() => setImgIndex(0)}
                />
                <LargeRadio
                  txt="1.5km"
                  value="1"
                  currentValue={imgIndex}
                  onclick={() => setImgIndex(1)}
                />
                <LargeRadio
                  txt="2km"
                  value="2"
                  currentValue={imgIndex}
                  onclick={() => setImgIndex(2)}
                />
              </div>
            </div>
          </section>

          <section>
            <div className="text-container">
              <h2>Data Source</h2>
              <div>
                本作品で使用したオープンデータは以下。
                <ul>
                  <li>
                    <a href="https://ckan.odpt.org/dataset/c_bikeshare_gbfs-d-bikeshare/resource/4412364a-2893-4304-9644-d6d0329f0d40">
                      ドコモ・バイクシェア バイクシェア関連情報(GBFS 形式) /
                      Bikeshare information (GBFS format) of DOCOMO BIKESHARE,
                      INC.
                    </a>{" "}
                    licensed under CC BY 4.0
                  </li>
                  <li>
                    <a href="https://opendata-web.site/station/13/eki/">
                      東京都の駅-路線の最新リストデータ 鉄道 | オープンポータル
                    </a>
                  </li>
                </ul>
                <p>
                  データの加工のために以下のスクリプトを作成した。
                  <br />
                  <a href="https://colab.research.google.com/drive/1GEP3RDCWGKOBZdxKdwOezwaHneDf2fAc?usp=sharing">
                    Script (Google Colaboratory)
                  </a>
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="text-container">
              <h2>Appendix</h2>
              <ul>
                <li>
                  github:{" "}
                  <a href="https://github.com/k1105/tokyo_textile">
                    k1105/tokyo-textile
                  </a>
                </li>
                <li>contact: k22[at]iamas.ac.jp</li>
              </ul>
            </div>
          </section>

          <p className="small-text">
            この作品はCreative Commons BY 4.0のもと公開しています。
            本作品の文章、ソースコード、画像等は適切なクレジット表記のもと商用出版含めご自由に利用ください。
          </p>

          <p>
            <Link href="/">
              <a>Top</a>
            </Link>
          </p>
        </div>

        <style jsx>{`
          main {
            color: #ddd;
            background: #242322;
            padding-bottom: 50px;
            padding-top: 50px;
          }
          .container {
            width: 70vw;
            margin: 0 auto;
          }

          h1 {
            margin-bottom: 20px;
          }
          h2 {
            margin-bottom: 15px;
          }
          section {
            margin-bottom: 50px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }
          p {
            margin-bottom: 10px;
            line-height: 1.6rem;
          }
          ul {
            margin-bottom: 10px;
            margin-left: 1rem;
          }
          a {
            text-decoration: underline;
          }
          .text-container {
            width: 45%;
          }
          .image-container {
            width: 50%;
          }

          .small-text {
            font-size: 0.7rem;
            line-height: 0.8rem;
          }

          @media and screen (max-width: 480px) {
            main {
              padding: 30px 5vw;
            }
            .text-container,
            .image-container {
              width: 100%;
            }
            .container {
              width: 90vw;
            }
          }
        `}</style>
      </main>
    </>
  );
};

export default About;
