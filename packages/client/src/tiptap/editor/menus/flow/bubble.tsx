import { IconCopy, IconDelete, IconEdit } from '@douyinfe/semi-icons';
import { Button, Space } from '@douyinfe/semi-ui';
import { Tooltip } from 'components/tooltip';
import { useCallback } from 'react';
import { Divider } from 'tiptap/components/divider';
import { Flow } from 'tiptap/core/extensions/flow';
import { useAttributes } from 'tiptap/editor/hooks/use-attributes';
import { BubbleMenu } from 'tiptap/editor/views/bubble-menu';
import { copyNode, deleteNode } from 'tiptap/prose-utils';

import { triggerOpenFlowSettingModal } from '../_event';

export const FlowBubbleMenu = ({ editor }) => {
  const attrs = useAttributes(editor, Flow.name, {});

  const openEditLinkModal = useCallback(() => {
    triggerOpenFlowSettingModal(editor, attrs);
  }, [editor, attrs]);
  const shouldShow = useCallback(() => editor.isActive(Flow.name), [editor]);
  const copyMe = useCallback(() => copyNode(Flow.name, editor), [editor]);
  const deleteMe = useCallback(() => deleteNode(Flow.name, editor), [editor]);

  return (
    <BubbleMenu
      className={'bubble-menu'}
      editor={editor}
      pluginKey="flow-bubble-menu"
      shouldShow={shouldShow}
      tippyOptions={{ maxWidth: 'calc(100vw - 100px)' }}
    >
      <Space spacing={4}>
        <Tooltip content="复制">
          <Button onClick={copyMe} icon={<IconCopy />} type="tertiary" theme="borderless" size="small" />
        </Tooltip>

        <Tooltip content="编辑">
          <Button size="small" type="tertiary" theme="borderless" icon={<IconEdit />} onClick={openEditLinkModal} />
        </Tooltip>

        <Divider />

        <Tooltip content="删除节点" hideOnClick>
          <Button onClick={deleteMe} icon={<IconDelete />} type="tertiary" theme="borderless" size="small" />
        </Tooltip>
      </Space>
    </BubbleMenu>
  );
};
