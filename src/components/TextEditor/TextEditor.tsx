'use client'
import React, {  useMemo } from 'react'
import { useEditor, useEditorState, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit';
import { useDebounce } from '@/hook/useDebounce';



interface Props {
  content: string
  setContent: React.Dispatch<React.SetStateAction<string>>
}
export default function TiptapEditor({ content, setContent }: Props) {

  const extensions = useMemo(() => [
    StarterKit.configure({ heading: { levels: [1, 2, 3, 4] } }),
  ], [])

   const debouncedSearch = useDebounce((html: string) => {
    setContent(html)
  }, 300)


  const editor = useEditor({
    extensions,
    content: content,
    autofocus: true,
    immediatelyRender: true,
    shouldRerenderOnTransaction: false,
    onUpdate: ({ editor }) => {
      debouncedSearch(editor.getHTML())
    },
  })

  const active = useEditorState({
    editor,
    selector: ({ editor }) => ({
      bold: editor.isActive('bold'),
      code: editor.isActive('code'),
      h1: editor.isActive('heading', { level: 1 }),
      h2: editor.isActive('heading', { level: 2 }),
      bulletList: editor.isActive('bulletList'),
      orderedList: editor.isActive('orderedList'),
    }),
  })


 

  if (!editor) return null


  return (
    <div>
      <div className="inline-flex gap-2 bg-gray-200 rounded-t p-[5px]  common_rich_editor_menu_flex">
        <button
          className={active.bold ? 'is-active' : ''}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >Bold</button>
        <button
          className={active.code ? 'is-active' : ''}
          onClick={() => editor.chain().focus().toggleCode().run()}
        >Code</button>
        <button
          className={active.h1 ? 'is-active' : ''}
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        >H1</button>
        <button
          className={active.h2 ? 'is-active' : ''}
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        >H2</button>
        <button
          className={active.h1 ? 'is-active' : ''}
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        >H3</button>
        <button
          className={active.h2 ? 'is-active' : ''}
          onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        >H4</button>
        <button
          className={active.bulletList ? 'is-active' : ''}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >Bullet list</button>
        <button
          className={active.orderedList ? 'is-active' : ''}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >Ordered list</button>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
        >Undo</button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
        >Redo</button>
      </div>
      <div className="common_rich_editor editorBox">
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}
