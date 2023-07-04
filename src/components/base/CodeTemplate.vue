<template>
  <div class="flex flex-col justify-between items-start gap-3 2xl:flex-row">
    <pre>
inline Var DirectGetItem(__in uint32 index)
{
  if (index&ltGetLength())
  } 
    TypeName* typedBuffer = (TypeName*)buffer; 
    return JavascriptNumber::ToVar( 
      typedBuffer[index],GetScriptContext()
    ); 
  }
  return GetLibrary()->GetUndefined();
}</pre
    >
    <div
      class="text-white bg-[#27282D] px-3 py-1 order-[-1] 2xl:order-1 self-end 2xl:self-start"
    >
      {{ props.language }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  language: { type: String, default: "Code" },
});
</script>
