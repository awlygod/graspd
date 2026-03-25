import { useState } from 'react'
import { Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'
import CanvasPrompt from './CanvasPrompt'
import ChatPanel from './chat/ChatPanel'
import styles from './Canvas.module.css'

export default function Canvas() {
  const [editor, setEditor]   = useState(null)
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <div className={styles.root}>
      <Tldraw
        inferDarkMode
        persistenceKey="graspd-canvas"
        onMount={ed => setEditor(ed)}
      />
      {editor && (
        <CanvasPrompt
          editor={editor}
          onOpenChat={() => setChatOpen(true)}
        />
      )}
      {editor && (
        <ChatPanel
          editor={editor}
          open={chatOpen}
          onClose={() => setChatOpen(false)}
        />
      )}
    </div>
  )
}