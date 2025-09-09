import { defineToolSet } from '@tool/type';
import { ToolTypeEnum } from '@tool/type/tool';

export default defineToolSet({
  name: {
    'zh-CN': 'MinerU',
    en: 'MinerU'
  },
  type: ToolTypeEnum.tools,
  description: {
    'zh-CN':
      'MinerU是一款可以在本地部署的将FILES转化为机器可读格式的工具（如markdown、json），可以很方便地抽取为任意格式。',
    en: 'MinerU is a tool that can convert FILES to machine-readable formats (such as markdown, json) and can easily extract to any format.'
  },
  secretInputConfig: [
    {
      key: 'base_url',
      label: 'MinerU 地址',
      description: '官方地址为：https://mineru.net，也可使用本地部署的地址',
      inputType: 'input'
    },
    {
      key: 'token',
      label: 'API Token',
      description:
        '官方在线 MinerU 解析服务的 API Token，可在 https://mineru.net/apiManage/docs 申请获取',
      inputType: 'secret'
    }
  ]
});
