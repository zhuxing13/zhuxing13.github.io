/* 弓 */

const archWeaponAttributes = {
    '模版':{
        roleProperties: '虚',       /* 武器属性 */
        weaponType: '单手剑',       /* 武器类型 */
        weaponCoefficient: 3,       /* 武器系数 */
        crit: 1,                    /* 自带暴击 */
        addAtk: 1,                  /* 攻击加成 */
        addDef: 1,                  /* 防御加成 */
        addHP: 1,                   /* 生命加成 */
        addHeal: 1,                 /* 回血加成 */
        basicAtk: 1,                /* 1级攻击白值 */
        basicDef: 1,                /* 1级防御白值 */
        basicHeal: 1,               /* 1级回血值白值 */
        skill: 1,                   /* 技伤 */
        cdSkill: 1,                 /* cd */
        reduceDamage: 1,            /* 伤害减免 */
    },
    '沙兰加神弓':{
        roleProperties: '土',    
        weaponType: '弓',    
        weaponCoefficient: 2,    
        crit: 10,                 
        addAtk: 10,               
        addDef: 18,               
        addHP: 20,                
        addHeal: 0,              
        basicAtk: 311,               
        basicDef: 0,               
        basicHeal: 216,               
        skill: 16,              
        cdSkill: 12,            
        reduceDamage: 0,         
    },
    '千雷弓':{
        roleProperties: '水',    
        weaponType: '弓',    
        weaponCoefficient: 2,    
        crit: 3,                 
        addAtk: 10,               
        addDef: 16,               
        addHP: 18,                
        addHeal: 0,              
        basicAtk: 332,               
        basicDef: 0,               
        basicHeal: 206,               
        skill: 20,              
        cdSkill: 18,            
        reduceDamage: 0,         
    },
    '圣母颂':{
        roleProperties: '光',    
        weaponType: '弓',    
        weaponCoefficient: 2,    
        crit: 5,                 
        addAtk: 10,               
        addDef: 16,               
        addHP: 18,                
        addHeal: 20,              
        basicAtk: 325,               
        basicDef: 0,               
        basicHeal: 217,               
        skill: 0,              
        cdSkill: 18,            
        reduceDamage: 0,         
    },
    '拜蒙碎片Ⅲ':{
        roleProperties: '火',    
        weaponType: '弓',    
        weaponCoefficient: 2,    
        crit: 0,                 
        addAtk: 10,               
        addDef: 20,               
        addHP: 18,                
        addHeal: 0,              
        basicAtk: 342,               
        basicDef: 0,               
        basicHeal: 200,               
        skill: 12,              
        cdSkill: 22,            
        reduceDamage: 0,         
    },
    '偷袭者':{
        roleProperties: '水',    
        weaponType: '弓',    
        weaponCoefficient: 2,    
        crit: 15,                 
        addAtk: 10,               
        addDef: 24,               
        addHP: 18,                
        addHeal: 0,              
        basicAtk: 294,               
        basicDef: 0,               
        basicHeal: 190,               
        skill: 15,              
        cdSkill: 15,            
        reduceDamage: 0,         
    },
    '奥伯伦':{
        roleProperties: '土',    
        weaponType: '弓',    
        weaponCoefficient: 2,    
        crit: 10,                 
        addAtk: 10,               
        addDef: 0,               
        addHP: 20,                
        addHeal: 15,              
        basicAtk: 308,               
        basicDef: 0,               
        basicHeal: 206,               
        skill: 20,              
        cdSkill: 18,            
        reduceDamage: 0,         
    },
    '利贝拉B型':{
        roleProperties: '虚',    
        weaponType: '弓',    
        weaponCoefficient: 2,    
        crit: 0,                 
        addAtk: 4,               
        addDef: 15,               
        addHP: 12,                
        addHeal: 0,              
        basicAtk: 322,               
        basicDef: 0,               
        basicHeal: 190,               
        skill: 20,              
        cdSkill: 15,            
        reduceDamage: 0,         
    },
}