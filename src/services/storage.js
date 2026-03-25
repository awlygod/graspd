// storage.js
// Stores chat history per tldraw page ID
// When backend is ready, replace localStorage calls with API calls here

const CHAT_PREFIX = 'graspd_chat_'

// Get chat history for a specific page
export function getChatHistory(pageId) {
  try {
    const raw = localStorage.getItem(`${CHAT_PREFIX}${pageId}`)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

// Save chat history for a specific page
export function saveChatHistory(pageId, messages) {
  try {
    localStorage.setItem(`${CHAT_PREFIX}${pageId}`, JSON.stringify(messages))
  } catch {}
}

// Delete chat history for a specific page
export function deleteChatHistory(pageId) {
  try {
    localStorage.removeItem(`${CHAT_PREFIX}${pageId}`)
  } catch {}
}