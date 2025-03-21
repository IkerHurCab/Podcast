import { Mic, AudioWaveformIcon as Waveform, Music, Upload } from "lucide-react"

export default function ProductionProcess() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Our Production Process</h2>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
        <p className="mb-8">
          At CodeWaves, we're committed to delivering high-quality audio content. Here's a look at how we produce each
          episode:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
                <Mic className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Recording</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We record using professional-grade microphones in a sound-treated environment to ensure clear audio.
                  For interviews, we use Riverside.fm to capture high-quality remote conversations.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
                <Waveform className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Editing</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Each episode is carefully edited in Audacity to remove background noise, normalize audio levels, and
                  enhance clarity. We trim pauses and mistakes while preserving the natural flow of conversation.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
                <Music className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Music & Sound Design</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We add royalty-free intro/outro music and sound effects to enhance the listening experience. Our
                  signature intro helps listeners immediately recognize our podcast.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
                <Upload className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Publishing</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Episodes are exported as MP3 files (192kbps) for optimal quality and file size. We use FFmpeg for
                  final compression and metadata tagging before uploading to podcast hosting platforms.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Tools We Use</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-500 dark:text-gray-400">
            <li>Audacity for recording and editing</li>
            <li>FFmpeg for audio compression and conversion</li>
            <li>Rode PodMic and Focusrite Scarlett interface for recording</li>
            <li>Adobe Audition for advanced audio processing</li>
            <li>Canva for episode artwork</li>
            <li>Riverside.fm for remote interviews</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

