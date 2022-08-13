import React from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed'

const beautify = () => {
  return (
    <div className="min-h-[100vh] bg-gray-100">
      <div className="flex flex-col px-[2vw] py-[2vh] w-full md:w-[80vw] border-2 border-black mx-auto gap-y-[2vh]">
        <div className="embed-tweet flex flex-col">
          <label htmlFor="embedTweet">Embed Tweet</label>
          <input type="text" name="embedTweet" />
        </div>

        <div className="">
          <TwitterTweetEmbed className="h-[10vh]" tweetId="1556059188194951168" options={{}} />
          {/* learn oembed twitter api */}
        </div>

{/* <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Sunsets don&#39;t get much better than this one over <a href="https://twitter.com/GrandTetonNPS?ref_src=twsrc%5Etfw">@GrandTetonNPS</a>. <a href="https://twitter.com/hashtag/nature?src=hash&amp;ref_src=twsrc%5Etfw">#nature</a> <a href="https://twitter.com/hashtag/sunset?src=hash&amp;ref_src=twsrc%5Etfw">#sunset</a> <a href="http://t.co/YuKy2rcjyU">pic.twitter.com/YuKy2rcjyU</a></p>&mdash; US Department of the Interior (@Interior) <a href="https://twitter.com/Interior/status/463440424141459456?ref_src=twsrc%5Etfw">May 5, 2014</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}

      </div>
    </div>
  )
}

export default beautify
