# Tokyo Textile

Kanata Yamagishi | 山岸 奏大

### Abstruct

What has the shared cycle made possible?

I attempted to visualize the changes in mobility brought about by shared bicycles, as well as changes in people's perceptions of urban space, by comparing trains, the main means of transportation in Tokyo, and shared bicycles.

When people travel from station to station by train, their travel routes are constrained by the train line. People cannot connect between stations as they wish, and this often results in distorted perceptions of space, such as feeling as if a place is far away even though it is spatially close, or feeling as if it is a completely different space if the station where you get off the train is different.

On the other hand, the bicycle can be freely connected to the shared bike stations via a myriad of routes, as long as there are roads available. The network of these myriad paths constitutes one huge "surface. This is different from the "linear" network constructed by train line. People who have access to such a network may have acquired a "land" of some extent, rather than the conventional fragmented space centered on a station.

This work visualizes a network connecting mobile neighborhood stations based on the linear distance between shared cycle stations. I want the viewer to sense the difference from train travel through the gradually knitted network.

シェアサイクルは何を可能にしたのだろうか。

私は、東京都内の主要な移動手段である電車とシェアサイクルを比較した上で、シェアサイクルがもたらす移動の変化、ならびに都市空間に対する人々の認識の変化を可視化することを試みた。

電車を使用した駅から駅への移動は、その移動経路が路線に拘束される。人々は好き勝手に駅と駅の間を接続することはできず、そのため空間的には近くにあっても遠くにあるように感じる、降りる駅が変われば全く別の空間のように感じるといった歪な空間認識がしばしば生じる。

一方で、自転車を使用したシェアサイクル用のステーション間の移動は、道のある限り自由に、無数の経路で接続することが可能である。こうした無数の経路が織りなすネットワークは、電車の「線」が強く意識されるネットワークとは異なり、一つの巨大な「面」を構成する。このようなネットワークを利用できるようになった人々は、従来の駅を中心とした断片的な空間ではなく、ある程度の広さをもった「陸地」を獲得したのではないだろうか。

本作品は、シェアサイクルのステーション間の直線距離に基づいて、移動可能な近隣のステーションを結ぶネットワークを可視化している。徐々に編み込まれていくネットワークに、電車移動との違いを感じ取ってもらいたい。

### Data Source

本作品で使用したオープンデータは以下。

1. ドコモ・バイクシェア バイクシェア関連情報(GBFS 形式) / Bikeshare information (GBFS format) of DOCOMO BIKESHARE, INC.
   [https://ckan.odpt.org/dataset/c_bikeshare_gbfs-d-bikeshare/resource/4412364a-2893-4304-9644-d6d0329f0d40?inner_span=True](https://ckan.odpt.org/dataset/c_bikeshare_gbfs-d-bikeshare/resource/4412364a-2893-4304-9644-d6d0329f0d40?inner_span=True)

2. 東京都の駅-路線の最新リストデータ 鉄道 | オープンポータル
   [https://opendata-web.site/station/13/eki/](https://opendata-web.site/station/13/eki/)

データの加工のために以下のスクリプトを作成した.
[https://colab.research.google.com/drive/1GEP3RDCWGKOBZdxKdwOezwaHneDf2fAc?usp=sharing](https://colab.research.google.com/drive/1GEP3RDCWGKOBZdxKdwOezwaHneDf2fAc?usp=sharing)
