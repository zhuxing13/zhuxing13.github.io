/* 手套 */

const gloveWeaponAttributes = {
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
    '明镜止水':{
        roleProperties: '虚',    
        weaponType: '手套',    
        weaponCoefficient: 4,    
        crit: 12,                 
        addAtk: 10,               
        addDef: 16,               
        addHP: 18,                
        addHeal: 0,              
        basicAtk: 176,               
        basicDef: 29,               
        basicHeal: 0,               
        skill: 20,              
        cdSkill: 18,            
        reduceDamage: 0,         
    },
    '山神':{
        roleProperties: '土',    
        weaponType: '手套',    
        weaponCoefficient: 4,    
        crit: 8,                 
        addAtk: 10,               
        addDef: 24,               
        addHP: 16,                
        addHeal: 0,              
        basicAtk: 182,               
        basicDef: 30,               
        basicHeal: 0,               
        skill: 24,              
        cdSkill: 12,            
        reduceDamage: 0,         
    },
    '伊芙利特':{
        roleProperties: '火',    
        weaponType: '手套',    
        weaponCoefficient: 4,    
        crit: 2,                 
        addAtk: 10,               
        addDef: 18,               
        addHP: 22,                
        addHeal: 0,              
        basicAtk: 194,               
        basicDef: 28,               
        basicHeal: 0,               
        skill: 20,              
        cdSkill: 15,            
        reduceDamage: 0,         
    },
    '办公用品':{
        roleProperties: '土',    
        weaponType: '手套',    
        weaponCoefficient: 4,    
        crit: 5,                 
        addAtk: 10,               
        addDef: 18,               
        addHP: 22,                
        addHeal: 0,              
        basicAtk: 188,               
        basicDef: 27,               
        basicHeal: 0,               
        skill: 20,              
        cdSkill: 14,            
        reduceDamage: 0,         
    },
    '暮色':{
        roleProperties: '暗',    
        weaponType: '手套',    
        weaponCoefficient: 4,    
        crit: 4,                 
        addAtk: 10,               
        addDef: 18,               
        addHP: 20,                
        addHeal: 0,              
        basicAtk: 190,               
        basicDef: 26,               
        basicHeal: 0,               
        skill: 18,              
        cdSkill: 20,            
        reduceDamage: 0,         
    },
    '火山核心':{
        roleProperties: '火',    
        weaponType: '手套',    
        weaponCoefficient: 4,    
        crit: 6,                 
        addAtk: 10,               
        addDef: 20,               
        addHP: 22,                
        addHeal: 0,              
        basicAtk: 179,               
        basicDef: 13,               
        basicHeal: 0,               
        skill: 16,              
        cdSkill: 16,            
        reduceDamage: 0,         
    },
    '威名显赫':{
        roleProperties: '土',    
        weaponType: '手套',    
        weaponCoefficient: 4,    
        crit: 7,                 
        addAtk: 10,               
        addDef: 22,               
        addHP: 0,                
        addHeal: 0,              
        basicAtk: 185,               
        basicDef: 28,               
        basicHeal: 0,               
        skill: 20,              
        cdSkill: 14,            
        reduceDamage: 0,         
    },
    '拒绝访问':{
        roleProperties: '暗',    
        weaponType: '手套',    
        weaponCoefficient: 4,    
        crit: 6,                 
        addAtk: 10,               
        addDef: 16,               
        addHP: 22,                
        addHeal: 0,              
        basicAtk: 188,               
        basicDef: 26,               
        basicHeal: 0,               
        skill: 20,              
        cdSkill: 18,            
        reduceDamage: 0,         
    },
    '行星破坏者':{
        roleProperties: '火',    
        weaponType: '手套',    
        weaponCoefficient: 4,    
        crit: 4,                 
        addAtk: 10,               
        addDef: 22,               
        addHP: 18,                
        addHeal: 0,              
        basicAtk: 183,               
        basicDef: 32,               
        basicHeal: 0,               
        skill: 0,              
        cdSkill: 16,            
        reduceDamage: 0,         
    },
    '造雪机':{
        roleProperties: '水',    
        weaponType: '手套',    
        weaponCoefficient: 4,    
        crit: 5,                 
        addAtk: 10,               
        addDef: 16,               
        addHP: 22,                
        addHeal: 0,              
        basicAtk: 189,               
        basicDef: 20,               
        basicHeal: 0,               
        skill: 20,              
        cdSkill: 16,            
        reduceDamage: 0,         
    },
    '魔血玉':{
        roleProperties: '火',    
        weaponType: '手套',    
        weaponCoefficient: 4,    
        crit: 10,                 
        addAtk: 10,               
        addDef: 22,               
        addHP: 18,                
        addHeal: 0,              
        basicAtk: 180,               
        basicDef: 26,               
        basicHeal: 0,               
        skill: 20,              
        cdSkill: 16,            
        reduceDamage: 0,         
    },
    '魔甲拳':{
        roleProperties: '土',    
        weaponType: '手套',    
        weaponCoefficient: 4,    
        crit: 4,                 
        addAtk: 10,               
        addDef: 22,               
        addHP: 18,                
        addHeal: 0,              
        basicAtk: 189,               
        basicDef: 22,               
        basicHeal: 0,               
        skill: 20,              
        cdSkill: 16,            
        reduceDamage: 0,         
    },
    '乌尔坎':{
        roleProperties: '土',    
        weaponType: '手套',    
        weaponCoefficient: 4,    
        crit: 10,                 
        addAtk: 10,               
        addDef: 16,               
        addHP: 28,                
        addHeal: 0,              
        basicAtk: 160,               
        basicDef: 37,               
        basicHeal: 0,               
        skill: 15,              
        cdSkill: 0,            
        reduceDamage: 75,         
    },
    '拳士的自尊':{
        roleProperties: '光',    
        weaponType: '手套',    
        weaponCoefficient: 4,    
        crit: 12,                 
        addAtk: 10,               
        addDef: 18,               
        addHP: 20,                
        addHeal: 0,              
        basicAtk: 161,               
        basicDef: 36,               
        basicHeal: 0,               
        skill: 20,              
        cdSkill: 18,            
        reduceDamage: 0,         
    },
    '粉碎者':{
        roleProperties: '火',    
        weaponType: '手套',    
        weaponCoefficient: 4,    
        crit: 8,                 
        addAtk: 10,               
        addDef: 20,               
        addHP: 28,                
        addHeal: 0,              
        basicAtk: 154,               
        basicDef: 39,               
        basicHeal: 0,               
        skill: 0,              
        cdSkill: 0,            
        reduceDamage: 75,         
    },
}